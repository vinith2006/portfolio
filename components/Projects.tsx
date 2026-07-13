import React, { useState, useEffect } from 'react';
import { PROJECTS, SOCIAL_LINKS } from '../constants.ts';
import { ExternalLink, Github, X, Check, Target, Lightbulb, AlertTriangle, GraduationCap, Image } from 'lucide-react';
import { Project } from '../types.ts';

const ProjectCard: React.FC<{ 
  project: Project; 
  index: number; 
  onExplore: () => void;
}> = ({ project, index, onExplore }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const colorSchemes = ['card-neon', 'card-ocean', 'card-fire', 'card-aurora'];
  const colorScheme = colorSchemes[index % colorSchemes.length];

  return (
    <div 
      className={`group relative card-enhanced ${colorScheme} lift-on-hover card-3d shadow-3d perspective-container flex flex-col h-full`}
    >
      <div className="relative h-48 overflow-hidden bg-white/5 rounded-t-3xl">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } grayscale group-hover:grayscale-0 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-effect backdrop-blur-md hover:bg-[#6366f1] transition-all text-white group-hover:scale-110 smooth-transition"
          >
            <Github size={18} />
          </a>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-effect backdrop-blur-md hover:bg-[#22d3ee] transition-all text-white group-hover:scale-110 smooth-transition"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col relative justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#22d3ee] smooth-transition">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-[10px] font-mono border border-white/20 rounded-full text-white/60 uppercase tracking-widest hover:border-[#6366f1] hover:text-[#6366f1] smooth-transition bg-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onExplore();
          }}
          className="w-full py-3 rounded-xl border border-[#00f3ff]/20 text-[#00f3ff] font-mono text-xs uppercase tracking-widest bg-[#00f3ff]/5 hover:bg-[#00f3ff]/20 hover:border-[#00f3ff]/50 smooth-transition group-hover:shadow-[0_0_15px_rgba(0,243,255,0.15)]"
        >
          Explore Case Study →
        </button>
      </div>

      {/* Enhanced Hologram Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.1) 0%, transparent 80%)',
        opacity: 0,
      }} />
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-[#0ea5e9]/3 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 fade-in-on-scroll">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase title-enhanced title-neon text-3d-deep">🛡️ Cyber Vault</h2>
            <div className="underline-gradient" />
          </div>
          <div className="max-w-md">
            <p className="text-white/50 font-mono text-sm leading-relaxed mb-4">
              A selection of experimental deployments and production-ready architectures. Click details to access case studies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onExplore={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 btn-neon rounded-2xl font-mono text-sm hover:scale-105 smooth-transition shadow-3d text-3d"
          >
            VIEW ALL REPOSITORIES →
          </a>
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-md bg-black/80 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0a0a0f] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 md:p-10 shadow-3d scrollbar-thin scrollbar-thumb-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 smooth-transition z-50"
            >
              <X size={18} />
            </button>

            {/* Banner/Header */}
            <div className="relative h-60 md:h-80 w-full rounded-2xl overflow-hidden mb-8 border border-white/5">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 md:left-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/20 text-[9px] font-mono tracking-widest text-[#00f3ff] uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white title-neon">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Case Study Content Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              
              {/* Main Analysis Column */}
              <div className="md:col-span-2 space-y-8">
                
                {/* Problem Statement */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-widest text-[#00f3ff] mb-3 flex items-center gap-2">
                    <Target size={16} /> Problem Statement
                  </h4>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-widest text-[#00f3ff] mb-3 flex items-center gap-2">
                    <Lightbulb size={16} /> Solution Implementation
                  </h4>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-widest text-[#00f3ff] mb-4 flex items-center gap-2">
                    <Check size={16} /> Key Product Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.features?.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl hover:border-white/10 smooth-transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] shrink-0 mt-2" />
                        <span className="text-white/70 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Gallery / Screenshots */}
                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-widest text-[#00f3ff] mb-4 flex items-center gap-2">
                      <Image size={16} /> Production Screenshots
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.screenshots.map((screen, idx) => (
                        <div key={idx} className="rounded-xl overflow-hidden border border-white/10 h-32 md:h-44 bg-white/5">
                          <img 
                            src={screen} 
                            alt={`Screenshot ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Side Info Column */}
              <div className="space-y-8 md:col-span-1 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
                
                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f3ff] mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack?.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 font-mono text-xs rounded-lg hover:border-[#6366f1] transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Challenges */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={14} /> Crucial Challenge
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#10b981] mb-2 flex items-center gap-1.5">
                    <GraduationCap size={14} /> Key Learning
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {selectedProject.learningOutcomes}
                  </p>
                </div>

                {/* Action Links */}
                <div className="pt-6 border-t border-white/5 space-y-3">
                  <a 
                    href={selectedProject.githubLink || selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 smooth-transition"
                  >
                    <Github size={16} /> View Codebase
                  </a>
                  <a 
                    href={selectedProject.liveDemo || selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee] text-white font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] smooth-transition"
                  >
                    <ExternalLink size={16} /> Live Prototype
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
