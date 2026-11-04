export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  supportingIntro: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  resumeUrl: string;
  availableForWork: boolean;
}

export interface SkillItem {
  name: string;
  iconId: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  alignment: 'left' | 'right';
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  workMode: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  event?: string;
  duration: string;
  techStack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  branch?: string;
  duration: string;
  score: string;
  achievement?: string;
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  highlight: string;
  organization: string;
  description: string;
}

