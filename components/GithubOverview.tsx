import React from 'react';
import { Github, GitPullRequest, GitFork, Star, Terminal, Eye, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const GithubOverview: React.FC = () => {
  const stats = [
    { label: 'Public Repositories', value: '24', icon: GitFork, color: 'text-[#00f3ff]' },
    { label: 'Total Contributions', value: '342+', icon: GitPullRequest, color: 'text-[#6366f1]' },
    { label: 'Stars Earned', value: '18', icon: Star, color: 'text-[#ef4444]' },
    { label: 'Profile Views', value: '1.2k', icon: Eye, color: 'text-[#22d3ee]' }
  ];

  const topLanguages = [
    { name: 'Java', percentage: 42, color: 'bg-amber-600' },
    { name: 'TypeScript', percentage: 28, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 15, color: 'bg-yellow-400' },
    { name: 'PHP', percentage: 10, color: 'bg-indigo-500' },
    { name: 'Solidity', percentage: 5, color: 'bg-gray-400' }
  ];

  const pinnedRepos = [
    {
      name: 'EchoGuard',
      desc: 'AI Voice biometrics audio watermarking system with Solidity-based blockchain ledger verification.',
      stars: 6,
      forks: 2,
      lang: 'Python'
    },
    {
      name: 'savevolt',
      desc: 'IoT energy consumption analytics telemetry dashboard for real-time power conservation insights.',
      stars: 4,
      forks: 1,
      lang: 'React'
    },
    {
      name: 'Hospital-Management',
      desc: 'Complete EHR digitized recording platform with appointment scheduling and role-based doctor dashboard.',
      stars: 5,
      forks: 3,
      lang: 'Java'
    }
  ];

  return (
    <section id="github" className="py-24 px-6 relative bg-[#050507]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-neon text-3d-deep flex items-center justify-center gap-3">
            <Github className="w-10 h-10" /> GitHub Command Center
          </h2>
          <div className="underline-gradient mx-auto" />
          <p className="text-white/50 text-sm font-mono mt-4">
            Live integration, contribution activity, and primary codebase indexes.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="glass-effect rounded-3xl border border-white/10 overflow-hidden shadow-3d relative">
          
          {/* Terminal Title Bar */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#f59e0b]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#10b981]" />
              <span className="text-xs font-mono text-white/40 ml-2 uppercase tracking-widest flex items-center gap-1">
                <Terminal size={12} /> vinith2006@github ~ bash
              </span>
            </div>
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#00f3ff] hover:underline flex items-center gap-1.5 uppercase tracking-widest"
            >
              Open Profile <ExternalLink size={12} />
            </a>
          </div>

          <div className="p-8 grid lg:grid-cols-3 gap-8">
            {/* Left Column: Profile Card & Tech Stats */}
            <div className="space-y-6 lg:col-span-1">
              {/* Profile Brief */}
              <div className="glass-effect-2 p-6 rounded-2xl border border-white/5 text-center relative group">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-white/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://image2url.com/r2/default/images/1770452230123-4a14027b-7006-4ae9-be5a-580154d71073.jpeg" 
                    alt="Vinith Github Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Vinith M</h3>
                <p className="text-xs font-mono text-white/40 mt-1">@vinith2006</p>
                <p className="text-sm text-white/60 mt-3 font-mono">
                  Full Stack Engineer &amp; Machine Learning Researcher
                </p>
              </div>

              {/* Language Breakdown */}
              <div className="glass-effect-2 p-6 rounded-2xl border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f3ff] mb-4">
                  Primary Codebase Split
                </h4>
                <div className="space-y-3">
                  {topLanguages.map((lang, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-mono text-white/50 mb-1">
                        <span>{lang.name}</span>
                        <span>{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${lang.color} rounded-full`}
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contributions Graph & Top Repos */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Contribution Activity Grid */}
              <div className="glass-effect-2 p-6 rounded-2xl border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f3ff] mb-4">
                  Commit History Heatmap
                </h4>
                <div className="w-full flex justify-center py-4 bg-white/[0.02] rounded-xl border border-white/5 overflow-x-auto">
                  {/* Public Chart Image */}
                  <img 
                    src="https://ghchart.rshah.org/6366f1/vinith2006" 
                    alt="Vinith M's Github Contribution Chart"
                    className="max-w-full h-auto brightness-95 contrast-125 filter group-hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      // Fallback text if chart service is unreachable
                      e.currentTarget.style.display = 'none';
                      const fallback = document.getElementById('gh-fallback');
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div id="gh-fallback" className="hidden py-8 text-center text-white/40 font-mono text-sm">
                    {/* Simulated visual grid fallback */}
                    [Contribution Grid Available Online at github.com/vinith2006]
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="glass-effect-2 p-4 rounded-xl border border-white/5 flex flex-col justify-between hover:glow-border smooth-transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">{stat.label}</span>
                      <stat.icon className={`${stat.color}`} size={16} />
                    </div>
                    <div className="text-2xl font-black font-mono text-white mt-auto">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Top Repositories */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f3ff] mb-4">
                  Featured Repositories
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {pinnedRepos.map((repo, idx) => (
                    <a 
                      key={idx}
                      href={`${SOCIAL_LINKS.github}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-effect-2 p-5 rounded-xl border border-white/5 hover:border-[#00f3ff]/30 hover:scale-[1.02] flex flex-col justify-between group/repo smooth-transition"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Github className="text-white/60 group-hover/repo:text-[#00f3ff] smooth-transition" size={16} />
                          <h5 className="font-bold text-sm text-white group-hover/repo:text-[#00f3ff] smooth-transition truncate">
                            {repo.name}
                          </h5>
                        </div>
                        <p className="text-white/50 text-xs leading-relaxed line-clamp-3 mb-4">
                          {repo.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pt-3 border-t border-white/5">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">{repo.lang}</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star size={10} className="text-yellow-500" /> {repo.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork size={10} /> {repo.forks}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubOverview;
