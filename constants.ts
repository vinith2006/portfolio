
import { Project, Skill, Experience, Certification, Achievement } from './types.ts';

export const COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#22d3ee',
  neon: '#00f3ff',
  dark: '#0a0a0f',
  darker: '#050507',
  light: '#f8fafc',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/vinith2006',
  linkedin: 'https://linkedin.com/in/vinith05',
  email: 'mailto:vinithmurugan275@gmail.com',
  resume: '#' 
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EchoGuard: AI Voice Auth',
    description: 'Developed an AI-based system embedding creator unique identity keys into audio files for secure authentication with blockchain integration.',
    tags: ['AI Security', 'Blockchain', 'Auth'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
  },
  {
    id: '2',
    title: 'Hospital Management System',
    description: 'A robust healthcare platform featuring patient record digitisation, appointment scheduling, and automated billing modules with secure encryption.',
    tags: ['Java', 'MySQL', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
  },
  {
    id: '3',
    title: 'Cooking Assistant',
    description: 'An AI-powered culinary companion that generates smart recipes based on pantry inventory and provides step-by-step voice-guided instructions.',
    tags: ['React', 'Gemini API', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
  },
  {
    id: '4',
    title: 'Savevolt',
    description: 'Smart energy monitoring dashboard that visualises real-time electricity consumption and provides AI-driven cost reduction insights for households.',
    tags: ['IoT', 'Data Visualisation', 'React'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
  },
  {
    id: '5',
    title: 'Flight Reservation System',
    description: 'Complete flight booking system with modules for booking, cancellation, and scheduling. Normalized relational database architecture.',
    tags: ['PHP', 'MySQL', 'HTML5'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109ec05?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
  },
  {
    id: '6',
    title: 'Payroll Management',
    description: 'Developed a web-based payroll system to automate employee management, attendance tracking, and salary calculation with PHP–MySQL integration.',
    tags: ['Full Stack', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java Programming', level: 90, icon: '☕' },
  { name: 'React', level: 92, icon: '⚛️' },
  { name: 'Web Dev (HTML/CSS)', level: 95, icon: '🌐' },
  { name: 'SQL & MySQL', level: 85, icon: '🗄️' },
  { name: 'Git & GitHub', level: 90, icon: '🐙' }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Lab: Build a Retrieval Augmented Generation Pattern with LangChain', issuer: 'IBM SkillsBuild', date: 'Feb 2026' },
  { name: 'Journey to Cloud: Envisioning Your Solution', issuer: 'IBM SkillsBuild', date: 'Feb 2026' },
  { name: 'Getting Started with Artificial Intelligence', issuer: 'IBM SkillsBuild', date: 'Feb 2026' },
  { name: 'Lab: Build an AI-Powered Document Retrieval System with IBM Granite and Docling', issuer: 'IBM SkillsBuild', date: 'Feb 2026' },
  { name: 'Certified Generative AI Professional', issuer: 'Oracle', date: 'Oct 2025' },
  { name: 'Power BI Data Analyst Associate', issuer: 'Microsoft', date: 'Jan 2026' },
  { name: 'Introduction to Internet of Things', issuer: 'NPTEL (Elite)', date: 'Oct 2024', score: '78%' },
  { name: 'Certified Data Science Professional', issuer: 'Oracle', date: 'Oct 2025' },
  { name: 'Responsible & Safe AI Systems', issuer: 'NPTEL (Elite)', date: 'Oct 2025', score: '65%' },
  { name: 'Data Science for Beginners', issuer: 'Board Infinity', date: 'Jan 2026' },
  { name: 'AI Foundations Associate', issuer: 'Oracle', date: 'Oct 2025' }
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    title: 'Dr. Kalam Young Achiever Award', 
    event: 'World Youth Federation', 
    date: 'Sept 2025', 
    description: 'Awarded for demonstrating exceptional aptitude for engineering and technical excellence.' 
  },
  { 
    title: '2nd Prize - Hackathon', 
    event: 'Technical Competition', 
    date: 'Feb 2026', 
    description: 'Secured second place in a competitive hackathon demonstrating rapid prototyping and collaborative problem solving.' 
  },
  { 
    title: '1st Prize - Intellix', 
    event: 'Technical Symposium', 
    date: '2025', 
    description: 'Secured the first position in the Intellix technical competition showing high-level problem-solving skills.' 
  },
  { 
    title: '3rd Prize - Site Spark', 
    event: 'Gencraft\'25', 
    date: 'Oct 2025', 
    description: 'Won the third prize in the Site Spark event for rapid web application prototyping and design.' 
  },
  { 
    title: '3rd Prize - Forgia', 
    event: 'Project Exhibition', 
    date: '2025', 
    description: 'Achieved the third rank in the Forgia project showcase for technical innovation.' 
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Movicloud Labs Private Limited',
    role: 'Frontend Developer Intern',
    period: 'Jan 2026 - Present',
    description: [
      'Contributing to the development of responsive web applications using React and Tailwind CSS.',
      'Collaborating with senior engineers to implement pixel-perfect UI components and ensure cross-browser compatibility.',
      'Optimizing frontend performance and participating in regular sprint planning and code reviews.'
    ]
  },
  {
    company: 'ApexPlanet Software Pvt. Ltd.',
    role: 'Virtual Web Development Intern',
    period: 'June 2025 - Aug 2025',
    description: [
      'Successfully completed virtual internship in Web Development with HTML, CSS, and JavaScript.',
      'Developed responsive user interfaces and integrated frontend logic.',
      'Certificate ID: APSPL2509859'
    ]
  }
];
