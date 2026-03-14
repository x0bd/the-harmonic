import React, { useState } from "react";

interface DataPoint {
    label: string;
    value: string;
}

interface ArticleCardProps {
    className?: string;
    children: React.ReactNode;
    indexStr?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
    className = "",
    children,
    indexStr,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <article
            className={`flex flex-col relative transition-all duration-700 cursor-crosshair group ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-hovered={hovered}
        >
            {/* Massive Background Index Number */}
            {indexStr && (
                <div className="absolute -top-16 -left-8 md:-left-16 font-sans text-[8rem] md:text-[12rem] font-black text-white/[0.03] pointer-events-none z-0 leading-none select-none transition-all duration-700 group-hover:text-[#7b61ff]/10 group-hover:-translate-y-4 group-hover:translate-x-4">
                    {indexStr}
                </div>
            )}

            {/* Content wrapper to keep z-index above the background number */}
            <div className="relative z-10 flex flex-col h-full w-full">
                {React.Children.map(children, (child) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child as React.ReactElement<any>, {
                              isHovered: hovered,
                          })
                        : child,
                )}
            </div>
        </article>
    );
};

export const CardMeta: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div className="flex justify-between mb-4 mt-8 font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.2em] items-center border-b border-white/10 pb-4">
        {children}
    </div>
);

export const CardTag: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => <span className="text-white">{children}</span>;

export const CardImage: React.FC<{
    src: string;
    alt: string;
    isHovered?: boolean;
    aspectRatio?: string;
}> = ({ src, alt, isHovered, aspectRatio = "aspect-[4/5]" }) => (
    <div
        className={`w-full overflow-hidden relative bg-[#030303] border border-white/10 transition-colors duration-500 ${isHovered ? "border-[#7b61ff]/50" : ""} ${aspectRatio}`}
    >
        {/* Embedded Crosshairs */}
        <div
            className={`absolute top-4 left-4 text-[#7b61ff] text-xs font-mono z-20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
            +
        </div>
        <div
            className={`absolute bottom-4 right-4 text-[#7b61ff] text-xs font-mono z-20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
            +
        </div>

        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isHovered ? "scale-105 grayscale-0 contrast-125 brightness-110" : "scale-100 grayscale contrast-150 brightness-75"}`}
        />
    </div>
);

export const CardTitle: React.FC<{
    children: React.ReactNode;
    className?: string;
    isHovered?: boolean;
}> = ({ children, className = "", isHovered }) => (
    <h4
        className={`font-sans font-black leading-[0.9] mb-4 transition-all duration-300 ${isHovered ? "text-white translate-x-2" : "text-[#E4E4E6]"} ${className}`}
    >
        {children}
    </h4>
);

export const CardExcerpt: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => (
    <p
        className={`text-sm text-[#88888D] font-sans font-light leading-relaxed transition-colors duration-300 ${className}`}
    >
        {children}
    </p>
);

export const CardDataPoints: React.FC<{ data: DataPoint[] }> = ({ data }) => (
    <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-4 border-t border-dashed border-white/20">
        {data.map((dp, i) => (
            <div key={i} className="flex flex-col">
                <span className="font-mono text-[0.55rem] text-[#7b61ff] uppercase tracking-[0.2em]">
                    {dp.label}
                </span>
                <span className="font-mono text-[0.7rem] text-white uppercase tracking-[0.1em] mt-1 font-bold">
                    {dp.value}
                </span>
            </div>
        ))}
    </div>
);
