import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-[#0ea5e9]/3 to-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-ocean text-3d-deep flex items-center justify-center gap-3">
            💬 Recommendation Vault
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4">
            Endorsements and feedback from academic mentors and professional leads.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Main Card */}
          <div className="card-enhanced card-ocean relative overflow-hidden p-8 md:p-12 rounded-3xl border border-white/10 shadow-3d smooth-transition min-h-[300px] flex flex-col justify-between">
            {/* Background elements */}
            <div className="absolute top-8 right-12 text-white/5 font-black pointer-events-none select-none">
              <Quote size={120} />
            </div>

            <div>
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 flex items-center justify-center text-[#0ea5e9] mb-6">
                <Quote size={22} />
              </div>

              {/* Message */}
              <p className="text-white/80 italic text-base md:text-lg leading-relaxed mb-8 relative z-10">
                "{TESTIMONIALS[activeIndex].message}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                <img 
                  src={TESTIMONIALS[activeIndex].avatar} 
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-base md:text-lg">{TESTIMONIALS[activeIndex].name}</h4>
                <p className="text-xs font-mono text-[#0ea5e9] flex items-center gap-1.5 mt-0.5">
                  <GraduationCap size={14} /> {TESTIMONIALS[activeIndex].role}
                </p>
                <p className="text-[10px] font-mono text-white/40 uppercase mt-0.5">
                  {TESTIMONIALS[activeIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-xl glass-effect-2 border border-white/10 hover:border-[#0ea5e9]/40 hover:text-[#00f3ff] text-white/60 hover:scale-105 smooth-transition"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full smooth-transition ${idx === activeIndex ? 'bg-[#00f3ff] w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-xl glass-effect-2 border border-white/10 hover:border-[#0ea5e9]/40 hover:text-[#00f3ff] text-white/60 hover:scale-105 smooth-transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
