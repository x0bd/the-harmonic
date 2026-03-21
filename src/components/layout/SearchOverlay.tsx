import React, { useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import { isSearchOpen, toggleSearch } from '../../store/uiStore';

export const SearchOverlay = () => {
    const $isSearchOpen = useStore(isSearchOpen);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
            if (e.key === '/' && !$isSearchOpen) {
                e.preventDefault();
                toggleSearch();
            }
            if (e.key === 'Escape' && $isSearchOpen) {
                isSearchOpen.set(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [$isSearchOpen]);

    useEffect(() => {
        if ($isSearchOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [$isSearchOpen]);

    return (
        <AnimatePresence>
            {$isSearchOpen && (
                <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="fixed inset-0 z-[200] bg-[#0a0a0c]/90 flex flex-col items-center pt-24 lg:pt-32 px-4"
                >
                    <button 
                        onClick={() => isSearchOpen.set(false)}
                        className="absolute top-8 right-8 lg:right-12 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer z-[201] group"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <div className="w-full max-w-4xl relative">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative"
                        >
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-accent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </span>
                            <input 
                                ref={inputRef}
                                type="text"
                                placeholder="QUERY ARCHIVE [/]"
                                className="w-full bg-[#030303] border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-2xl lg:text-4xl font-serif text-white placeholder-foreground/20 focus:outline-none focus:border-accent/50 shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.02)] transition-colors"
                            />
                            
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2 pointer-events-none">
                                <kbd className="hidden sm:inline-flex items-center justify-center h-8 px-2 font-mono text-[10px] text-foreground/40 bg-white/5 border border-white/10 rounded uppercase tracking-[0.2em]">ESC</kbd>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                            className="mt-12 flex flex-col gap-2"
                        >
                            <div className="font-mono text-[10px] uppercase text-accent tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-sm shadow-[0_0_8px_#ff6000]"></span>
                                Suggested Nodes
                            </div>
                            
                            {/* Static Mock Search Results */}
                            {[
                                { title: 'Rrose – Silence as Velocity', type: 'INTERVIEW', url: '/interviews/silence-as-velocity' }, 
                                { title: 'KORG MS-20', type: 'HARDWARE', url: '/hardware/korg-ms-20' }, 
                                { title: 'Careful', type: 'RELEASE', url: '/releases/careful' }
                            ].map((result, i) => (
                                <a key={i} href={result.url} onClick={() => isSearchOpen.set(false)} className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40 group-hover:text-accent font-bold w-20">{result.type}</span>
                                        <span className="font-serif text-xl sm:text-2xl text-foreground/70 group-hover:text-white transition-colors">{result.title}</span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30 group-hover:text-accent transition-colors hidden sm:block">Access</span>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
