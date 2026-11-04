# Vinay S. Bhadane — Developer Portfolio

A modern, highly interactive developer portfolio featuring a custom 2D cursor-tracking illustrated developer character, continuous snowfall background, dark/light theme switching, and authentic resume data for **Vinay S. Bhadane**.

Built with **Next.js 15 App Router**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Motion for React**.

---

## 🚀 Key Features

- **Interactive 2D Character Hero**: Custom line-art developer character that follows the visitor's mouse/touch movement with 2.5D head rotation, eye tracking, eyelid blinking, and torso physics.
- **Dynamic Theme-Reactive Outfit**: Seamless switching between Dark Mode (crisp white shirt with dark stripes on `#08090C` background) and Light Mode (deep slate-navy shirt with white stripes on `#FFFFFF` background).
- **Continuous Global Falling Snow**: Persistent non-blocking HTML5 canvas snow particles floating continuously across all sections with theme-adaptive flake shading.
- **Continuous Skills Showcase**: Dual continuous infinite marquee rails with verified SVG logos, category filter dock, and interactive bento cards.
- **Mobile Responsive**: Custom mobile stacked layout matching clean editorial design standards.
- **Zero 3D Bloat**: Ultra-fast load times with native scrolling and lightweight CSS & Motion animations.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Interactions**: Motion for React (`motion/react`)
- **Icons**: Lucide React & Authentic SVG Brand Icons
- **Fonts**: Space Grotesk, DM Sans, JetBrains Mono

---

## 📋 Sections & Content

1. **Section 01 — Hero**: 2D Illustrated developer character, cursor-tracking eyes & head rotation, action pill buttons, greeting, and core focus narrative.
2. **Section 02 — About Me**: Editorial philosophy, live stat chips (`1st / 96 Teams`, `8.76 CGPA`, `Full Stack Web Dev`), and 4 core engineering pillars.
3. **Section 03 — Technical Skills**: Dual continuous infinite marquee rails, category filter dock (`Languages`, `Frontend`, `Backend & DB`, `Cloud & Tools`, `CS Concepts`), and verified technology cards.
4. **Section 04 — Professional Experience**: Career conduit timeline with pulsating radar node and environment tags.
5. **Section 05 — Featured Projects**: Deep dives into **Abhyasmitra** (1,000+ users), **VoteChainX** (State Hackathon 1st Place), and **Kumbhprasad** (Razorpay integration).
6. **Section 06 — Education**: Academic credentials from MET's Institute of Engineering.
7. **Section 07 — Recognition**: Milestone cards celebrating state hackathon victory, problem-solving rank, and certifications.
8. **Section 08 — Contact**: Direct dispatch terminal with one-click copy buttons for email and phone, plus LinkedIn and GitHub connection pills.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Create production build
npm run build

# Start production server
npm run start
```

```
d:\Portfolio Webste/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global fonts, metadata & SEO
│   │   ├── page.tsx              # Clean assembly of all 8 sections
│   │   ├── globals.css           # Minimal dark theme & glass styling
│   │   ├── robots.ts             # Robots configuration
│   │   └── sitemap.ts            # Dynamic sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Fixed navigation with active anchors
│   │   │   ├── Footer.tsx        # Minimal footer & back-to-top button
│   │   │   └── SocialIcons.tsx   # Verified vector social icons
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Section 01
│   │   │   ├── About.tsx         # Section 02
│   │   │   ├── Skills.tsx        # Section 03
│   │   │   ├── Experience.tsx    # Section 04
│   │   │   ├── Projects.tsx      # Section 05
│   │   │   ├── Education.tsx     # Section 06
│   │   │   ├── Achievements.tsx  # Section 07
│   │   │   └── Contact.tsx       # Section 08
│   │   └── ui/
│   │       ├── Button.tsx        # Reusable button with variants & sizes
│   │       ├── SectionHeading.tsx# Reusable editorial section heading
│   │       ├── SkillLogo.tsx     # Authentic SVGs for all resume technologies
│   │       └── ProjectCard.tsx   # Asymmetric editorial project card
│   ├── data/
│   │   ├── personal.ts           # Centralized personal info (Single source of truth)
│   │   ├── skills.ts             # Skills categories & technologies
│   │   ├── projects.ts           # Featured projects data
│   │   ├── experience.ts         # Internship & work history
│   │   ├── education.ts          # Academic degrees & scores
│   │   └── achievements.ts       # Hackathon & exam milestones
│   ├── lib/
│   │   └── utils.ts              # Tailwind clsx utility
│   └── types/
│       └── portfolio.ts          # Strictly typed TypeScript interfaces
├── public/
│   └── resume/
│       └── Vinay_Bhadane_Resume.pdf # Actual resume PDF
└── README.md
```

---

## Running Locally

```bash
# Development
npm run dev

# Production Build
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio.
