import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationHistory = [
  {
    degree: "B.Sc. in Mathematics",
    institution: "Sreepur Govt.  College",
    location: "Gazipur, Dhaka, Bangladesh",
    period: "2025 – 2029 (Expected)",
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Pear Ali College",
    location: "Gazipur, Dhaka, Bangladesh",
    period: "2023 – 2024",
    grade: "GPA: 4.33 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Hossainpur Adarsha High School",
    location: "Gazipur, Dhaka, Bangladesh",
    period: "2019 – 2023",
    grade: "GPA: 4.94 / 5.00",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Education</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My educational journey and professional credentials that built my foundational computer science and engineering mindset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
