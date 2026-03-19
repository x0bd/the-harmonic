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
      className={`group relative flex flex-col transition-all duration-500 rounded-[2rem] overflow-hidden bg-card/80 backdrop-blur-md border border-white/[0.08] hover:border-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(255,96,0,0.15)] hover:-translate-y-1 ${className}`}
    >
      {/* Subtle inner glow / reflection */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"></div>

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
    className={`w-full overflow-hidden relative bg-[#0a0a0a] ${aspectRatio} p-2`}
  >
    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] origin-center"
      />

      {/* Hardware style corner markers */}
      <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-white/30 rounded-full z-20 group-hover:bg-accent transition-colors"></div>
      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-white/30 rounded-full z-20 group-hover:bg-accent transition-colors"></div>
    </div>
  </div>
);

export const CardMeta: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex justify-between items-center px-8 pt-6 pb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-foreground/50">
    {children}
  </div>
);

export const CardTag: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="flex items-center gap-2 text-accent">
    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#ff6000]"></span>
    {children}
  </span>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h4
    className={`font-serif text-3xl font-normal leading-[1.1] px-8 mb-4 text-white group-hover:text-accent transition-colors duration-300 ${className}`}
  >
    {children}
  </h4>
);

export const CardExcerpt: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p
    className={`text-[0.95rem] text-foreground/70 font-sans font-medium leading-relaxed px-8 pb-8 ${className}`}
  >
    {children}
  </p>
);

export const CardDataPoints: React.FC<{ data: DataPoint[] }> = ({ data }) => (
  <div className="flex flex-wrap gap-x-8 gap-y-4 px-8 py-5 bg-white/[0.02] border-t border-white/[0.05] mt-auto">
    {data.map((dp, i) => (
      <div key={i} className="flex flex-col gap-1.5">
        <span className="font-sans text-[0.6rem] text-foreground/40 uppercase tracking-[0.2em] font-bold">
          {dp.label}
        </span>
        <span className="font-mono text-sm text-foreground/90 font-medium">
          {dp.value}
        </span>
      </div>
    ))}
  </div>
);
