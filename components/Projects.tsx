
import React, { useState } from 'react';
import { PROJECTS, SOCIAL_LINKS } from '../constants.ts';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0]; index: number }> = ({ project, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const colorSchemes = ['card-neon', 'card-ocean', 'card-fire', 'card-aurora'];
  const colorScheme = colorSchemes[index % colorSchemes.length];

  return (
    <div 
      className={`group relative card-enhanced ${colorScheme} lift-on-hover card-3d shadow-3d perspective-container`}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
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

      <div className="p-8 flex-1 flex flex-col relative">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#22d3ee] smooth-transition">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[10px] font-mono border border-white/20 rounded-full text-white/60 uppercase tracking-widest hover:border-[#6366f1] hover:text-[#6366f1] smooth-transition bg-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced Hologram Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.1) 0%, transparent 80%)',
        opacity: 0,
      }} className="group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
    </div>
  );
};

const Projects: React.FC = () => {
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
              A selection of experimental deployments and production-ready architectures.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
    </section>
  );
};

export default Projects;
