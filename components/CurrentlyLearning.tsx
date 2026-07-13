import React from 'react';
import { LEARNING_TOPICS } from '../constants';
import { BookOpen } from 'lucide-react';

const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-20 px-6 relative bg-gradient-to-b from-[#8b5cf6]/5 via-transparent to-[#8b5cf6]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-luxury text-3d-deep flex items-center justify-center gap-3">
            🧠 Currently Learning
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4 max-w-lg mx-auto">
            Expanding my knowledge vault with modern tech stacks, frameworks, and architecture patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_TOPICS.map((topic, index) => (
            <div
              key={index}
              className="card-enhanced card-luxury group lift-on-hover relative overflow-hidden p-6 rounded-2xl flex flex-col justify-between"
            >
              {/* Subtle background icon watermark */}
              <div className="absolute right-4 top-4 text-white/5 group-hover:text-white/10 text-6xl font-black select-none pointer-events-none transition-colors duration-500">
                {topic.icon}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl glass-effect-2 flex items-center justify-center text-xl shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#a855f7] smooth-transition">
                      {topic.name}
                    </h3>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mt-0.5">
                      {topic.level}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-xs font-mono text-white/50 mb-1.5">
                    <span>Skill Acquisition</span>
                    <span className="text-[#a855f7] font-bold">{topic.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left"
                      style={{ width: `${topic.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-white/60 smooth-transition">
                <BookOpen size={12} className="text-[#a855f7]" /> Active Study
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
