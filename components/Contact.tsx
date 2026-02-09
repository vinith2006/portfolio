
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-black mb-8 tracking-tighter uppercase">LET'S SYNC</h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Seeking collaborative opportunities to build the next generation of software solutions. 
              Let's connect and innovate.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'vinithmurugan275@gmail.com', color: '#6366f1', link: 'mailto:vinithmurugan275@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 79041 69086', color: '#00f3ff', link: 'tel:+917904169086' },
                { icon: MapPin, label: 'Location', value: 'Dindigul, Tamil Nadu', color: '#ec4899', link: 'https://www.google.com/maps/place/Dindigul,+Tamil+Nadu' }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target={item.link.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-[var(--color)] transition-all" style={{ '--color': item.color } as any}>
                    <item.icon className="text-white/70 group-hover:text-[var(--color)] transition-colors" size={24} style={{ '--color': item.color } as any} />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-white/40 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-bold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="/resume.pdf" 
                download="Vinith_M_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-2xl font-bold text-white hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="p-10 rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-2xl transition-all duration-500">
              {status === 'success' ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#00f3ff]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00f3ff]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                  <p className="text-white/60">The uplink was successful. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm font-mono text-[#6366f1] hover:underline"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-white/40 uppercase ml-2">Identified As</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] transition-all text-white placeholder:text-white/20" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-white/40 uppercase ml-2">Comm Channel</label>
                      <input 
                        required
                        type="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] transition-all text-white placeholder:text-white/20" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-white/40 uppercase ml-2">Transmission Data</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="How can we collaborate?" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#6366f1] transition-all resize-none text-white placeholder:text-white/20"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-5 bg-[#6366f1] hover:bg-[#8b5cf6] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(99,102,241,0.3)] active:scale-95 group disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        UPLINKING...
                      </>
                    ) : (
                      <>
                        ESTABLISH CONNECTION
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
