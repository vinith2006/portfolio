import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Award, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-gradient-to-b from-[#0ea5e9]/5 via-transparent to-[#0ea5e9]/5 perspective-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-neon text-3d-deep flex items-center justify-center gap-3">
            💼 Professional Experience
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4">
            Industrial training and engineering internships.
          </p>
        </div>

        <div className="relative ml-4 md:ml-0 space-y-12">
          {/* Glow Line instead of border */}
          <div className="absolute left-[10px] md:left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6366f1] via-[#22d3ee] to-transparent opacity-40 md:left-[-1px]" />
          
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 fade-in-on-scroll stagger-" style={{ animationDelay: `${idx * 100}ms` }}>
              {/* Enhanced Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-[#050507] border-2 border-[#6366f1] rounded-full shadow-[0_0_15px_#6366f1] group-hover:shadow-[0_0_25px_#22d3ee] smooth-transition" />
              
              <div className="card-enhanced card-neon group lift-on-hover shadow-3d perspective-container transform-gpu p-8">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1] shrink-0 group-hover:rotate-6 smooth-transition">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#22d3ee] smooth-transition">{exp.role}</h3>
                      <div className="text-[#00f3ff] font-mono text-sm mt-0.5">{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect-2 text-xs font-mono border border-[#6366f1]/30 whitespace-nowrap self-start md:self-center text-white/80">
                    <Calendar size={12} className="text-[#6366f1]" /> {exp.period}
                  </div>
                </div>

                {/* Primary Description bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 group-hover:text-white/70 smooth-transition text-sm md:text-base">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0 group-hover:bg-[#22d3ee] smooth-transition" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-white/5">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#00f3ff] mb-3 flex items-center gap-1.5">
                      <Award size={14} /> Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                          <span className="text-[#10b981] font-bold">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 mb-3 flex items-center gap-1.5">
                      <Cpu size={14} /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 font-mono text-xs rounded-lg hover:border-[#6366f1] hover:text-[#6366f1] transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
