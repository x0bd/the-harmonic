import React from "react";

const ViewportFrame = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[90] p-6 flex flex-col justify-between mix-blend-difference hidden md:flex">
            {/* Top Corners (Meta Data) */}
            <div className="flex justify-between items-start">
                <div className="font-mono text-[0.6rem] text-[#88888D] uppercase tracking-[0.2em] opacity-50">
                    <span>SYS.OP.01</span>
                </div>
                <div className="font-mono text-[0.6rem] text-[#88888D] uppercase tracking-[0.2em] opacity-50">
                    <span>FREQ: 432HZ</span>
                </div>
            </div>

            {/* Bottom Corners */}
            <div className="flex justify-between items-end">
                <div className="pointer-events-auto font-mono text-[0.6rem] text-[#88888D] uppercase tracking-[0.2em] flex gap-6">
                    <span>VOL.04</span>
                    <span>[EXPERIMENTAL AUDIO]</span>
                </div>
                <div className="pointer-events-auto font-mono text-[0.6rem] text-[#88888D] uppercase tracking-[0.2em] flex gap-6 text-right">
                    <span>ENG // JP</span>
                    <span className="text-white font-bold animate-pulse">
                        ONLINE
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ViewportFrame;
