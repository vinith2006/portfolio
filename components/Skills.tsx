
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative bg-gradient-to-b from-[#0ea5e9]/5 via-transparent to-[#0ea5e9]/5 perspective-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight title-enhanced title-ocean text-3d">⚡ CORE ARSENAL</h2>
          <p className="text-white/40 font-mono text-sm uppercase tracking-widest">Technological Proficiencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {SKILLS.map((skill, idx) => (
            <div 
              key={skill.name}
              className="group relative card-enhanced card-ocean lift-on-hover card-3d flip-on-hover shadow-3d stagger-" style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent opacity-0 group-hover:opacity-100 scan-line" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{skill.icon}</div>
                <div className="text-sm font-mono text-[#6366f1] font-bold">LVL {skill.level}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
              
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6366f1] to-[#00f3ff] transition-all duration-1000 ease-out delay-500 group-hover:shadow-[0_0_10px_#00f3ff]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10">ADVANCED</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10">ENTERPRISE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
