
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
      {/* Main Cursor Dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#00f3ff] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isPointer ? 2 : 1})`, mixBlendMode: 'difference' }}
      />
      {/* Follower Ring */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#6366f1] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{ width: isPointer ? '60px' : '32px', height: isPointer ? '60px' : '32px' }}
      />
    </>
  );
};

export default CustomCursor;
