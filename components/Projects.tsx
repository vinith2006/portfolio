
import React, { useState } from 'react';
import { PROJECTS, SOCIAL_LINKS } from '../constants.ts';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="group relative rounded-3xl bg-[#0a0a0f] border border-white/10 overflow-hidden hover:border-[#ec4899] transition-all duration-500 flex flex-col"
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
            className="p-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md hover:bg-[#6366f1] transition-colors text-white"
          >
            <Github size={18} />
          </a>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md hover:bg-[#ec4899] transition-colors text-white"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col relative">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ec4899] transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-[10px] font-mono border border-white/10 rounded-full text-white/40 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hologram Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none border-2 border-[#ec4899] opacity-0 group-hover:opacity-10 scale-95 group-hover:scale-100 transition-all duration-500 rounded-3xl" />
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Cyber Vault</h2>
            <div className="w-32 h-1 bg-[#ec4899] rounded-full" />
          </div>
          <div className="max-w-md">
            <p className="text-white/50 font-mono text-sm leading-relaxed mb-4">
              A selection of experimental deployments and production-ready architectures.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border-2 border-white/10 rounded-2xl font-mono text-sm hover:border-[#6366f1] hover:text-[#6366f1] transition-all"
          >
            VIEW ALL REPOSITORIES →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
