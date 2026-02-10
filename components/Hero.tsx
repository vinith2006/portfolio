
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const phrases = ['Full Stack Developer', 'React Developer', 'Problem Solver', 'CSE Student'];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = phrases[index];
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(current.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect-2 text-[#00f3ff] font-mono text-sm animate-pulse">
            ✨ System Online: Identity Verified
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter title-enhanced title-neon">
            I'M <br />
            <span className="gradient-text uppercase">
              VINITH M
            </span>
          </h1>

          <div className="text-xl md:text-2xl font-mono mb-8 text-white/80 h-10 flex items-center">
            &gt; {text}<span className="w-3 h-8 bg-[#00f3ff] ml-1 animate-pulse"></span>
          </div>

          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Crafting futuristic digital experiences through elegant code and modern architecture. 
            Currently exploring the intersection of scalable systems and user-centric design.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 btn-neon rounded-2xl font-bold flex items-center gap-2 group smooth-transition card-3d shadow-3d text-3d"
            >
              Explore Projects
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform translate-3d-effect" />
            </button>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-effect group hover:glow-border smooth-transition flex items-center justify-center text-white/70 group-hover:text-[#00f3ff]">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass-effect group hover:glow-border smooth-transition flex items-center justify-center text-white/70 group-hover:text-[#00f3ff]">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.email} className="w-12 h-12 rounded-xl glass-effect group hover:glow-border smooth-transition flex items-center justify-center text-white/70 group-hover:text-[#00f3ff]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block perspective-container">
          <div className="w-[500px] h-[500px] relative">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-[#6366f1]/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* Animated Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-dashed border-[#00f3ff]/20 animate-[spin_35s_linear_infinite] spin-3d-fast" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dotted border-[#22d3ee]/30 animate-[spin_25s_linear_infinite_reverse] wobble-3d" />
            
            {/* Main Profile Image Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-[#6366f1] via-[#00f3ff] to-[#22d3ee] animate-spin-slow opacity-20 blur-2xl group-hover:opacity-50 transition-opacity" />
              
              {/* Image Border/Frame */}
              <div className="relative w-full h-full rounded-full border-[6px] border-white/10 overflow-hidden backdrop-blur-sm shadow-3d bg-[#0a0a0f]">
                <img 
                  src="https://image2url.com/r2/default/images/1770452230123-4a14027b-7006-4ae9-be5a-580154d71073.jpeg" 
                  alt="Vinith M Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Vignette to blend the photo edges */}
                <div className="absolute inset-0 shadow-[inner_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
              </div>
              
              {/* Inner Orbiting Marker */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-[#00f3ff] shadow-[0_0_20px_#00f3ff] animate-pulse" />
            </div>
            
            {/* Floating Elements with 3D Effects */}
            <div className="absolute top-12 left-20 animate-bounce float-3d text-5xl drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-default select-none"></div>
            <div className="absolute bottom-12 right-16 animate-pulse pulse-3d text-5xl drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] cursor-default select-none"></div>
            <div className="absolute top-1/2 right-4 animate-bounce delay-300 rotate-3d text-5xl drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-default select-none"></div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce group"
      >
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest group-hover:text-[#00f3ff] transition-colors">Scroll</span>
        <div className="w-1 h-8 bg-gradient-to-b from-[#6366f1] to-transparent rounded-full group-hover:from-[#00f3ff]" />
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
