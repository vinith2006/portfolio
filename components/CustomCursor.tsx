
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (followerRef.current) {
      followerRef.current.animate({
        left: `${position.x}px`,
        top: `${position.y}px`
      }, { duration: 500, fill: "forwards" });
    }
  }, [position]);

  return (
    <>
      {/* Main Cursor Dot with Glow */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#00f3ff] rounded-full pointer-events-none z-[9999] smooth-transition shadow-[0_0_15px_#00f3ff]"
        style={{ transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isPointer ? 1.5 : 1})`, mixBlendMode: 'difference' }}
      />
      
      {/* Outer Glow Ring */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 smooth-transition rounded-full border border-[#00f3ff]/40"
        style={{ 
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '80px' : '40px', 
          height: isPointer ? '80px' : '40px',
          boxShadow: isPointer ? '0 0 30px rgba(0, 243, 255, 0.5)' : '0 0 15px rgba(99, 102, 241, 0.3)'
        }}
      />
      
      {/* Secondary Ring */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 smooth-transition rounded-full border border-[#6366f1]/20"
        style={{ 
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '120px' : '60px', 
          height: isPointer ? '120px' : '60px',
        }}
      />
    </>
  );
};

export default CustomCursor;
