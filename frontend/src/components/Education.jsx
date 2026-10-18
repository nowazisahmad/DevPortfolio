import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineSparkles,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCalculator } from "react-icons/fa";

const educationHistory = [
  {
    degree: "B.Sc. in Mathematics",
    institution: "Sreepur Govt. College",
    location: "Gazipur, Dhaka, Bangladesh",
    period: "2025 – 2029 (Expected)",
    grade: "Pursuing",
    description:
      "Deepening analytical reasoning, algorithms, abstract thinking, and mathematical foundations for computing and software engineering.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Pear Ali College",
    location: "Gazipur, Dhaka, Bangladesh",
    period: "2023 – 2024",
    grade: "GPA: 4.33 / 5.00",
    description:
      "Specialized in Physics, Chemistry, Higher Mathematics, and ICT, maintaining exceptional academic performance and analytical discipline.",
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Hossainpur Adarsha High School",
    location: "Gazipur, Dhaka, Bangladesh",
    period: "2019 – 2023",
    grade: "GPA: 4.94 / 5.00",
    description:
      "Built a strong foundation in core sciences, computer fundamentals, and mathematics with near-perfect scholastic standing.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Education</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          My educational journey and academic milestones that developed my analytical, logical, and computational problem-solving mindset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500/60 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400 dark:text-gray-500" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400 dark:text-gray-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Highlights & Foundation (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <FaCalculator className="text-blue-600 dark:text-blue-400" />
              <span>Mathematical Advantage</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              My background in university-level Mathematics empowers me with strong problem-solving abilities:
            </p>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2.5">
                <HiOutlineBadgeCheck className="text-blue-600 dark:text-blue-400 text-lg shrink-0 mt-0.5" />
                <span>Rigorous algorithmic analysis and structured logical thinking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <HiOutlineBadgeCheck className="text-blue-600 dark:text-blue-400 text-lg shrink-0 mt-0.5" />
                <span>Fast conceptualization of state trees, graph models, and coordinate geometry</span>
              </li>
              <li className="flex items-start gap-2.5">
                <HiOutlineBadgeCheck className="text-blue-600 dark:text-blue-400 text-lg shrink-0 mt-0.5" />
                <span>High attention to detail, precision, and clean bug reproduction workflows</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <HiOutlineSparkles />
                <span>Ready to apply logic in frontend engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
