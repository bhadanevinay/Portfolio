/**
 * Central portfolio data — generated from Vinay Bhadane's resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#241a02', via: '#6e5405', to: '#0a0802', accent: '#F5C518' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Vinay S. Bhadane',
  displayName: 'Vinay Bhadane',
  firstName: 'VINAY',
  seriesTag: 'SOFTWARE ENGINEER',
  originalLabel: 'A BHADANE ORIGINAL',
  role: 'B.E. Computer Engineering Student & Full Stack Web Developer',
  tagline: ['B.E. Computer Engineering', 'Full Stack Web Developer', 'Next.js & Java'],
  intro:
    'I am a Computer Engineering student and full-stack developer driven by the craft of building useful, accessible software. Whether designing modular frontends in Next.js, building robust server-side logic in Java, or optimizing databases, I enjoy turning ideas into smooth, production-ready experiences.',
  location: 'Nashik, Maharashtra',
  email: 'vinaybhadane06@gmail.com',
  phone: '+91 7083562087',
  links: {
    linkedin: 'https://linkedin.com/in/vinaybhadane',
    github: 'https://github.com/vinaybhadane',
  },
  resumePdf: '/assets/Vinay_Bhadane_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Vinay Bhadane',
  },
  interests: ['Full Stack Architecture', 'System Design', 'Cloud Deployment'],
};

export const education = [
  {
    school: "MET's Institute of Engineering",
    place: 'Nashik, Maharashtra',
    degree: 'Bachelor of Engineering — Computer Engineering',
    period: '2024 – 2028',
    score: 'CGPA 8.5',
  },
  {
    school: 'MET Institute of Polytechnic',
    place: 'Nashik, Maharashtra',
    degree: 'Diploma in Computer Engineering',
    period: '2022 – 2024',
    score: 'Percentage 92.07%',
  },
];

export const experience = [
  {
    company: 'EduSkills Foundation',
    role: 'Java Full Stack Developer Intern',
    place: 'Remote',
    period: 'January 2026 – March 2026',
    points: [
      'Engineered full-stack web application features using React and Java within an Agile team, following professional SDLC practices.',
      'Contributed to end-to-end development workflows including design, implementation, testing and deployment of features.',
      'Collaborated in agile sprints, participating in daily standups, code reviews, and CI/CD pipelines.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'abhyasmitra',
    title: 'Abhyasmitra',
    year: '2025',
    genre: 'EdTech • Next.js • Real-time Platform',
    logline: 'Production-grade educational platform actively serving 1,000+ engineering students across SPPU.',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    build: [
      'Architected and deployed a production-grade educational platform actively serving 1,000+ engineering students across SPPU University.',
      'Implemented secure authentication, real-time notes and study material management with sub-second retrieval times.',
      'Designed a clean, accessible, responsive interface with high availability at scale.',
    ],
    features: [
      'Real-time notes & resources distribution',
      'Firebase Auth & Cloud Firestore integration',
      'High-speed cached retrieval',
      'Fully responsive accessible UI',
    ],
    metrics: [
      { value: '1,000+', label: 'engineering students' },
      { value: '99.9%', label: 'uptime' },
      { value: 'Sub-sec', label: 'retrieval latency' },
      { value: 'SPPU', label: 'syllabus coverage' },
    ],
    github: 'https://github.com/vinaybhadane',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'votechainx',
    title: 'VoteChainX',
    year: '2025',
    genre: 'Web3 • Blockchain • E-Voting System',
    logline: 'Decentralized e-voting platform built during the UpXgen State-Level Hackathon.',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Ethers.js', 'Solidity'],
    build: [
      'Built a fully responsive, component-driven frontend for a decentralized e-voting platform with clean, modular React architecture.',
      'Managed complex asynchronous workflows and live blockchain smart contract data using custom hooks and state management.',
      'Implemented gasless meta-transaction support for zero-cost voter participation and end-to-end cryptographic ballot verification.',
    ],
    features: [
      'Decentralized cryptographic ballot verification',
      'Gasless meta-transactions for voters',
      'Real-time blockchain state synchronization',
      'Zero UI library overhead with pure Tailwind',
    ],
    metrics: [
      { value: '96 Teams', label: 'competitive field' },
      { value: '100%', label: 'tamper-proof integrity' },
      { value: '0-gas', label: 'voter transaction cost' },
      { value: '1st Place', label: 'hackathon outcome' },
    ],
    github: 'https://github.com/vinaybhadane',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'kumbhprasad',
    title: 'Kumbhprasad',
    year: '2025',
    genre: 'E-Commerce • Fintech • Payment Gateway',
    logline: 'Full-stack prasad distribution and e-commerce platform with integrated Razorpay payment gateway.',
    stack: ['Next.js', 'Firebase', 'Razorpay', 'Tailwind CSS'],
    build: [
      'Built a full-stack e-commerce platform featuring secure Firebase authentication and real-time order processing.',
      'Integrated Razorpay payment gateway with server-side webhook signature verification and automated order reconciliation.',
      'Optimized database queries and dynamic product catalog for fast response under high festival visitor traffic.',
    ],
    features: [
      'Razorpay payment gateway integration',
      'Firebase auth & real-time DB synchronization',
      'Instant order receipt generation',
      'Automated webhook verification',
    ],
    metrics: [
      { value: '100%', label: 'secure payment verification' },
      { value: 'Real-time', label: 'order synchronization' },
      { value: 'Razorpay', label: 'gateway integration' },
      { value: '0', label: 'transaction discrepancies' },
    ],
    github: 'https://github.com/vinaybhadane',
    palette: amber,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'promptwar',
    title: 'PromptWar Rank 1',
    org: 'Hack2Skill & Google for Developers',
    detail: 'Participated in PromptWars, organized by Hack2Skill in collaboration with Google for Developers, securing Rank 1 among 40,000+ national participants.',
    laurel: 'National Rank 1',
  },
  {
    id: 'state-hackathon',
    title: 'State-Level Hackathon 1st Place',
    org: 'PVG Nashik (Blockchain Domain)',
    detail: 'Secured 1st Place in the Blockchain domain by architecting VoteChainX under intense 24-hour hackathon constraints.',
    laurel: '1st / 96 Teams',
  },
  {
    id: 'diploma-merit',
    title: 'Diploma 3rd Rank',
    org: 'MET Institute of Polytechnic, Nashik',
    detail: 'Graduated Diploma in Computer Engineering with 92.07% distinction, securing 3rd Rank in the Institute.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'abhyasmitra-community',
    title: 'Abhyasmitra Platform',
    org: 'SPPU Engineering Community',
    detail: 'Engineered and scaled an educational portal currently serving more than 1,000 engineering students across SPPU University.',
    laurel: '1,000+ Students',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Programming in Java' },
  { issuer: 'NPTEL', name: 'The joy of Computing using Python' },
  { issuer: 'Apna College', name: 'Full Stack Web Development' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java & TypeScript are primary',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js', note: 'Core' },
      { name: 'TypeScript', mono: 'Ts', note: 'Typed' },
      { name: 'Python', mono: 'Py' },
      { name: 'C / C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Modern reactive web platforms',
    skills: [
      { name: 'Next.js', mono: 'Nx', note: 'App Router' },
      { name: 'React.js', mono: 'Re', note: 'Hooks & State' },
      { name: 'Tailwind CSS', mono: 'Tw', note: 'Styling' },
      { name: 'HTML5 / CSS3', mono: 'Ht' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Cloud',
    subtitle: 'APIs & scalable backends',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Firebase', mono: 'Fb', note: 'Auth & DB' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Vercel', mono: 'Vc' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & document stores',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'Firestore', mono: 'Fs' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science engineering',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    subtitle: 'Daily engineering workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Razorpay API', mono: 'Rz' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['NPTEL Programming in Java', 'EduSkills Java Full Stack Intern'],
  'Next.js': ['Abhyasmitra (1,000+ Students)', 'Kumbhprasad', 'VoteChainX'],
  'React.js': ['EduSkills Internship', 'VoteChainX', 'Abhyasmitra'],
  TypeScript: ['VoteChainX Frontend', 'Abhyasmitra'],
  Firebase: ['Abhyasmitra Realtime DB', 'Kumbhprasad Auth & Storage'],
  'Tailwind CSS': ['Abhyasmitra', 'VoteChainX', 'Kumbhprasad'],
  'REST APIs': ['EduSkills Java Backend', 'Razorpay Webhooks'],
  MySQL: ['Database Management Systems Coursework', 'Full Stack Projects'],
  Firestore: ['Abhyasmitra Real-time Data', 'Kumbhprasad'],
  DSA: ['Computer Engineering Academic Coursework'],
  OOP: ['Java Full Stack Internship', 'Computer Engineering Curriculum'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2024',
    synopsis: 'Diploma in Computer Engineering at MET Institute of Polytechnic, Nashik — graduating with 92.07% distinction.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Polytechnic Diploma',
        description: 'Completed Diploma in Computer Engineering with 92.07%, building solid foundations in programming and hardware.',
        tags: ['Diploma', '92.07%', 'Comp Engg'],
        runtime: '2022 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Degree Studies & Code',
    period: '2024 – Present',
    synopsis: "Bachelor of Engineering in Computer Engineering at MET's Institute of Engineering, Nashik (CGPA 8.5).",
    episodes: [
      {
        code: 'S02 E01',
        title: 'B.E. Computer Engineering',
        description: "Studying Computer Engineering at MET's Institute of Engineering with a CGPA of 8.5, focusing on core software systems.",
        tags: ['B.E.', 'Computer Engineering', 'CGPA 8.5'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Programming Certifications',
        description: 'Earned NPTEL certifications in Java and Python, strengthening foundational problem solving.',
        tags: ['Java', 'Python', 'NPTEL'],
        runtime: 'Certifications',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Hackathons & Building',
    period: '2025',
    synopsis: 'Collaborating in intense hackathon environments to build real-world decentralized prototypes.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'VoteChainX Architecture',
        description: 'Designed and built VoteChainX — a decentralized e-voting platform featuring gasless meta-transactions.',
        tags: ['Web3', 'E-Voting', 'React.js'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'UpXgen State Hackathon',
        description: 'Presented VoteChainX at the UpXgen State-Level Hackathon at PVG Nashik, securing 1st Place among 96 teams.',
        tags: ['PVG Nashik', '96 Teams', 'Blockchain'],
        runtime: 'State Level',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Shipping Web Apps',
    period: '2025 – 2026',
    synopsis: 'Deploying production platforms and gaining hands-on software development experience.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Abhyasmitra Live Platform',
        description: 'Launched an educational portal actively serving over 1,000 engineering students across SPPU with 99.9% uptime.',
        tags: ['Next.js', 'Firebase', '1,000+ Users'],
        runtime: '2025 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Kumbhprasad & Fintech',
        description: 'Engineered an e-commerce platform with automated Razorpay payment verification and instant transaction reconciliation.',
        tags: ['Razorpay', 'Next.js', 'Fintech'],
        runtime: '2025',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'EduSkills FSD Internship',
        description: 'Java Full Stack Developer Intern at EduSkills Foundation, building production React and Java web features in an Agile team.',
        tags: ['EduSkills', 'Java', 'React', 'Agile'],
        runtime: 'Jan – Mar 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "Looking Forward",
    period: 'Now streaming',
    synopsis: 'Deepening full-stack web architecture, cloud systems, and scalable software design.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Scalable Systems',
        description: 'Exploring enterprise Next.js App Router architectures, clean APIs, and distributed cloud deployments.',
        tags: ['Full Stack', 'Cloud', 'System Design'],
        runtime: 'In development',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core Stack', title: 'Java & Next.js', detail: 'Modern Full-Stack Development', palette: amber },
  { label: 'Community Platform', title: 'Abhyasmitra', detail: 'Serving 1,000+ Engineering Students across SPPU', palette: ocean },
  { label: 'Decentralized Project', title: 'VoteChainX', detail: 'E-Voting Architecture with Gasless Transactions', palette: crimson },
  { label: 'Fintech Engine', title: 'Kumbhprasad', detail: 'Razorpay Payment Gateway Integration', palette: amber },
  { label: 'Degree', title: 'B.E. Computer', detail: "MET's Institute of Engineering • CGPA 8.5", palette: violet },
  { label: 'Diploma', title: '92.07% Distinction', detail: 'MET Institute of Polytechnic, Nashik', palette: jade },
  { label: 'Industry Internship', title: 'Java FSD Intern', detail: 'EduSkills Foundation (Remote)', palette: jade },
  { label: 'Certification', title: 'NPTEL Java', detail: 'Programming in Java Credential', palette: crimson },
  { label: 'Certification', title: 'NPTEL Python', detail: 'The joy of Computing using Python', palette: violet },
  { label: 'Certification', title: 'Apna College', detail: 'Full Stack Web Development', palette: ocean },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. Computer Engineering',
    lines: ["MET's Institute of Engineering, Nashik (CGPA 8.5)", 'Diploma in Computer Engineering — 92.07% Distinction'],
    chips: ['B.E. Computer', 'CGPA 8.5', '92.07%'],
  },
  {
    kicker: 'Skills',
    title: 'Java & Next.js first.',
    lines: ['Java, JavaScript, TypeScript, Python · React, Next.js, Tailwind CSS', 'Firebase, MySQL, MongoDB, Node.js · REST APIs, Razorpay'],
    chips: ['Java', 'Next.js', 'React', 'Firebase', 'TypeScript', 'Tailwind'],
  },
  {
    kicker: 'Platforms',
    title: 'Three Originals',
    lines: ['Abhyasmitra — Educational platform serving 1,000+ engineering students', 'VoteChainX — Decentralized e-voting system', 'Kumbhprasad — Full-stack e-commerce with Razorpay payment gateway'],
  },
  {
    kicker: 'Industry Experience',
    title: 'Java FSD Intern',
    lines: ['EduSkills Foundation (Jan 2026 – Mar 2026)', 'Full-stack engineering with React & Java in Agile development workflows'],
  },
  {
    kicker: 'Certifications',
    title: 'Verified Credentials',
    lines: ['NPTEL: Programming in Java', 'NPTEL: The joy of Computing using Python', 'Apna College: Full Stack Web Development'],
  },
  {
    kicker: 'Current Focus',
    title: 'Now Building',
    lines: ['Full Stack Web Architecture · Cloud Platforms · Clean Code'],
  },
];

export type ProfileId = 'vinay' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vinay',
    name: 'Vinay',
    blurb: 'The full series, in order',
    color: '#F5C518',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Background & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
