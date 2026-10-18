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
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-blue-600 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          A glimpse into my journey, core values, and dedication as a passionate fresher web developer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-blue-500/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                <img
                  src={heroImg}
                  alt="Developer graphic"
                  className="w-10 h-10 object-contain brightness-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Nowazis Ahmad Usama</h3>
                <p className="text-sm font-medium text-blue-600">Fresher Web Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  <span>Gazipur, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineBriefcase className="text-blue-600" /> Availability:
                </span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLaptopCode className="text-blue-600" /> Primary Focus:
                </span>
                <span className="font-semibold text-gray-800">React &amp; Modern Frontend</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineMail className="text-blue-600" /> Communication:
                </span>
                <span className="font-semibold text-gray-800">English &amp; Bengali</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 text-center">
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-blue-600">3+</span>
                <span className="text-[11px] text-gray-500 font-medium">Demo Projects</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-indigo-600">500+</span>
                <span className="text-[11px] text-gray-500 font-medium">Coding Hours</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-emerald-600">100%</span>
                <span className="text-[11px] text-gray-500 font-medium">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Turning complex design ideas into seamless, interactive web experiences.
            </h3>
            <p>
              I am an aspiring and self-driven <strong>Fresher Web Developer</strong> with a solid academic foundation in Computer Science and an intense passion for modern frontend technologies. My journey began with experimenting with basic HTML &amp; CSS, which quickly evolved into building dynamic, full-fledged Single Page Applications with <strong>React.js</strong> and <strong>Tailwind CSS</strong>.
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
                className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3"
              >
                <HiOutlineCheckCircle className="text-xl text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all duration-300"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
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
