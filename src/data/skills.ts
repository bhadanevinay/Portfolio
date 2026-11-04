import { SkillCategory } from '@/types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-languages',
    number: '01',
    title: 'PROGRAMMING LANGUAGES',
    alignment: 'left',
    skills: [
      { name: 'Java', iconId: 'java' },
      { name: 'JavaScript', iconId: 'javascript' },
      { name: 'Python', iconId: 'python' },
      { name: 'C', iconId: 'c' },
    ],
  },
  {
    id: 'frontend',
    number: '02',
    title: 'FRONTEND DEVELOPMENT',
    alignment: 'right',
    skills: [
      { name: 'React.js', iconId: 'react' },
      { name: 'Next.js', iconId: 'nextjs' },
      { name: 'HTML5', iconId: 'html5' },
      { name: 'CSS3', iconId: 'css3' },
      { name: 'Tailwind CSS', iconId: 'tailwind' },
    ],
  },
  {
    id: 'backend',
    number: '03',
    title: 'BACKEND',
    alignment: 'left',
    skills: [
      { name: 'Firebase', iconId: 'firebase' },
    ],
  },
  {
    id: 'databases',
    number: '04',
    title: 'DATABASES',
    alignment: 'right',
    skills: [
      { name: 'MySQL', iconId: 'mysql' },
      { name: 'Firestore', iconId: 'firestore' },
    ],
  },
  {
    id: 'cloud-and-tools',
    number: '05',
    title: 'CLOUD AND TOOLS',
    alignment: 'left',
    skills: [
      { name: 'Git', iconId: 'git' },
      { name: 'GitHub', iconId: 'github' },
      { name: 'Vercel', iconId: 'vercel' },
    ],
  },
  {
    id: 'core-concepts',
    number: '06',
    title: 'CORE CONCEPTS',
    alignment: 'right',
    skills: [
      { name: 'Data Structures & Algorithms', iconId: 'dsa' },
      { name: 'Object-Oriented Programming', iconId: 'oop' },
      { name: 'Operating Systems', iconId: 'os' },
      { name: 'Database Management Systems', iconId: 'dbms' },
    ],
  },
];
