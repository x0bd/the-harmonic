import React, { useState } from 'react';

interface ArticleCardProps {
  className?: string;
  children: React.ReactNode;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ className = '', children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`bg-[#0A0A0C] p-4 flex flex-col relative transition-colors duration-500 cursor-crosshair border border-transparent hover:border-[#ffffff1a] hover:bg-[#111116] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hovered={hovered}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { isHovered: hovered }) : child
      )}
    </article>
  );
};

export const CardMeta: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex justify-between mb-4 font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] items-center">
    {children}
  </div>
);

export const CardTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="border border-[#88888D] px-2 py-1 text-white">
    {children}
  </span>
);

export const CardImage: React.FC<{ src: string; alt: string; isHovered?: boolean; square?: boolean }> = ({ src, alt, isHovered, square }) => (
  <div className={`w-full overflow-hidden mb-6 bg-[#030303] ${square ? 'aspect-square' : 'aspect-[4/3]'}`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover grayscale opacity-80 transition-all duration-700 ease-in-out ${isHovered ? 'scale-105 grayscale-0 opacity-100' : ''}`}
    />
  </div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string; isHovered?: boolean }> = ({ children, className = '', isHovered }) => (
  <h4 className={`font-serif text-3xl leading-[1.1] mb-4 transition-colors duration-300 ${isHovered ? 'text-[#8A2BE2]' : 'text-white'} ${className}`}>
    {children}
  </h4>
);

export const CardExcerpt: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-sm text-[#E4E4E6] mt-auto max-w-[90%] font-sans font-light ${className}`}>
    {children}
  </p>
);
