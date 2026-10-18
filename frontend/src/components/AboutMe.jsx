import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import heroImg from "../assets/hero.png";

const AboutMe = () => {
  const highlights = [
    {
      title: "Clean & Maintainable Code",
      desc: "Writing component-driven, reusable code adhering to modern best practices.",
    },
    {
      title: "Fast Learner & Adaptable",
      desc: "Quick to pick up new libraries, frameworks, and engineering workflows.",
    },
    {
      title: "Responsive & Pixel-Perfect",
      desc: "Obsessed with creating fluid layouts that work flawlessly on all devices.",
    },
    {
      title: "Problem Solver",
      desc: "Passionate about debugging, analytical thinking, and optimizing UX.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-950 transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          A glimpse into my journey, core values, and dedication as a passionate fresher web developer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                <img
                  src={heroImg}
                  alt="Developer graphic"
                  className="w-10 h-10 object-contain brightness-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nowazis Ahmad Usama</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Fresher Web Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400 dark:text-gray-500" />
                  <span>Gazipur, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/60">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <HiOutlineBriefcase className="text-blue-600 dark:text-blue-400" /> Availability:
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/60">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <FaLaptopCode className="text-blue-600 dark:text-blue-400" /> Primary Focus:
                </span>
                <span className="font-semibold text-gray-800 dark:text-white">React &amp; Modern Frontend</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/60">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <HiOutlineMail className="text-blue-600 dark:text-blue-400" /> Communication:
                </span>
                <span className="font-semibold text-gray-800 dark:text-white">English &amp; Bengali</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 text-center">
              <div className="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-transparent dark:border-gray-800">
                <span className="block text-2xl font-black text-blue-600 dark:text-blue-400">3+</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Demo Projects</span>
              </div>
              <div className="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-transparent dark:border-gray-800">
                <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">500+</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Coding Hours</span>
              </div>
              <div className="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-transparent dark:border-gray-800">
                <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug">
              Turning complex design ideas into seamless, interactive web experiences.
            </h3>
            <p>
              I am an aspiring and self-driven <strong className="text-gray-900 dark:text-white">Fresher Web Developer</strong> with a solid academic foundation in Mathematics and an intense passion for modern frontend technologies. My journey began with HTML, CSS, and modern JavaScript, which quickly evolved into building dynamic, full-fledged web applications with <strong className="text-gray-900 dark:text-white">React.js</strong>, <strong className="text-gray-900 dark:text-white">Next.js</strong>, and <strong className="text-gray-900 dark:text-white">Tailwind CSS</strong>.
            </p>
            <p>
              As a fresher, I bring raw enthusiasm, fresh perspective, and a relentless drive to master modern tools. I place high value on writing clean, accessible, and maintainable code. I am eager to contribute to collaborative engineering teams where I can learn from senior developers and deliver immediate value.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex items-start gap-3"
              >
                <HiOutlineCheckCircle className="text-xl text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <FaRocket className="text-sm" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
