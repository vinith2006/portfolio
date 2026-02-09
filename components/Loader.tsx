
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
    <div className="fixed inset-0 z-[10000] bg-[#050507] flex flex-col items-center justify-center transition-opacity duration-1000" style={{ opacity: progress === 100 ? 0 : 1 }}>
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 border-4 border-t-transparent border-r-[#6366f1] border-b-transparent border-l-transparent rounded-full animate-spin" />
        <div className="absolute inset-4 border-4 border-t-[#ec4899] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-2xl font-bold text-[#00f3ff]">{progress}%</span>
        </div>
      </div>
      <div className="mt-8 text-indigo-400 font-mono tracking-widest animate-pulse">
        INITIALIZING SYSTEM...
      </div>
    </div>
  );
};

export default Loader;
