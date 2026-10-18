import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer Trainee / Practical Projects",
    company: "Personal & Open Source Development",
    location: "Dhaka, Bangladesh",
    period: "2024 – Present",
    type: "Practical Engineering",
    badgeColor: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    responsibilities: [
      "Engineered full-stack and frontend React/Next.js applications (Bazar-Dor, FitLog, DevStack) with clean component architecture.",
      "Integrated RESTful APIs, handled asynchronous state transitions, and reduced unnecessary re-renders with React Context.",
      "Applied modern Tailwind CSS and UI component systems (HeroUI, DaisyUI) to build pixel-perfect, responsive mobile interfaces.",
      "Followed strict Git workflows including feature branching, semantic commits, and automated deployments on Vercel.",
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    role: "Independent Web Developer & Creator",
    company: "Self-Employed / Client Projects",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance & Projects",
    badgeColor: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    responsibilities: [
      "Designed and deployed responsive web interfaces with focus on Lighthouse speed, SEO, and accessible markup.",
      "Built custom web tools featuring local storage persistence, price tracking trends, and workout routine managers.",
      "Configured automated deployments, environment variables, and custom DNS hosting on Vercel.",
      "Iterated rapidly on user feedback to refine usability and interface ergonomics.",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Vercel", "HTML5/CSS3"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Rapid Onboarding",
    desc: "Solid foundational knowledge in React 19, Next.js, modern JavaScript, and Git ensures minimal ramp-up time.",
  },
  {
    icon: HiOutlineSparkles,
    title: "High Energy & Drive",
    desc: "Passionate about writing clean code, actively taking feedback, and solving complex problems with enthusiasm.",
  },
  {
    icon: FaHandsHelping,
    title: "Team Player",
    desc: "Thrives in collaborative environments with respectful communication and strong empathy for peers.",
  },
  {
    icon: FaAward,
    title: "Modern Best Practices",
    desc: "Trained on the latest tools (Vite, Next.js App Router, Tailwind v4, Component-driven design) with zero outdated baggage.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-950 transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Practical Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          My practical development endeavors, open-source projects, and collaborative initiatives demonstrating hands-on readiness.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500/60 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 dark:text-gray-400 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-300">
                  <HiOutlineCalendar className="text-blue-600 dark:text-blue-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400 dark:text-gray-500" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <HiOutlineCheckCircle className="text-blue-600 dark:text-blue-400 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mr-1">
                Tech:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me as a Fresher Callout Card */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-blue-200/80 dark:border-gray-800 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Why Hire Me as a Fresher Developer?
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            What I bring to your engineering team from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-50/40 dark:bg-gray-800/50 border border-blue-100/60 dark:border-gray-700/60">
                <div className="w-10 h-10 rounded-lg bg-blue-600 dark:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
