import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { HiOutlineCode, HiOutlineServer, HiOutlineTerminal } from "react-icons/hi";
import SpotlightCard from "./SpotlightCard";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend & DB", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "Next.js (App Router)",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-white/[0.06] border-gray-200 dark:border-white/[0.08]",
    level: "Proficient",
    description: "App Router, Server Components, SSR/SSG, Turbopack, Dynamic Routes",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-100 dark:border-cyan-900/50",
    level: "Proficient",
    description: "Hooks, React Router, Context API, Component Lifecycle",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    level: "Proficient",
    description: "Interfaces, Type Safety, Generics, Props & State Typing",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-100 dark:border-yellow-900/50",
    level: "Proficient",
    description: "Async/Await, DOM manipulation, Array methods, ES6 Modules",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900/50",
    level: "Proficient",
    description: "Utility classes, Responsive design, Dark mode, Custom themes",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900/50",
    level: "Advanced",
    description: "Semantic elements, SEO optimization, Forms & Accessibility",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    level: "Advanced",
    description: "Flexbox, CSS Grid, Transitions, Keyframe Animations",
  },

  // Backend & DB
  {
    name: "RESTful APIs",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-blue-600 dark:text-cyan-400",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    level: "Proficient",
    description: "API Fetching, Error Handling, Async State, JSON Data",
  },
  {
    name: "Node.js (Basics)",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50",
    level: "Familiar",
    description: "Server architecture, Event loop, NPM packages, Modules",
  },
  {
    name: "MongoDB (CRUD)",
    category: "backend",
    icon: SiMongodb,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50",
    level: "Familiar",
    description: "Collections, Documents, Query filters, Basic Schema",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900/50",
    level: "Proficient",
    description: "Branching, Pull Requests, Merge conflicts, Versioning",
  },
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50",
    level: "Proficient",
    description: "Fast HMR, Bundling, Config plugins, Build optimization",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-white/[0.06] border-gray-200 dark:border-white/[0.08]",
    level: "Proficient",
    description: "CI/CD auto-deployments, Custom domains, Environment variables",
  },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50",
    level: "Proficient",
    description: "DOM Inspection, Network tab, Console debugging, Performance",
  },
  {
    name: "npm & Ecosystem",
    category: "tools",
    icon: FaNpm,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900/50",
    level: "Proficient",
    description: "Package management, Scripts, Dependency resolution",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto transition-colors duration-300 relative">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineCode className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          The technologies, libraries, and developer tools I leverage to build fast, responsive, and delightful web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 scale-105"
                : "bg-white dark:bg-[#0c0e15]/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/[0.08] hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-white/[0.04]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid with Spotlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <SpotlightCard
              key={skill.name}
              className="bg-white dark:bg-[#0c0e15]/80 backdrop-blur-xl rounded-2xl border border-gray-200/80 dark:border-white/[0.08] p-5 shadow-xs hover:shadow-xl hover:border-blue-400 dark:hover:border-cyan-400/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80"
                        : skill.level === "Proficient"
                        ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/80"
                        : "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/80"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Category Tag */}
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/[0.06] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium capitalize">
                  {skill.category}
                </span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
