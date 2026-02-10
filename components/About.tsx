
import React from 'react';
import { BookOpen, Award, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-[#9d4edd]/5 via-transparent to-[#9d4edd]/5 perspective-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-aurora text-3d-deep">👤 IDENTITY REVEAL</h2>
          <div className="underline-gradient mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, label: 'Degree', value: 'B.E. CSE' },
              { icon: Award, label: 'CGPA', value: '7.5' },
              { icon: ShieldCheck, label: 'HSC', value: '81 %' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card-enhanced card-aurora group lift-on-hover tilt-3d shadow-3d"
                style={{ animation: `fadeInUp 0.6s ease forwards` }}
              >
                <stat.icon className="w-8 h-8 text-[#00f3ff] mb-4 group-hover:scale-125 group-hover:text-[#22d3ee] smooth-transition rotate-3d" />
                <div className="text-sm text-white/40 font-mono mb-1">{stat.label}</div>
                <div className="text-xl font-bold text-white text-3d">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="relative card-enhanced group overflow-hidden flip-on-hover shadow-3d perspective-container">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6366f1]/20 rounded-full blur-[60px] group-hover:bg-[#6366f1]/30 smooth-transition float-3d" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6366f1]/20 rounded-full blur-[60px] group-hover:bg-[#6366f1]/30 smooth-transition" />
              
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
