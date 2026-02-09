
import React from 'react';
import { Award, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">ACCOMPLISHMENTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f3ff] to-[#6366f1] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <Trophy className="text-[#ec4899]" /> Major Awards
            </h3>
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="relative group p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#ec4899] transition-all duration-500">
                <div className="absolute top-4 right-8 text-[#ec4899]/30 text-4xl font-black">#0{idx + 1}</div>
                <div className="text-[#ec4899] font-mono text-xs uppercase tracking-widest mb-2">{ach.date}</div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#ec4899] transition-colors">{ach.title}</h4>
                <div className="text-sm font-bold text-white/40 mb-4">{ach.event}</div>
                <p className="text-white/60 leading-relaxed text-sm">{ach.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <ShieldCheck className="text-[#00f3ff]" /> Certifications
            </h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#00f3ff]/10 border border-[#00f3ff]/20 flex items-center justify-center shrink-0">
                    <Award className="text-[#00f3ff] group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm leading-tight mb-1">{cert.name}</h4>
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
                  <ExternalLink size={16} className="text-white/20 group-hover:text-white/60 transition-colors cursor-pointer" />
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
