import React from 'react';
import type { DialogueLine } from '../../types/interview';

export const InterviewDialogue = ({ dialogue }: { dialogue: DialogueLine[] }) => {
    if (!dialogue || dialogue.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 md:gap-14 mt-8 relative">
            {/* Thread line connecting dialogues */}
            <div className="absolute left-6 md:left-[120px] top-6 bottom-6 w-px bg-gradient-to-b from-white/0 via-white/5 to-white/0 hidden md:block"></div>

            {dialogue.map((line, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-4 md:gap-12 relative ${line.isInterviewer ? 'md:pr-24' : 'md:pl-24'}`}>
                    
                    {/* Timestamp / Marker Column */}
                    <div className="w-full md:w-[120px] flex-shrink-0 flex md:justify-end md:pr-4 mt-1 md:mt-2 relative z-10">
                        {line.timestamp && (
                            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 h-fit bg-[#0f0f0f] relative
                                ${line.isInterviewer ? 'text-foreground/40' : 'text-accent'}`
                            }>
                                {line.timestamp}
                            </span>
                        )}
                        {/* Status node on the thread */}
                        <div className={`hidden md:block absolute right-[-4.5px] top-2.5 w-2 h-2 rounded-full border border-[#0f0f0f] shadow-[0_0_0_2px_background] transition-all duration-300
                            ${line.isInterviewer ? 'bg-white/10' : 'bg-accent shadow-[0_0_12px_#ff6000]'}`}
                        ></div>
                    </div>

                    {/* Dialogue Content Box */}
                    <div className={`flex-grow p-6 md:p-8 rounded-[1.5rem] border relative group transition-all duration-500
                        ${line.isInterviewer ? 'bg-white/[0.015] border-white/5 rounded-tl-md' : 'bg-[#0a0a0c] border-white/[0.08] hover:border-accent/30 rounded-tr-md shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_2px_10px_rgba(255,255,255,0.02)] hover:shadow-[0_0_40px_rgba(255,96,0,0.1),inset_0_2px_10px_rgba(255,255,255,0.02)]'}`
                    }>
                        
                        {/* High-tech accent lines */}
                        {!line.isInterviewer && (
                            <div className="absolute top-0 right-4 w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                        )}

                        <div className="mb-4">
                            <span className={`font-mono text-[9px] uppercase font-bold tracking-[0.3em] px-2 py-1 rounded inline-block transition-colors
                                ${line.isInterviewer ? 'text-foreground/40 bg-white/5 border border-white/5' : 'text-accent bg-accent/10 border border-accent/20'}`}
                            >
                                {line.speaker}
                            </span>
                        </div>
                        <p className={`font-serif text-2xl md:text-3xl leading-[1.4] tracking-tight
                            ${line.isInterviewer ? 'text-foreground/70' : 'text-white drop-shadow-sm'}`}
                        >
                            {line.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
