
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0f]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">CORE ARSENAL</h2>
          <p className="text-white/40 font-mono text-sm uppercase tracking-widest">Technological Proficiencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <div 
              key={skill.name}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#6366f1] transition-all duration-700 hover:-translate-y-2 overflow-hidden"
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
