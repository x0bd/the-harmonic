import React from 'react';

export const TrackList = ({ tracks }: { tracks: any[] }) => {
    if (!tracks || tracks.length === 0) return null;

    return (
        <div className="w-full max-w-3xl bg-[#08080a] border border-white/[0.05] rounded-[2rem] p-6 md:p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.02),0_20px_40px_rgba(0,0,0,0.5)]">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent shadow-[0_0_8px_#ff6000]"></span>
                Track Manifest
            </h3>
            
            <div className="flex flex-col gap-2">
                {tracks.map((track, i) => (
                    <div key={i} className="group flex justify-between items-center py-4 px-4 hover:bg-white/[0.02] rounded-xl transition-colors border border-transparent hover:border-white/[0.05] cursor-pointer relative overflow-hidden">
                        {/* Play indicator line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-md shadow-[0_0_10px_#ff6000]"></div>
                        
                        <div className="flex items-center gap-6 pl-2">
                            <span className="font-mono text-[10px] text-foreground/30 tracking-[0.2em] w-6 group-hover:text-accent transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="font-sans font-semibold text-[15px] text-foreground/80 group-hover:text-white transition-colors tracking-tight">
                                {track.title}
                            </span>
                        </div>
                        <span className="font-mono text-[10px] text-foreground/40 tracking-[0.2em] group-hover:text-white transition-colors">
                            {track.duration}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
