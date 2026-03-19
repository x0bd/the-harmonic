import React from "react";

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
  return (
    <article
      className={`group relative flex flex-col transition-all duration-700 rounded-[2.5rem] overflow-hidden bg-[#0c0c0e] border border-white/[0.04] hover:border-accent/40 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_60px_rgba(255,96,0,0.15)] hover:-translate-y-2 ${className}`}
    >
      {/* High-end hardware inner bezel */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-[inherit] shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),inset_0_-1px_1px_rgba(0,0,0,0.5)]"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </article>
  );
};

export const CardImage: React.FC<{
  src: string;
  alt: string;
  aspectRatio?: string;
}> = ({ src, alt, aspectRatio = "aspect-[4/3]" }) => (
  <div
    className={`w-full overflow-hidden relative bg-[#030303] ${aspectRatio} p-2.5 md:p-3`}
  >
    <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative border border-white/[0.05] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>

      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05] group-hover:rotate-1 origin-center filter brightness-90 group-hover:brightness-110"
      />

      {/* Technical Corner Crosshairs (Harder style) */}
      <div className="absolute top-4 left-4 w-3 h-3 z-20 opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all duration-500 flex items-center justify-center">
        <div className="absolute w-full h-[1px] bg-current"></div>
        <div className="absolute h-full w-[1px] bg-current"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-3 h-3 z-20 opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all duration-500 flex items-center justify-center">
        <div className="absolute w-full h-[1px] bg-current"></div>
        <div className="absolute h-full w-[1px] bg-current"></div>
      </div>

      {/* Signal Active Indicator */}
      <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#ff6000]"></div>
        <span className="font-mono text-[8px] text-white uppercase tracking-widest font-bold">
          Signal
        </span>
      </div>
    </div>
  </div>
);

export const CardMeta: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex justify-between items-center px-8 md:px-10 pt-8 pb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
    {children}
  </div>
);

export const CardTag: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="flex items-center gap-2.5 text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-md">
    <span className="w-1.5 h-1.5 bg-accent rounded-sm shadow-[0_0_8px_#ff6000]"></span>
    {children}
  </span>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h4
    className={`font-serif text-3xl font-normal leading-[1.05] tracking-tight px-8 md:px-10 mb-4 text-white group-hover:text-accent transition-colors duration-500 ${className}`}
  >
    {children}
  </h4>
);

export const CardExcerpt: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p
    className={`text-[1rem] text-foreground/60 font-sans font-medium leading-[1.7] px-8 md:px-10 pb-10 ${className}`}
  >
    {children}
  </p>
);

export const CardDataPoints: React.FC<{ data: DataPoint[] }> = ({ data }) => (
  <div className="flex flex-wrap gap-x-10 gap-y-6 px-8 md:px-10 py-6 bg-[#08080a] border-t border-white/[0.03] mt-auto shadow-[inset_0_10px_20px_rgba(0,0,0,0.4)]">
    {data.map((dp, i) => (
      <div key={i} className="flex flex-col gap-2">
        <span className="font-mono text-[9px] text-foreground/30 uppercase tracking-[0.25em] font-bold">
          {dp.label}
        </span>
        <span className="font-sans text-sm text-foreground/90 font-semibold tracking-wide">
          {dp.value}
        </span>
      </div>
    ))}
  </div>
);
