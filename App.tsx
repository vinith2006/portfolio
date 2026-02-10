
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar.tsx';
import BackgroundEffects from './components/BackgroundEffects.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Achievements from './components/Achievements.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import { SOCIAL_LINKS } from './constants.ts';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-gradient-to-r selection:from-[#6366f1] selection:to-[#22d3ee] selection:text-white">
      <Loader />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />

      <main className={`smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/10 text-center glass-effect neon-glow relative z-10 smooth-transition-lg">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-mono text-white/30 hover:text-white/60 smooth-transition uppercase tracking-widest">
            © {new Date().getFullYear()} VINITH M // CSE STUDENT // TAMIL NADU
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={scrollToTop}
              className="text-sm font-mono text-white/40 hover:text-[#00f3ff] smooth-transition uppercase accent-line"
            >
              Back to Top
            </button>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-mono text-white/40 hover:text-[#00f3ff] smooth-transition uppercase accent-line"
            >
              Resources
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert('Terminal Access Restricted. Developer Mode only.'); }}
              className="text-sm font-mono text-white/40 hover:text-[#22d3ee] smooth-transition uppercase accent-line"
            >
              Terminal
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
