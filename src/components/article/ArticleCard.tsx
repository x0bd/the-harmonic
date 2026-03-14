import React, { useState } from "react";

interface DataPoint {
    label: string;
    value: string;
}

interface ArticleCardProps {
    className?: string;
    children: React.ReactNode;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
    className = "",
    children,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <article
            className={`flex flex-col relative transition-colors duration-500 cursor-crosshair group ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-hovered={hovered}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<any>, {
                          isHovered: hovered,
                      })
                    : child,
            )}
        </article>
    );
};

export const CardMeta: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div className="flex justify-between mb-4 mt-6 font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] items-center">
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
        className={`w-full overflow-hidden relative bg-[#030303] ${aspectRatio}`}
    >
        {/* Embedded Crosshairs */}
        <div
            className={`absolute top-3 left-3 text-[#88888D] text-xs font-mono z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
            +
        </div>
        <div
            className={`absolute bottom-3 right-3 text-[#88888D] text-xs font-mono z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
            +
        </div>

        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover grayscale opacity-80 transition-all duration-700 ease-in-out ${isHovered ? "scale-105 grayscale-0 opacity-100" : ""}`}
        />
    </div>
);

export const CardTitle: React.FC<{
    children: React.ReactNode;
    className?: string;
    isHovered?: boolean;
}> = ({ children, className = "", isHovered }) => (
    <h4
        className={`font-sans font-medium text-2xl leading-[1.2] mb-3 transition-colors duration-300 ${isHovered ? "text-[#7b61ff]" : "text-white"} ${className}`}
    >
        {children}
    </h4>
);

export const CardExcerpt: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => (
    <p
        className={`text-sm text-[#88888D] max-w-[90%] font-sans font-light leading-relaxed ${className}`}
    >
        {children}
    </p>
);

export const CardDataPoints: React.FC<{ data: DataPoint[] }> = ({ data }) => (
    <div className="flex gap-6 mt-6 pt-4 border-t border-[#ffffff1a]">
        {data.map((dp, i) => (
            <div key={i} className="flex flex-col">
                <span className="font-mono text-[0.55rem] text-[#88888D] uppercase tracking-[0.1em]">
                    {dp.label}
                </span>
                <span className="font-mono text-[0.65rem] text-white uppercase tracking-[0.05em] mt-1">
                    {dp.value}
                </span>
            </div>
        ))}
    </div>
);
