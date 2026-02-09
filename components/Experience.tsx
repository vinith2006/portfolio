
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4 tracking-tight">TIMELINE DATA</h2>
          <div className="w-16 h-1 bg-[#00f3ff] mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12">
              {/* Dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#050507] border-2 border-[#6366f1] rounded-full shadow-[0_0_15px_#6366f1]" />
              
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[#6366f1] transition-colors">{exp.role}</h3>
                    <div className="text-[#00f3ff] font-mono text-sm mt-1">{exp.company}</div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-mono border border-white/10 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0" />
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
