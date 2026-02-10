
import React from 'react';
import { Award, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#ef4444]/5 via-transparent to-[#ef4444]/5 perspective-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-fire text-3d-deep">🏆 ACCOMPLISHMENTS</h2>
          <div className="underline-gradient mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 accent-line">
              <Trophy className="text-[#f59e0b] group-hover:scale-110 smooth-transition" /> Major Awards
            </h3>
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="relative group card-enhanced card-fire lift-on-hover flip-on-hover shadow-3d overflow-hidden stagger-" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute top-4 right-8 text-[#f59e0b]/20 text-4xl font-black group-hover:text-[#f59e0b]/40 smooth-transition">#0{idx + 1}</div>
                <div className="text-[#f59e0b] font-mono text-xs uppercase tracking-widest mb-2">{ach.date}</div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#f59e0b] smooth-transition">{ach.title}</h4>
                <div className="text-sm font-bold text-white/40 mb-4">{ach.event}</div>
                <p className="text-white/60 group-hover:text-white/70 leading-relaxed text-sm smooth-transition">{ach.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 accent-line">
              <ShieldCheck className="text-[#00f3ff] group-hover:scale-110 smooth-transition" /> Certifications
            </h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 glass-effect group hover:glow-border smooth-transition p-5 rounded-2xl lift-on-hover stagger-" style={{ animationDelay: `${idx * 50}ms` }}>
                  <div className="w-12 h-12 rounded-xl glass-effect-2 group-hover:bg-[#00f3ff]/20 smooth-transition flex items-center justify-center shrink-0">
                    <Award className="text-[#00f3ff] group-hover:scale-125 group-hover:text-[#f59e0b] smooth-transition" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm leading-tight mb-1 group-hover:text-[#00f3ff] smooth-transition">{cert.name}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-tighter text-white/40">
                      <span>{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{cert.date}</span>
                      {cert.score && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-[#00f3ff]">Score: {cert.score}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/20 group-hover:text-[#00f3ff] smooth-transition cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
