import { ProjectItem } from '@/types/portfolio';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'abhyasmitra',
    number: '01',
    title: 'ABHYASMITRA',
    tagline: 'Production-Grade Educational Platform',
    duration: '2025 – Present',
    techStack: ['Next.js', 'Firebase', 'Tailwind CSS'],
    description: 'Architected and deployed a production-grade educational platform actively serving 1,000+ engineering students across SPPU University. Implemented secure authentication, real-time notes management and a fully responsive UI, ensuring high availability and performance at scale.',
    featured: true,
  },
  {
    id: 'votechainx',
    number: '02',
    title: 'VOTECHAINX',
    tagline: 'Decentralized E-Voting Platform',
    event: 'UpXgen State Level Hackathon (1st Place Winner)',
    duration: '2025',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Ethers.js'],
    description: 'Built a fully responsive, component-driven frontend for a decentralized e-voting platform with clean, modular React architecture and zero external UI library dependency. Managed complex async workflows and live blockchain data using hooks and state management. Implemented gasless meta-transaction support for zero-cost participation.',
    featured: true,
  },
  {
    id: 'kumbhprasad',
    number: '03',
    title: 'KUMBHPRASAD',
    tagline: 'Full-Stack E-Commerce & Payment Engine',
    duration: '2025',
    techStack: ['Next.js', 'Firebase', 'Razorpay'],
    description: 'Built a full-stack e-commerce platform featuring secure Firebase authentication, real-time order management and an integrated Razorpay payment gateway with transaction verification.',
    featured: false,
  },
];
