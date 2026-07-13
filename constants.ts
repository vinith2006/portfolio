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
    title: 'EchoGuard – Biometric Voice-Based Audio Watermarking with Blockchain Ownership Verification',
    description: 'Developed an AI-based system embedding creator unique identity keys into audio files for secure authentication with blockchain integration.',
    tags: ['AI Security', 'Blockchain', 'Auth'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
    problemStatement: 'In the age of generative AI, voice cloning and unauthorized audio distribution have run rampant, making it incredibly easy to spoof voice biometric authentication systems or steal creators\' audio content without attribution or verification.',
    solution: 'EchoGuard embeds a unique, imperceptible biometric voice-key signature into digital audio streams combined with a decentralized blockchain ledger to store and verify ownership, providing cryptographic proof of identity and origin.',
    features: [
      'Voice Biometrics Identity Synthesis',
      'High-Fidelity Audio Watermarking',
      'Blockchain-backed Ownership Ledger',
      'Real-time Signature Extraction and Match Verification'
    ],
    techStack: ['React', 'Python', 'FastAPI', 'Web3.js', 'Solidity', 'Librosa'],
    challenges: 'Achieving high robustness of the audio watermark against lossy compression (such as converting to MP3) while maintaining audio imperceptibility to ensure studio-grade quality.',
    learningOutcomes: 'Gained deep expertise in digital signal processing, acoustic feature extraction, and deploying Solidity smart contracts on EVM-compatible testnets.',
    screenshots: [
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop'
    ],
    githubLink: 'https://github.com/vinith2006',
    liveDemo: 'https://github.com/vinith2006'
  },
  {
    id: '2',
    title: 'Hospital Management System',
    description: 'A robust healthcare platform featuring patient record digitisation, appointment scheduling, and automated billing modules with secure encryption.',
    tags: ['Java', 'MySQL', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
    problemStatement: 'Traditional paper-based medical files lead to severe administrative delays, higher error rates, and vulnerability to security breaches, while disjointed scheduling systems result in patient dissatisfaction and doctor scheduling conflicts.',
    solution: 'Built a centralized hospital information system featuring advanced patient digital record tracking, smart calendar scheduling to prevent double-bookings, and automated secure billing.',
    features: [
      'Electronic Health Record (EHR) Encryption',
      'Automated Appointment Scheduling and Reminders',
      'Centralized Billing and Invoice Generation',
      'Role-Based Access Controls for Staff and Doctors'
    ],
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Thymeleaf', 'Bootstrap'],
    challenges: 'Maintaining absolute data integrity and consistency across multiple concurrent booking threads while implementing strict HIPAA-compliant encryption standards on SQL records.',
    learningOutcomes: 'Mastered relational database design, database normalization, transacting with multi-table queries, and structuring secure backend APIs in Java.',
    screenshots: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
    ],
    githubLink: 'https://github.com/vinith2006',
    liveDemo: 'https://github.com/vinith2006'
  },
  {
    id: '3',
    title: 'Cooking Assistant',
    description: 'An AI-powered culinary companion that generates smart recipes based on pantry inventory and provides step-by-step voice-guided instructions.',
    tags: ['React', 'Gemini API', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
    problemStatement: 'Food waste is a major global issue, and many individuals struggle to create healthy, appealing meals from random leftover ingredients in their refrigerators.',
    solution: 'An interactive cooking application that uses Gemini AI to analyze a list of available pantry ingredients, instantly suggest optimized recipes, and guide the user with voice commands.',
    features: [
      'AI Recipe Generator via Gemini API',
      'Voice-Guided Hands-Free Cooking Mode',
      'Ingredient Inventory Tracking and Alerts',
      'Dynamic Dietary Preference Customizations'
    ],
    techStack: ['React', 'Tailwind CSS', 'Gemini API', 'Web Speech API', 'Firebase Auth & Firestore'],
    challenges: 'Designing a robust hands-free voice interface that functions accurately in a noisy kitchen environment without stuttering or dropping commands.',
    learningOutcomes: 'Learned integration of Gemini LLM APIs, handling web-browser speech synthesis/recognition, and managing real-time database state in Firestore.',
    screenshots: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800&auto=format&fit=crop'
    ],
    githubLink: 'https://github.com/vinith2006',
    liveDemo: 'https://github.com/vinith2006'
  },
  {
    id: '4',
    title: 'Savevolt',
    description: 'Smart energy monitoring dashboard that visualises real-time electricity consumption and provides AI-driven cost reduction insights for households.',
    tags: ['IoT', 'Data Visualisation', 'React'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
    problemStatement: 'Most homeowners have no visibility into how specific household appliances consume energy throughout the day, leading to unexpectedly high utility bills and excessive carbon footprints.',
    solution: 'Built an IoT-integrated energy dashboard that processes sensor telemetry data to display real-time power metrics and suggest actionable cost-saving strategies.',
    features: [
      'Real-Time Power Telemetry Graphing',
      'Appliance-Level Consumption Breakdown',
      'Predictive AI Billing and Usage Warnings',
      'Automated Energy Saving Recommendations'
    ],
    techStack: ['React', 'Chart.js', 'Node.js', 'Express', 'Arduino/ESP32', 'MQTT Protocol'],
    challenges: 'Managing and rendering high-frequency timeseries data from hardware sensors smoothly without degrading UI rendering performance.',
    learningOutcomes: 'Gained hands-on experience with MQTT protocols, processing raw hardware sensor data streams, and using React chart libraries for real-time visualization.',
    screenshots: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ],
    githubLink: 'https://github.com/vinith2006',
    liveDemo: 'https://github.com/vinith2006'
  },
  {
    id: '5',
    title: 'Flight Reservation System',
    description: 'Complete flight booking system with modules for booking, cancellation, and scheduling. Normalized relational database architecture.',
    tags: ['PHP', 'MySQL', 'HTML5'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109ec05?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
    problemStatement: 'Legacy flight reservation interfaces are often slow, cluttered, and fail to handle high volumes of concurrent booking transactions, resulting in double-bookings and race conditions.',
    solution: 'Created a lightweight, transaction-safe booking engine with an optimized relational database schema designed to scale and prevent concurrent seat reservation conflicts.',
    features: [
      'Interactive Seat Map Selection',
      'Secure Payment Gateway Simulation',
      'Flight Scheduling Dashboard for Administrators',
      'Real-Time Booking Status Notification System'
    ],
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'Javascript', 'AJAX'],
    challenges: 'Handling seat allocation race conditions when multiple users attempt to book the exact same seat simultaneously.',
    learningOutcomes: 'Acquired a deep understanding of database transaction isolation levels, SQL locks, and designing dynamic asynchronous interfaces using AJAX and PHP.',
    screenshots: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109ec05?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop'
    ],
    githubLink: 'https://github.com/vinith2006',
    liveDemo: 'https://github.com/vinith2006'
  },
  {
    id: '6',
    title: 'Payroll Management',
    description: 'Developed a web-based payroll system to automate employee management, attendance tracking, and salary calculation with PHP–MySQL integration.',
    tags: ['Full Stack', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    link: 'https://github.com/vinith2006',
    problemStatement: 'Manual processing of timesheets, tax deductions, bonuses, and salary disbursements is slow, error-prone, and presents severe data security risks.',
    solution: 'Designed a secure, fully automated payroll web application that tracks employee attendance and calculates accurate salaries, including tax deductions and benefits.',
    features: [
      'Asynchronous Attendance and Timesheet Tracking',
      'Automatic Tax, Bonus, and Deduction Calculator',
      'Secure Salary Slip Generation and PDF Export',
      'Comprehensive Departmental Financial Reports'
    ],
    techStack: ['PHP', 'MySQL', 'jQuery', 'HTML5', 'CSS3'],
    challenges: 'Designing flexible mathematical models to compute highly customized tax structures and bonuses while maintaining full audit logs for compliance.',
    learningOutcomes: 'Mastered full-stack PHP session management, dynamic PDF document generation in the backend, and writing highly secure SQL queries to prevent SQL injection attacks.',
    screenshots: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    ],
    githubLink: 'https://github.com/vinith2006',
    liveDemo: 'https://github.com/vinith2006'
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
  { 
    name: 'Lab: Build a Retrieval Augmented Generation Pattern with LangChain', 
    issuer: 'IBM SkillsBuild', 
    date: 'Feb 2026', 
    icon: '🔗' 
  },
  { 
    name: 'Journey to Cloud: Envisioning Your Solution', 
    issuer: 'IBM SkillsBuild', 
    date: 'Feb 2026', 
    icon: '☁️' 
  },
  { 
    name: 'Getting Started with Artificial Intelligence', 
    issuer: 'IBM SkillsBuild', 
    date: 'Feb 2026', 
    icon: '🤖' 
  },
  { 
    name: 'Lab: Build an AI-Powered Document Retrieval System with IBM Granite and Docling', 
    issuer: 'IBM SkillsBuild', 
    date: 'Feb 2026', 
    icon: '📄' 
  },
  { 
    name: 'Certified Generative AI Professional', 
    issuer: 'Oracle', 
    date: 'Oct 2025', 
    icon: '🔮' 
  },
  { 
    name: 'Power BI Data Analyst Associate', 
    issuer: 'Microsoft', 
    date: 'Jan 2026', 
    icon: '📊' 
  },
  { 
    name: 'Introduction to Internet of Things', 
    issuer: 'NPTEL (Elite)', 
    date: 'Oct 2024', 
    score: '78%', 
    icon: '🔌' 
  },
  { 
    name: 'Certified Data Science Professional', 
    issuer: 'Oracle', 
    date: 'Oct 2025', 
    icon: '💾' 
  },
  { 
    name: 'Responsible & Safe AI Systems', 
    issuer: 'NPTEL (Elite)', 
    date: 'Oct 2025', 
    score: '65%', 
    icon: '🛡️' 
  },
  { 
    name: 'Data Science for Beginners', 
    issuer: 'Board Infinity', 
    date: 'Jan 2026', 
    icon: '🎓' 
  },
  { 
    name: 'AI Foundations Associate', 
    issuer: 'Oracle', 
    date: 'Oct 2025', 
    icon: '🧠' 
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    title: 'First Prize 🥇', 
    event: 'Intellix-ML Hackathon', 
    date: 'Sept 2025', 
    description: 'Secured the first position for developing an innovative machine learning application that optimized resource allocation in real-time.' 
  },
  { 
    title: 'Second Prize 🥈', 
    event: 'Gencraft\'25 Hackathon', 
    date: 'Feb 2026', 
    description: 'Won second place for rapidly building an AI-powered content generation tool designed for educational platforms.' 
  },
  { 
    title: 'Third Prize 🥉', 
    event: 'Gencraft\'25 SiteSpark', 
    date: 'Oct 2025', 
    description: 'Achieved third place for building an automated web UI design generator using prompt-driven code compilation.' 
  },
  { 
    title: 'Third Prize 🥉', 
    event: 'Forgia Hackathon', 
    date: 'Nov 2025', 
    description: 'Secured third place in a competitive project hackathon presenting a functional energy efficiency tracking system.' 
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'MoviCloud Labs Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    period: 'Jan 2026 – Apr 2026',
    description: [
      'Contributing to the development of responsive web applications using React and Tailwind CSS.',
      'Collaborating with senior engineers to implement pixel-perfect UI components and ensure cross-browser compatibility.',
      'Optimizing frontend performance and participating in regular sprint planning and code reviews.'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Git', 'Lucide React'],
    achievements: [
      'Redesigned the primary user portal, increasing page loading speeds by 25%.',
      'Developed 15+ highly reusable UI components used across the team.',
      'Resolved 30+ critical cross-browser display bugs during final testing phases.'
    ]
  },
  {
    company: 'ApexPlanet Software Pvt. Ltd.',
    role: 'Web Development Intern',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Successfully completed web development projects involving HTML, CSS, and JavaScript.',
      'Developed responsive user interfaces and integrated frontend interactive features.',
      'Certificate ID: APSPL2509859'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    achievements: [
      'Built a fully responsive company website that improved mobile visitor engagement by 15%.',
      'Implemented clean, modular JavaScript code to handle form submissions and interactive elements.',
      'Learned best practices for semantic HTML and responsive layouts.'
    ]
  }
];

export const LEARNING_TOPICS = [
  { name: 'Next.js', progress: 85, icon: '🌐', level: 'Advanced Routing & SSR' },
  { name: 'TypeScript', progress: 90, icon: '🔷', level: 'Strict Typing & Generics' },
  { name: 'Redux Toolkit', progress: 80, icon: '⚡', level: 'Global State Management' },
  { name: 'Node.js', progress: 85, icon: '🟢', level: 'Scalable Backend Runtimes' },
  { name: 'Express.js', progress: 88, icon: '🚀', level: 'REST APIs & Middleware' },
  { name: 'MongoDB', progress: 82, icon: '🍃', level: 'NoSQL Aggregations & Modeling' },
  { name: 'AWS Basics', progress: 65, icon: '☁️', level: 'S3, EC2 & Cloud Architecture' }
];

export const TESTIMONIALS = [
  {
    name: 'Dr. R. Senthamilselvan',
    role: 'Professor & Head of Department, CSE',
    company: 'M Kumarasamy College of Engineering',
    message: 'Vinith is an exceptional engineering student with a deep passion for coding and software development. His work on AI authentication shows a high degree of technical aptitude and innovative problem-solving capability. He has consistently demonstrated leadership in technical events.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'S. Rajesh Kumar',
    role: 'Project Lead & Mentor',
    company: 'MoviCloud Labs',
    message: 'During his frontend development internship, Vinith displayed outstanding technical capabilities. He quickly mastered our UI development standards, built high-performance, reusable React elements, and proved to be an excellent collaborator in agile sprints.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop'
  }
];
