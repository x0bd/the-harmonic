import React from 'react';
import { useStore } from '@nanostores/react';
import { audioPlayerState, togglePlayback, setTrack } from '../../store/audioStore';

export const AudioPlayer = ({ duration, title, src }: { duration?: string; title: string, src?: string }) => {
    const $audioState = useStore(audioPlayerState);
    
    // Determine active state relative to this specific track
    const isThisTrackPlaying = $audioState.currentTrack?.title === title && $audioState.isPlaying;

    const handlePlayPause = () => {
        if ($audioState.currentTrack?.title !== title) {
            setTrack(title, duration, src);
        } else {
            togglePlayback();
        }
    };

    return (
        <div className="w-full bg-[#0a0a0c] border border-white/10 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.02)] relative overflow-hidden group mb-16">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0"></div>
            
            <button 
                onClick={handlePlayPause}
                className="relative z-10 w-20 h-20 rounded-full bg-[#111] flex-shrink-0 flex items-center justify-center border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_30px_rgba(255,96,0,0.3)]"
            >
                {/* Visual LED */}
                <div className={`absolute top-2 right-3 w-2 h-2 rounded-full transition-colors duration-300 ${isThisTrackPlaying ? 'bg-accent shadow-[0_0_12px_#ff6000]' : 'bg-white/20'}`}></div>
                
                {isThisTrackPlaying ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z" /></svg>
                )}
            </button>

            <div className="flex-grow w-full relative z-10">
                <div className="flex justify-between items-end mb-3">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                        {isThisTrackPlaying && <span className="w-1.5 h-1.5 bg-accent animate-pulse rounded-sm"></span>}
                        {isThisTrackPlaying ? 'TRANSMITTING' : 'AUDIO_ARCHIVE'}
                    </span>
                    <span className="font-mono text-[10px] text-foreground/40 tracking-[0.2em]">{isThisTrackPlaying ? 'PLAYING...' : 'PAUSED'} // {duration || '00:00'}</span>
                </div>
                <h3 className="font-serif text-2xl text-white truncate mb-5">{title}</h3>
                
                {/* Hardware-styled Waveform timeline */}
                <div className="w-full h-12 flex items-end gap-[3px] opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
                    {Array.from({ length: 70 }).map((_, i) => {
                        const height = Math.random() * 80 + 20;
                        const isPlayed = isThisTrackPlaying && i < 20; // Fake played progress
                        return (
                           <div 
                               key={i} 
                               className={`flex-1 rounded-t-sm transition-all duration-300 ${isPlayed ? 'bg-accent shadow-[0_0_8px_rgba(255,96,0,0.5)]' : 'bg-white/10 hover:bg-white/40'}`} 
                               style={{ height: `${height}%` }}
                           ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
