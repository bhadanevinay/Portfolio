import { useState } from 'react';

export const SKILL_ICONS: Record<string, string> = {
  Java: '/assets/skills/java.svg',
  JavaScript: '/assets/skills/javascript.svg',
  TypeScript: '/assets/skills/typescript.svg',
  Python: '/assets/skills/python.svg',
  'C / C++': '/assets/skills/cplusplus.svg',
  'Next.js': '/assets/skills/nextjs.svg',
  'React.js': '/assets/skills/react.svg',
  'Tailwind CSS': '/assets/skills/tailwindcss.svg',
  'HTML5 / CSS3': '/assets/skills/html5.svg',
  'Node.js': '/assets/skills/nodejs.svg',
  'Express.js': '/assets/skills/express.svg',
  Firebase: '/assets/skills/firebase.svg',
  'REST APIs': '/assets/skills/rest-api.svg',
  Vercel: '/assets/skills/vercel.svg',
  MySQL: '/assets/skills/mysql.svg',
  Firestore: '/assets/skills/firestore.svg',
  MongoDB: '/assets/skills/mongodb.svg',
  DSA: '/assets/skills/dsa.svg',
  OOP: '/assets/skills/oop.svg',
  DBMS: '/assets/skills/dbms.svg',
  OS: '/assets/skills/os.svg',
  CN: '/assets/skills/cn.svg',
  Git: '/assets/skills/git.svg',
  GitHub: '/assets/skills/github.svg',
  'VS Code': '/assets/skills/vscode.svg',
  Postman: '/assets/skills/postman.svg',
  'Razorpay API': '/assets/skills/razorpay.svg',
};

export default function SkillLogo({
  name,
  className = 'h-7 w-7',
}: {
  name: string;
  className?: string;
}) {
  const icon = SKILL_ICONS[name];
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    const initial = name.slice(0, 2).toUpperCase();
    return (
      <span className="font-display text-xl font-bold tracking-wider text-bone" aria-hidden>
        {initial}
      </span>
    );
  }

  return (
    <img
      src={icon}
      alt={`${name} icon`}
      className={`${className} object-contain transition-transform duration-300 drop-shadow-sm`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

