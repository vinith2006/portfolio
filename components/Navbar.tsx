
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`relative overflow-hidden backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/40' : 'bg-transparent'}`}>
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Cpu className="w-8 h-8 text-[#00f3ff] transition-transform group-hover:rotate-180 duration-700" />
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent uppercase">VINITH M</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-white/70 hover:text-[#00f3ff] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6366f1] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a 
              href={SOCIAL_LINKS.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#6366f1] hover:bg-[#8b5cf6] text-white px-5 py-2 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95 text-center"
            >
              Resume
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
          
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#00f3ff55] scan-line" />
        </div>

        <div className={`md:hidden mt-4 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-black/90 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button 
                key={item} 
                className="text-lg text-left text-white/80 hover:text-[#00f3ff]"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
            <a 
              href={SOCIAL_LINKS.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#6366f1] text-white py-3 rounded-xl font-bold text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
