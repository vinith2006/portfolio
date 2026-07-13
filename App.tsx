import React, { useEffect, useState } from 'react';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar.tsx';
import BackgroundEffects from './components/BackgroundEffects.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import CurrentlyLearning from './components/CurrentlyLearning.tsx';
import Projects from './components/Projects.tsx';
import Publications from './components/Publications.tsx';
import Achievements from './components/Achievements.tsx';
import Certifications from './components/Certifications.tsx';
import Experience from './components/Experience.tsx';
import GithubOverview from './components/GithubOverview.tsx';
import Contact from './components/Contact.tsx';
import { SOCIAL_LINKS } from './constants.ts';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

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
    <div className="relative min-h-screen selection:bg-gradient-to-r selection:from-[#6366f1] selection:to-[#22d3ee] selection:text-white bg-[#050507]">
      <Loader />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />

      <main className={`smooth-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <CurrentlyLearning />
        <Projects />
        <Publications />
        <Achievements />
        <Certifications />
        <Experience />
        <GithubOverview />
        <Contact />
      </main>

      {/* Enhanced Footer */}
      <footer className="py-16 border-t border-white/10 text-center glass-effect neon-glow relative z-10 smooth-transition-lg bg-[#050507]/80">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Column: Author and Stack */}
          <div className="text-left space-y-2 flex-1">
            <div className="text-lg font-bold text-white font-mono uppercase tracking-wider">
              Designed &amp; Developed by <span className="text-[#00f3ff] hover:text-[#6366f1] transition-colors duration-300">Vinith M</span>
            </div>
            <div className="text-xs font-mono text-white/40">
              Built with <span className="text-white/60">React</span> + <span className="text-white/60">Tailwind CSS</span>
            </div>
          </div>

          {/* Center Column: Social Icons */}
          <div className="flex gap-4 items-center justify-center flex-1">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl glass-effect border border-white/10 hover:border-[#00f3ff]/40 smooth-transition flex items-center justify-center text-white/60 hover:text-[#00f3ff]"
            >
              <Github size={18} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl glass-effect border border-white/10 hover:border-[#00f3ff]/40 smooth-transition flex items-center justify-center text-white/60 hover:text-[#00f3ff]"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={SOCIAL_LINKS.email} 
              className="w-10 h-10 rounded-xl glass-effect border border-white/10 hover:border-[#00f3ff]/40 smooth-transition flex items-center justify-center text-white/60 hover:text-[#00f3ff]"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right Column: Copyright & Back to Top */}
          <div className="text-right space-y-2 flex flex-col items-end flex-1">
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest">
              © {new Date().getFullYear()} VINITH M. ALL RIGHTS RESERVED.
            </div>
            <button 
              onClick={scrollToTop}
              className="text-xs font-mono text-white/40 hover:text-[#00f3ff] smooth-transition uppercase flex items-center gap-1.5 group pt-1"
            >
              Back to Top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
