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
    role: "Frontend Developer Trainee / Intern",
    company: "Software Development Firm / Tech Lab",
    location: "Dhaka, Bangladesh",
    period: "Jan 2024 – Jun 2024",
    type: "Internship / Practical Training",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Engineered reusable and accessible React components according to Figma design specifications.",
      "Integrated RESTful APIs, handled asynchronous state loading states, and reduced unnecessary re-renders.",
      "Adopted professional Git workflow (feature branching, clean commit messages, code review PRs).",
      "Collaborated in Agile sprints with team members to resolve UI bugs and enhance responsiveness.",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Git", "REST APIs"],
  },
  {
    role: "Independent & Freelance Web Developer",
    company: "Self-Employed / Client Work",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance & Projects",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    responsibilities: [
      "Designed and deployed responsive web interfaces for multiple clients and personal portfolio initiatives.",
      "Delivered pixel-perfect mobile-first designs with Tailwind CSS achieving top Lighthouse performance scores.",
      "Configured automated deployments and DNS hosting setups on Vercel and Netlify.",
      "Communicated directly with project stakeholders to gather requirements and iterate based on feedback.",
    ],
    technologies: ["React", "HTML5/CSS3", "JavaScript", "Tailwind CSS", "Vercel"],
  },
  {
    role: "Academic Project Lead & Developer",
    company: "University Software Lab",
    location: "Dhaka, Bangladesh",
    period: "2023 – 2024",
    type: "Academic & Team Project",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    responsibilities: [
      "Spearheaded the frontend architecture for a multi-page web portal as part of the academic capstone.",
      "Coordinated task delegation among 3 team members and conducted internal code walkthroughs.",
      "Implemented clean form validations, authentication flow, and local state persistence.",
    ],
    technologies: ["JavaScript", "Bootstrap 5", "Node.js Basics", "Database Systems"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Rapid Onboarding",
    desc: "Solid foundational knowledge in React 19, modern JavaScript, and Git ensures minimal ramp-up time.",
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
    desc: "Trained on the latest tools (Vite, Tailwind v4, Component-driven design) with zero outdated baggage.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 text-sm" />
          <span>Practical Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My practical internships, freelance endeavors, and collaborative project experience demonstrating hands-on readiness.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <HiOutlineCalendar className="text-blue-600" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <HiOutlineCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 mr-1">
                Tech:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me as a Fresher Callout Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Why Hire Me as a Fresher Developer?
          </h3>
          <p className="text-sm text-gray-500">
            What I bring to your engineering team from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-50/40 border border-blue-100/60">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
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
