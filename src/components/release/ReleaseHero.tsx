import React from 'react';
import type { Release } from '../../types/release';

export const ReleaseHero = ({ release }: { release: Release }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20 relative z-10">
            {/* Record Sleeve */}
            <div className="w-full lg:w-[45%] max-w-[500px] flex-shrink-0">
                <div className="w-full relative bg-[#030303] aspect-square p-3 sm:p-4 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                    <div className="w-full h-full rounded-[1.5rem] sm:rounded-[1.8rem] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                        <img src={release.cover} alt={release.title} className="w-full h-full object-cover filter brightness-90" />
                        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[1.8rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] z-20 pointer-events-none"></div>
                        {/* Vinyl Groove styling hint */}
                        <div className="absolute top-4 right-4 text-white/50 backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] border border-white/10 z-20">Analogue Cut</div>
                    </div>
                </div>
            </div>

            {/* Release Info */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg font-mono text-[9px] uppercase tracking-[0.3em] text-accent font-bold">
                        <span className="w-1.5 h-1.5 bg-accent rounded-sm shadow-[0_0_8px_#ff6000]"></span>
                        {release.id}
                    </span>
                    <span className="font-mono text-[10px] text-foreground/40 tracking-[0.2em]">{release.year}</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter text-white leading-[0.95] drop-shadow-lg mb-4">
                    {release.title}
                </h1>
                <h2 className="font-sans text-2xl font-bold text-foreground/60 mb-10">
                    {release.artist}
                </h2>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 max-w-sm pt-8 border-t border-white/[0.05]">
                    <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40 font-bold mb-1">Label</div>
                        <div className="font-sans text-sm text-white font-medium">{release.label}</div>
                    </div>
                    <div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40 font-bold mb-1">Genre</div>
                        <div className="font-sans text-sm text-white font-medium">{release.genre}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
