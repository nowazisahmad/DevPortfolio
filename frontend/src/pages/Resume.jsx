import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200 font-sans print:bg-white print:text-gray-900 print:py-0 print:px-0 transition-colors duration-300">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200/80 dark:border-gray-800 p-8 sm:p-12 print:bg-white print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-200 dark:border-gray-800 print:border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 print:text-gray-900 bg-clip-text text-transparent">
                Nowazis Ahmad Usama
              </h1>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 print:text-blue-600 mt-1">
                Fresher Web Developer | Frontend &amp; React Developer
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 print:text-gray-500 mt-1">
                Passionate about building responsive, high-performance web applications with modern UI/UX.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 print:bg-emerald-50 print:text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for Junior / Entry-Level Roles
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-500 mt-1">Ready to join immediately</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 print:text-gray-600 pt-4 border-t border-gray-100 dark:border-gray-800 print:border-gray-100">
            <a
              href="mailto:1289usama@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <HiMail className="text-blue-600 dark:text-blue-400 print:text-blue-600 text-base shrink-0" />
              <span className="truncate">1289usama@gmail.com</span>
            </a>
            <a
              href="tel:+8801880480085"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <HiPhone className="text-blue-600 dark:text-blue-400 print:text-blue-600 text-base shrink-0" />
              <span>+880 1880480085</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 dark:text-blue-400 print:text-blue-600 text-base shrink-0" />
              <span>Gazipur, Bangladesh</span>
            </div>
            <a
              href="https://github.com/nowazisahmad/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaGithub className="text-gray-900 dark:text-gray-200 print:text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nowazis-ahmad-usama-4a7345427/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-blue-600 dark:text-blue-400 print:text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://dev-portfolio-ashy-eight.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaGlobe className="text-blue-600 dark:text-blue-400 print:text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700 leading-relaxed text-justify">
            Passionate, detail-oriented, and highly motivated <strong>Fresher Web Developer</strong> with strong proficiency in <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. Dedicated to writing clean, maintainable, and component-driven code to craft accessible, intuitive, and lightning-fast web applications. An agile learner and enthusiastic team player seeking an entry-level Junior Web Developer / Frontend Developer position to contribute to impactful software products while expanding full-stack capabilities.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-gray-50 rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-100">
              <span className="font-semibold text-gray-900 dark:text-white print:text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, HeroUI, DaisyUI, React Router, Context API.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-gray-50 rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-100">
              <span className="font-semibold text-gray-900 dark:text-white print:text-gray-900 block mb-1">
                Backend &amp; Database (Foundational):
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                RESTful APIs, Node.js (Basics), Express.js (Basics), Better Auth, Firebase Auth, MongoDB (CRUD).
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-gray-50 rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-100">
              <span className="font-semibold text-gray-900 dark:text-white print:text-gray-900 block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, npm, Turbopack, Chrome DevTools, Vercel, React Toastify.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-gray-50 rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-100">
              <span className="font-semibold text-gray-900 dark:text-white print:text-gray-900 block mb-1">
                Core Competencies &amp; Practices:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Component-Driven Architecture, UI/UX Principles, Cross-Browser Compatibility, Performance Optimization, Problem Solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1: Bazar-Dor */}
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white print:text-gray-900 flex items-center gap-2">
                  Bazar-Dor (বাজার দর) — Daily Commodity Price Tracker
                  <span className="text-xs font-normal text-blue-600 dark:text-blue-400 print:text-blue-600 font-mono bg-blue-50 dark:bg-blue-950/50 print:bg-blue-50 px-2 py-0.5 rounded">
                    Fullstack Web App
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-600 dark:text-blue-400 print:text-blue-600">
                  <a
                    href="https://bazar-dor-ashen.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/nowazisahmad/Bazar-Dor"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: Next.js (App Router), React, Tailwind CSS v4, HeroUI, Better Auth, REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-gray-700 space-y-1">
                <li>
                  Engineered a modern web platform providing real-time commodity prices across multiple daily food categories (Rice, Lentils, Oil, Vegetables, Fish, Meat, Eggs, Spices).
                </li>
                <li>
                  Built price trend tracking metrics comparing today’s rate against yesterday, last week, and last month with clear percentage changes and regional market breakdowns.
                </li>
                <li>
                  Integrated secure authentication using Better Auth and localized Bengali typography for seamless accessibility and responsive mobile experience.
                </li>
              </ul>
            </div>

            {/* Project 2: FitLog */}
            <div className="border-l-2 border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white print:text-gray-900 flex items-center gap-2">
                  FitLog — Workout Tracker &amp; Gym Companion
                  <span className="text-xs font-normal text-indigo-600 dark:text-indigo-400 print:text-indigo-600 font-mono bg-indigo-50 dark:bg-indigo-950/50 print:bg-indigo-50 px-2 py-0.5 rounded">
                    Fitness Web App
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 print:text-indigo-600">
                  <a
                    href="https://fit-log-eight-sepia.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/nowazisahmad/Fit-Log"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: Next.js (App Router), TypeScript, React, Tailwind CSS, DaisyUI, Context API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-gray-700 space-y-1">
                <li>
                  Created a sleek dark-themed gym companion featuring 12+ comprehensive lifts covering all major muscle groups with exercise durations, calorie estimations, and ratings.
                </li>
                <li>
                  Designed an interactive dual-tab manager ("Today's Plan" and "Saved Workouts") powered by React Context API for global state synchronization without page reloads.
                </li>
                <li>
                  Implemented dynamic client-side sorting by duration and calories burned alongside real-time toast notifications with React Toastify.
                </li>
              </ul>
            </div>

            {/* Project 3: DevStack */}
            <div className="border-l-2 border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white print:text-gray-900 flex items-center gap-2">
                  DevStack — Interactive Developer Tech Stack Builder
                  <span className="text-xs font-normal text-emerald-600 dark:text-emerald-400 print:text-emerald-600 font-mono bg-emerald-50 dark:bg-emerald-950/50 print:bg-emerald-50 px-2 py-0.5 rounded">
                    Developer Tool
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 print:text-emerald-600">
                  <a
                    href="https://dev-stack-gules-six.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/nowazisahmad/DevStack"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React, TypeScript, Tailwind CSS, Vite, React Icons, React Toastify
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-gray-700 space-y-1">
                <li>
                  Developed an interactive stack builder allowing developers to browse technology catalogs across frontend, backend, databases, and DevOps tooling.
                </li>
                <li>
                  Implemented dynamic stack configuration in a sticky sidebar with real-time add/remove capabilities, total stack size metrics, and toast notification alerts.
                </li>
                <li>
                  Enforced strict type safety across all components and tool models using TypeScript, paired with clean responsive utility styling in Tailwind CSS.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white print:text-gray-900">
                  B.Sc. in Mathematics
                </h3>
                <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 text-xs sm:text-sm">
                  Sreepur Govt. College — Gazipur, Dhaka, Bangladesh
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 print:text-blue-600">
                2025 – 2029 (Expected)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white print:text-gray-900">
                  Higher Secondary Certificate (HSC) – Science
                </h3>
                <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 text-xs sm:text-sm">
                  Pear Ali College — GPA: 4.33 / 5.00
                </p>
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 print:text-gray-500">
                2023 – 2024
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white print:text-gray-900">
                  Secondary School Certificate (SSC) – Science
                </h3>
                <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 text-xs sm:text-sm">
                  Hossainpur Adarsha High School — GPA: 4.94 / 5.00
                </p>
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 print:text-gray-500">
                2019 – 2023
              </span>
            </div>
          </div>
        </section>
        
        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-gray-900 uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white print:text-gray-900 block mb-1">Soft Skills:</span>
              <p>Problem Solving, Collaborative Teamwork, Fast Learner &amp; Adaptability, Time Management, Attention to Detail.</p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white print:text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
