import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-blue-600 text-sm" />
          <span>My Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Explore real-world web applications I built to solve practical problems, demonstrating clean code, modern UI/UX design, and responsive frontend architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 border-b border-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-xs">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 text-gray-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  <span>Details &amp; Tech</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Live Demo"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      <span>Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Github Note */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Want to see more code and experiments? Check out my{" "}
          <a
            href="https://github.com/nowazisahmad/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
