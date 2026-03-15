import React, { useState } from "react";
import { MagnifyingGlass, Headphones } from "@phosphor-icons/react";

export const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const navLinks = ["Essays", "Interviews", "Releases", "Artists", "Scenes"];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-10 flex items-start justify-between mix-blend-difference pointer-events-none text-white">
            {/* Brand / System ID - Left */}
            <div className="flex-1 flex flex-col gap-1.5 pointer-events-auto">
                <a
                    href="/"
                    className="font-sans text-lg md:text-xl font-bold tracking-widest uppercase hover:text-[#7b61ff] transition-colors"
                >
                    The Harmonic
                </a>
                <span className="font-mono text-[9px] text-[#88888D] tracking-[0.2em] uppercase">
                    Vol. IV — Issue 042
                </span>
            </div>

            {/* Primary Nav - Center */}
            <div className="hidden lg:flex flex-1 justify-center items-start pt-3 pointer-events-auto">
                <div className="flex gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`/${link.toLowerCase()}`}
                            className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-[#88888d] hover:text-white transition-colors pb-1 group"
                            onMouseEnter={() => setHoveredLink(link)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            {link}
                            <span
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                style={{
                                    transform:
                                        hoveredLink === link
                                            ? "scaleX(1)"
                                            : "scaleX(0)",
                                }}
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Utilities - Right */}
            <div className="flex-1 flex justify-end items-start pt-3 pointer-events-auto">
                <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#88888d]">
                    <button className="flex items-center gap-3 hover:text-white transition-colors group">
                        <span className="hidden md:inline">Search</span>
                        <MagnifyingGlass
                            size={16}
                            weight="bold"
                            className="text-white group-hover:text-[#7b61ff] transition-colors"
                        />
                    </button>

                    <div className="w-[1px] h-3 bg-white/20 hidden md:block"></div>

                    <button className="hidden md:flex items-center gap-3 hover:text-white transition-colors group">
                        <span>Listen</span>
                        <Headphones
                            size={16}
                            weight="bold"
                            className="text-[#7b61ff] group-hover:text-white transition-colors"
                        />
                    </button>

                    <button className="lg:hidden text-[#88888d] hover:text-white transition-colors">
                        [ MENU ]
                    </button>
                </div>
            </div>
        </nav>
    );
};
