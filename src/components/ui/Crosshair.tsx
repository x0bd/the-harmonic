import React from 'react';

interface CrosshairProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
}

export const Crosshair: React.FC<CrosshairProps> = ({ position }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'tl': return 'top-4 left-4';
      case 'tr': return 'top-4 right-4';
      case 'bl': return 'bottom-4 left-4';
      case 'br': return 'bottom-4 right-4';
      default: return 'top-4 left-4';
    }
  };

  return (
    <div className={`absolute w-3 h-3 pointer-events-none z-10 ${getPositionClasses()}`}>
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#88888D] -translate-y-1/2" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#88888D] -translate-x-1/2" />
    </div>
  );
};
