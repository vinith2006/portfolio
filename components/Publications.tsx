import React from 'react';
import { BookOpen, ExternalLink, ShieldAlert, Binary, Award } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#9d4edd]/5 via-transparent to-[#9d4edd]/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-aurora text-3d-deep flex items-center justify-center gap-3">
            📚 Research & Publications
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4">
            Academic research papers published in international conferences and journals.
          </p>
        </div>

        <div className="card-enhanced card-aurora group lift-on-hover relative overflow-hidden p-8 md:p-12 rounded-3xl shadow-3d border border-white/10">
          {/* Subtle gradient light beam */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#9d4edd]/10 via-[#6366f1]/5 to-transparent rounded-full blur-[80px]" />
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-[#9d4edd]/20 border border-[#9d4edd]/30 text-xs font-mono text-[#c084fc] uppercase tracking-wider">
              International Conference Paper
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-white/60">
              ICPCSN 2026
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black leading-tight text-white group-hover:text-[#a855f7] smooth-transition mb-4">
            EchoGuard – Biometric Voice-Based Audio Watermarking with Blockchain Ownership Verification
          </h3>

          <div className="flex items-center gap-2 text-sm font-mono text-white/40 mb-8">
            <span className="text-[#00f3ff]">Author:</span> Vinith M
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#00f3ff] mb-2 flex items-center gap-2">
                <BookOpen size={14} /> Abstract
              </h4>
              <p className="text-white/70 leading-relaxed text-sm md:text-base bg-white/5 p-6 rounded-2xl border border-white/5">
                EchoGuard introduces an advanced security architecture combating unauthorized voice cloning and deepfakes. 
                By synthesizing a creator\'s biometric voice signature into high-fidelity watermarks embedded directly into audio content, 
                this work guarantees data verification without human auditing. Crucially, ownership claims and transaction handshakes 
                are cryptographically recorded onto a decentralized Ethereum-based blockchain ledger, establishing a tamper-proof chain of custody.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#00f3ff] mb-3 flex items-center gap-2">
                <Binary size={14} /> Key Highlights
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Biometric Voice Identity Signature Synthesis',
                  'Lossless robust audio watermarking against format transcodings',
                  'Decentralized ownership indexing on Solidity-based EVM Ledger',
                  'High robustness against additive noise and frequency filtering'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shrink-0 mt-2" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
            <a
              href="https://github.com/vinith2006"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#a855f7] text-sm font-mono flex items-center gap-2 smooth-transition"
            >
              <ExternalLink size={16} /> Read Full Paper
            </a>
            <a
              href="https://github.com/vinith2006"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366f1]/20 to-[#9d4edd]/20 border border-[#9d4edd]/40 text-white hover:from-[#6366f1]/30 hover:to-[#9d4edd]/30 text-sm font-mono flex items-center gap-2 smooth-transition"
            >
              <Award size={16} className="text-[#a855f7]" /> View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
