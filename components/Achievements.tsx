import React from 'react';
import { Trophy, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#ef4444]/5 via-transparent to-[#ef4444]/5 perspective-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-fire text-3d-deep flex items-center justify-center gap-3">
            🏆 Hackathons & Achievements
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4">
            Competitive development sprints, engineering showcases, and awards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => {
            const isFirst = ach.title.includes('🥇') || ach.title.toLowerCase().includes('first');
            const isSecond = ach.title.includes('🥈') || ach.title.toLowerCase().includes('second');
            const isThird = ach.title.includes('🥉') || ach.title.toLowerCase().includes('third');
            
            // Neon schemes based on medal placement
            let colorScheme = 'card-fire'; // default
            let medalColor = 'text-[#f59e0b]'; // gold
            let borderGlow = 'hover:border-[#f59e0b]/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]';
            
            if (isFirst) {
              colorScheme = 'card-fire bg-gradient-to-tr from-[#f59e0b]/10 to-transparent';
              medalColor = 'text-[#f59e0b]';
              borderGlow = 'hover:border-[#f59e0b]/55 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]';
            } else if (isSecond) {
              colorScheme = 'card-ocean bg-gradient-to-tr from-[#94a3b8]/10 to-transparent';
              medalColor = 'text-[#cbd5e1]'; // silver
              borderGlow = 'hover:border-[#cbd5e1]/55 hover:shadow-[0_0_25px_rgba(203,213,225,0.25)]';
            } else if (isThird) {
              colorScheme = 'card-aurora bg-gradient-to-tr from-[#b45309]/10 to-transparent';
              medalColor = 'text-[#b45309]'; // bronze
              borderGlow = 'hover:border-[#b45309]/55 hover:shadow-[0_0_25px_rgba(180,83,9,0.25)]';
            }

            return (
              <div 
                key={idx} 
                className={`card-enhanced group lift-on-hover relative overflow-hidden p-8 rounded-3xl border border-white/10 flex flex-col justify-between smooth-transition ${colorScheme} ${borderGlow} stagger-`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Large watermark background text */}
                <div className="absolute top-4 right-6 text-white/[0.02] text-8xl font-black select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                  #0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40">
                      <Calendar size={12} className="text-white/30" /> {ach.date}
                    </div>
                    <div className={`text-2xl font-black ${medalColor} group-hover:scale-125 smooth-transition select-none`}>
                      {isFirst && '🥇'}
                      {isSecond && '🥈'}
                      {isThird && '🥉'}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00f3ff] smooth-transition mb-2 flex items-center gap-2">
                    {ach.title}
                  </h3>
                  <div className="text-sm font-bold text-[#00f3ff] font-mono mb-4 flex items-center gap-1.5">
                    <Sparkles size={14} /> {ach.event}
                  </div>
                  
                  <p className="text-white/60 group-hover:text-white/70 leading-relaxed text-sm smooth-transition">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                  <span>Competition verified</span>
                  <a 
                    href="https://github.com/vinith2006" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-white/40 group-hover:text-[#00f3ff] group-hover:bg-[#00f3ff]/10 smooth-transition cursor-pointer"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
