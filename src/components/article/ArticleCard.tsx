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
      className={`flex flex-col relative transition-all duration-300 group bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-accent/30 shadow-lg hover:shadow-[0_8px_30px_rgba(255,96,0,0.1)] ${className}`}
    >
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
  <div className={`w-full overflow-hidden relative bg-muted ${aspectRatio}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
  </div>
);

export const CardMeta: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex justify-between items-center px-6 pt-6 pb-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground/60">
    {children}
  </div>
);

export const CardTag: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="text-accent bg-accent/10 px-3 py-1 rounded-full">
    {children}
  </span>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h4
    className={`font-serif text-3xl font-normal leading-tight px-6 mb-3 text-white group-hover:text-accent transition-colors ${className}`}
  >
    {children}
  </h4>
);

export const CardExcerpt: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p
    className={`text-base text-foreground/70 font-sans font-light leading-relaxed px-6 pb-6 ${className}`}
  >
    {children}
  </p>
);

export const CardDataPoints: React.FC<{ data: DataPoint[] }> = ({ data }) => (
  <div className="flex flex-wrap gap-x-6 gap-y-4 px-6 py-5 bg-black/20 border-t border-white/5 mt-auto">
    {data.map((dp, i) => (
      <div key={i} className="flex flex-col gap-1">
        <span className="font-sans text-[0.65rem] text-foreground/50 uppercase tracking-widest font-semibold">
          {dp.label}
        </span>
        <span className="font-mono text-sm text-foreground">{dp.value}</span>
      </div>
    ))}
  </div>
);
