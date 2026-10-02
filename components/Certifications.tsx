import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, Shield, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-gradient-to-b from-[#22d3ee]/5 via-transparent to-[#22d3ee]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-neon text-3d-deep flex items-center justify-center gap-3">
            🛡️ Certifications
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4">
            11 credentials across AI, cloud, data, and software engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="px-3 py-1.5 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 text-[#c4b5fd] text-[10px] font-mono uppercase tracking-widest">Oracle · 3</span>
            <span className="px-3 py-1.5 rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 text-[#93c5fd] text-[10px] font-mono uppercase tracking-widest">IBM SkillsBuild · 4</span>
            <span className="px-3 py-1.5 rounded-full border border-[#ec4899]/40 bg-[#ec4899]/10 text-[#f9a8d4] text-[10px] font-mono uppercase tracking-widest">NPTEL Elite · 2</span>
            <span className="px-3 py-1.5 rounded-full border border-[#22d3ee]/40 bg-[#22d3ee]/10 text-[#67e8f9] text-[10px] font-mono uppercase tracking-widest">Microsoft · 1</span>
            <span className="px-3 py-1.5 rounded-full border border-[#f97316]/40 bg-[#f97316]/10 text-[#fdba74] text-[10px] font-mono uppercase tracking-widest">Board Infinity · 1</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const isOracle = cert.issuer.toLowerCase().includes('oracle');
            const isNptel = cert.issuer.toLowerCase().includes('nptel');
            const isIbm = cert.issuer.toLowerCase().includes('ibm');
            const isMicrosoft = cert.issuer.toLowerCase().includes('microsoft');
            const isBoardInfinity = cert.issuer.toLowerCase().includes('board');
            
            // Choose colors based on the issuer for customized experience
            let borderGlowClass = 'hover:border-[#22d3ee]/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] bg-gradient-to-tr from-[#22d3ee]/5 to-transparent';
            let badgeIconColor = 'text-[#22d3ee]';

            if (isOracle) {
              borderGlowClass = 'hover:border-[#ea580c]/40 hover:shadow-[0_0_25px_rgba(234,88,12,0.15)] bg-gradient-to-tr from-[#ea580c]/10 to-transparent';
              badgeIconColor = 'text-[#f97316]';
            } else if (isIbm) {
              borderGlowClass = 'hover:border-[#0f62fe]/40 hover:shadow-[0_0_25px_rgba(15,98,254,0.15)] bg-gradient-to-tr from-[#0f62fe]/10 to-transparent';
              badgeIconColor = 'text-[#0f62fe]';
            } else if (isMicrosoft) {
              borderGlowClass = 'hover:border-[#10b981]/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] bg-gradient-to-tr from-[#10b981]/10 to-transparent';
              badgeIconColor = 'text-[#10b981]';
            } else if (isBoardInfinity) {
              borderGlowClass = 'hover:border-[#8b5cf6]/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] bg-gradient-to-tr from-[#8b5cf6]/10 to-transparent';
              badgeIconColor = 'text-[#8b5cf6]';
            } else if (isNptel) {
              borderGlowClass = 'hover:border-[#14b8a6]/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] bg-gradient-to-tr from-[#14b8a6]/10 to-transparent';
              badgeIconColor = 'text-[#14b8a6]';
            }

            return (
              <div 
                key={index} 
                className={`card-enhanced group lift-on-hover relative overflow-hidden p-8 rounded-3xl border border-white/10 flex flex-col justify-between smooth-transition ${borderGlowClass}`}
              >
                {/* Background visual elements */}
                <div className="absolute top-0 right-0 p-8 text-8xl font-black select-none pointer-events-none text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500">
                  {cert.icon}
                </div>

                <div>
                  {/* Badge Logo / Placeholder */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl glass-effect-2 flex items-center justify-center shrink-0 group-hover:scale-110 smooth-transition border border-white/10 relative">
                      {isOracle ? (
                        <Shield className={`${badgeIconColor} w-8 h-8 group-hover:rotate-12 transition-transform duration-300`} />
                      ) : (
                        <Award className={`${badgeIconColor} w-8 h-8 group-hover:rotate-12 transition-transform duration-300`} />
                      )}
                      {/* Pulse ring on hover */}
                      <span className="absolute inset-0 rounded-2xl border border-[#00f3ff]/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 smooth-transition" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f3ff] block mb-1">
                        {cert.issuer}
                      </span>
                      <div className="text-xs text-white/40 font-mono">
                        Granted: {cert.date}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-snug mb-4 text-white group-hover:text-[#00f3ff] smooth-transition">
                    {cert.name}
                  </h3>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  {cert.score ? (
                    <div className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                      Result: <span className="text-[#00f3ff] font-bold">{cert.score}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white/50">
                      <CheckCircle size={14} className="text-[#10b981]" /> Verified Credential
                    </div>
                  )}

                  <a 
                    href="https://github.com/vinith2006" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-white/40 group-hover:text-[#00f3ff] group-hover:bg-[#00f3ff]/10 smooth-transition cursor-pointer"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
