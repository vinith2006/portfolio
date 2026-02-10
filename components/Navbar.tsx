
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Experience', 'Contact'];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition-lg perspective-container ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`relative overflow-hidden glass-effect rounded-2xl px-6 py-3 flex items-center justify-between smooth-transition-lg card-3d shadow-3d neon-glow ${isScrolled ? 'bg-[#050507]/60 glow-border' : 'bg-transparent'}`}>
          <div 
            className="flex items-center gap-2 group cursor-pointer smooth-transition" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Cpu className="w-8 h-8 text-[#00f3ff] group-hover:text-[#22d3ee] group-hover:rotate-180 smooth-transition-lg" />
            <span className="text-xl font-black tracking-tighter gradient-text uppercase">VINITH M</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-white/70 hover:text-[#00f3ff] smooth-transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6366f1] to-[#22d3ee] smooth-transition group-hover:w-full" />
              </button>
            ))}
          </div>

          <button className="md:hidden text-white p-2 smooth-transition hover:text-[#00f3ff]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
          
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff]/60 to-transparent scan-line" />
        </div>

        <div className={`md:hidden mt-4 overflow-hidden smooth-transition ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="glass-effect rounded-2xl p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button 
                key={item} 
                className="text-lg text-left text-white/80 hover:text-[#00f3ff] smooth-transition accent-line"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
