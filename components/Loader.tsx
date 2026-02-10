
import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShow(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5);
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-[#050507] flex flex-col items-center justify-center smooth-transition perspective-container" style={{ opacity: progress === 100 ? 0 : 1 }}>
      {/* Background Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-[100px] animate-pulse float-3d" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22d3ee]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 w-48 h-48 rotate-3d">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-[#6366f1] border-r-[#00f3ff] rounded-full animate-spin shadow-[0_0_30px_rgba(99,102,241,0.5)] spin-3d-fast" />
        
        {/* Middle Ring */}
        <div className="absolute inset-4 border-4 border-transparent border-t-[#22d3ee] border-r-[#8b5cf6] rounded-full animate-[spin_1.5s_linear_infinite_reverse] shadow-[0_0_20px_rgba(34,211,238,0.4)] wobble-3d" />
        
        {/* Inner Ring */}
        <div className="absolute inset-8 border-2 border-transparent border-b-[#00f3ff] rounded-full animate-spin" style={{ animationDuration: '2s' }} />
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-bold gradient-text neon-3d">{progress}%</span>
          <span className="text-xs font-mono text-white/40 mt-2 tracking-widest text-3d">LOADING</span>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="text-[#00f3ff] font-mono tracking-widest animate-pulse text-sm">
          INITIALIZING SYSTEM...
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6 w-64 h-1 rounded-full glass-effect overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#6366f1] via-[#22d3ee] to-[#00f3ff] rounded-full transition-all duration-300 smooth-transition"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
