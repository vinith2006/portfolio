
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  score?: string;
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
}
