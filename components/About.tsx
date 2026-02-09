
import React from 'react';
import { BookOpen, Award, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">IDENTITY REVEAL</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, label: 'Degree', value: 'B.E. CSE' },
              { icon: Award, label: 'CGPA', value: '7.5' },
              { icon: ShieldCheck, label: 'HSC', value: '81 %' }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-[#6366f1] transition-all duration-500">
                <stat.icon className="w-8 h-8 text-[#00f3ff] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-white/40 font-mono mb-1">{stat.label}</div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="relative p-8 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6366f1]/20 rounded-full blur-[60px]" />
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#6366f1] flex items-center justify-center text-sm italic font-serif">i</span>
                Mission Objective
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed text-lg">
                <p>
                  Motivated Computer Science Engineering student with strong skills in Java, MySQL, and web development. 
                  Currently pursuing B.E. at M Kumarasamy College of Engineering (Batch of 2027).
                </p>
                <p>
                  I am seeking an entry-level software role where I can apply my technical knowledge in building real-time applications 
                  and grow professionally. I specialize in backend logic, database management, and AI-integrated systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
