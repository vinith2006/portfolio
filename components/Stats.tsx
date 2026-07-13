import React, { useEffect, useState } from 'react';
import { Briefcase, Code, Trophy, BookOpen, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  targetValue: number;
  suffix: string;
  label: string;
  colorClass: string;
  glowClass: string;
}

const StatCard: React.FC<StatItemProps> = ({ icon: Icon, targetValue, suffix, label, colorClass, glowClass }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = targetValue / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <div className={`card-enhanced group lift-on-hover relative overflow-hidden text-center p-8 rounded-3xl ${colorClass} shadow-3d`}>
      {/* Decorative Glow */}
      <div className={`absolute -right-10 -bottom-10 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 smooth-transition ${glowClass}`} />
      
      <div className="flex justify-center mb-4">
        <div className={`w-14 h-14 rounded-2xl glass-effect-2 flex items-center justify-center border border-white/10 group-hover:scale-110 smooth-transition`}>
          <Icon className="text-white group-hover:text-[#00f3ff] smooth-transition" size={26} />
        </div>
      </div>
      
      <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-white font-mono text-3d-deep">
        {count}
        <span className="text-[#00f3ff]">{suffix}</span>
      </div>
      
      <div className="text-xs uppercase font-mono tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const statItems = [
    {
      icon: Briefcase,
      targetValue: 2,
      suffix: '+',
      label: 'Internships Worked',
      colorClass: 'card-neon',
      glowClass: 'bg-[#6366f1]',
    },
    {
      icon: Code,
      targetValue: 4,
      suffix: '+',
      label: 'Major Projects',
      colorClass: 'card-ocean',
      glowClass: 'bg-[#00f3ff]',
    },
    {
      icon: Trophy,
      targetValue: 4,
      suffix: '',
      label: 'Hackathon Awards',
      colorClass: 'card-fire',
      glowClass: 'bg-[#ef4444]',
    },
    {
      icon: BookOpen,
      targetValue: 1,
      suffix: '',
      label: 'International Paper',
      colorClass: 'card-aurora',
      glowClass: 'bg-[#9d4edd]',
    },
    {
      icon: Award,
      targetValue: 3,
      suffix: '',
      label: 'Certifications',
      colorClass: 'card-luxury',
      glowClass: 'bg-[#a855f7]',
    },
  ];

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {statItems.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
