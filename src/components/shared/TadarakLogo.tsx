import React from 'react';

interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const TadarakLogo = ({ size = 'md', showText = true }: TadarakLogoProps) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-32',
    lg: 'h-20'
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img 
        src="/11.png" 
        alt="Tadarak Logo" 
        className={`${sizes[size]} w-auto object-contain`} 
      />
      {showText && (
        <span className="font-bold text-primary tracking-tight">Tadarak</span>
      )}
    </div>
  );
};

export default TadarakLogo;
