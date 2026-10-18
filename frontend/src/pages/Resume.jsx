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
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
                Nowazis Ahmad Usama
              </h1>
              <p className="text-lg font-semibold text-blue-600 mt-1">
                Fresher Web Developer | Frontend & React Developer
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Passionate about building responsive, high-performance web applications with modern UI/UX.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for Junior / Entry-Level Roles
              </span>
              <span className="text-xs text-gray-500 mt-1">Ready to join immediately</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
            <a
              href="mailto:1289usama@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiMail className="text-blue-600 text-base shrink-0" />
              <span className="truncate">1289usama@gmail.com</span>
            </a>
            <a
              href="tel:+8801880480085"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiPhone className="text-blue-600 text-base shrink-0" />
              <span>+880 1880480085</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 text-base shrink-0" />
              <span>Gazipur, Dhaka, Bangladesh</span>
            </div>
            <a
              href="https://github.com/nowazisahmad/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nowazis-ahmad-usama-4a7345427/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://nowazisahmad.vercel.app/"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGlobe className="text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Passionate, detail-oriented, and highly motivated <strong>Fresher Web Developer</strong> with strong foundational proficiency in <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and modern component-driven front-end architectures. Dedicated to writing clean, maintainable, and accessible code to craft responsive and intuitive web interfaces. An agile learner and enthusiastic team player seeking an entry-level Junior Web Developer / Frontend Developer position to contribute to impactful software products while expanding full-stack skills.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React Router, Context API, Responsive Design.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Backend &amp; Database (Foundational):
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Node.js (Basics), Express.js (Basics), RESTful APIs, JSON, MongoDB (CRUD), Firebase Authentication.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, npm, Chrome DevTools, Vercel, Netlify.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Core Competencies &amp; Practices:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Component-Driven Architecture, UI/UX Principles, Cross-Browser Compatibility, Performance Optimization, Problem Solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Developer Portfolio &amp; Interactive Showcase
                  <span className="text-xs font-normal text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded">
                    Personal Project
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-600">
                  <a href={"https://bazar-dor-ashen.vercel.app/"} className="hover:underline flex items-center gap-1">
                    Live View <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/nowazisahmad/Bazar-Dor" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, React Router, Vite
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Designed and developed a fully responsive web application with active section scroll-spy and responsive mobile navigation.
                </li>
                <li>
                  Built dynamic routing for individual project deep-dives and an ATS-friendly printable resume view with zero dependency bloat.
                </li>
                <li>
                  Achieved high lighthouse performance scores through modern utility-first CSS and optimized asset bundling.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  TechGear - Modern E-Commerce Platform
                  <span className="text-xs font-normal text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">
                    Frontend &amp; State Project
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600">
                  <a href={"https://fit-log-eight-sepia.vercel.app/"} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/nowazisahmad/Fit-Log/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, Context API, REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Architected a complete online catalog with live search, dynamic category filtering, and real-time price slider.
                </li>
                <li>
                  Engineered global cart state management with React Context and localStorage persistence for persistent shopping sessions.
                </li>
                <li>
                  Designed a smooth slide-over cart drawer with instant quantity calculations and simulated checkout flow.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  TaskFlow - Agile Kanban Productivity App
                  <span className="text-xs font-normal text-emerald-600 font-mono bg-emerald-50 px-2 py-0.5 rounded">
                    Web Application
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
                  <a href={"https://dev-stack-gules-six.vercel.app/"} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/nowazisahmad/DevStack/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, JavaScript (ES6+), LocalStorage
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Created an interactive task management board with multi-column status tracking (Backlog, In Progress, Completed).
                </li>
                <li>
                  Implemented custom priority flags, title/description validation, and instant search filter.
                </li>
                <li>
                  Employed clean modular component structure with reusable modal and card subcomponents.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900">
                  B.Sc. in Mathematics
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Sreepur Govt. College
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Soft Skills:</span>
              <p>Problem Solving, Collaborative Teamwork, Fast Learner &amp; Adaptability, Time Management, Attention to Detail.</p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
