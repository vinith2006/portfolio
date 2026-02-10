
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-gradient-to-b from-[#0ea5e9]/5 via-transparent to-[#0ea5e9]/5 perspective-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-4xl font-black mb-4 tracking-tight title-enhanced title-neon text-3d-deep">📅 TIMELINE DATA</h2>
          <div className="underline-gradient mx-auto" />
        </div>

        <div className="relative ml-4 md:ml-0 space-y-12">
          {/* Glow Line instead of border */}
          <div className="absolute left-[10px] md:left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6366f1] via-[#22d3ee] to-transparent opacity-40 md:left-[-1px]" />
          
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 fade-in-on-scroll stagger-" style={{ animationDelay: `${idx * 100}ms` }}>
              {/* Enhanced Dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#050507] border-2 border-[#6366f1] rounded-full shadow-[0_0_15px_#6366f1] group-hover:shadow-[0_0_25px_#22d3ee] smooth-transition" />
              
              <div className="card-enhanced card-neon group lift-on-hover flip-on-hover shadow-3d perspective-container transform-gpu">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[#22d3ee] smooth-transition">{exp.role}</h3>
                    <div className="text-[#00f3ff] font-mono text-sm mt-1">{exp.company}</div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full glass-effect-2 text-xs font-mono border border-[#6366f1]/30 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 group-hover:text-white/70 smooth-transition">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0 group-hover:bg-[#22d3ee] smooth-transition" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
