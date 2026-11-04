export interface SkillItem {
  id: string;
  name: string;
  icon: string; // Key or svg path identifier
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color?: string;
  proficiency?: number; // 0 to 100
  experience?: string;
  description?: string;
}

export interface SkillCategoryData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  alignment: 'left' | 'right';
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  year?: string;
  stats?: { label: string; value: string }[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  subheading: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
  availability: string;
  stats: {
    number: string;
    label: string;
  }[];
}

export interface ScrollProgressState {
  progress: number;
  lidRotation: number;
  screenOpacity: number;
  laptopScale: number;
  laptopPosition: [number, number, number];
  laptopRotation: [number, number, number];
  currentScene: number;
}

