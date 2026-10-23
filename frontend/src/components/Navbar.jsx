import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Scroll detection and top progress bar calculation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-white/80 dark:bg-[#08090d]/80 backdrop-blur-xl shadow-sm border-b border-black/[0.05] dark:border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group flex items-center gap-2.5"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono text-lg shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            N
          </span>
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-600 dark:from-white dark:via-gray-100 dark:to-gray-400 bg-clip-text text-transparent font-extrabold">
            Nowazis Ahmad Usama<span className="text-blue-600 dark:text-cyan-400"></span>
          </span>
        </Link>

        {/* Desktop Navigation Links (Linear-style pill bar) */}
        <div className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] backdrop-blur-md">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <a
                key={link.id}
                href={href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isLinkActive
                    ? "text-blue-600 dark:text-white bg-white dark:bg-white/[0.08] shadow-xs"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Right CTAs: Theme Toggle + Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="p-2.5 rounded-xl border border-gray-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.03] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/[0.08] hover:text-blue-600 dark:hover:text-cyan-400 shadow-xs hover:shadow transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            {theme === "light" ? (
              <HiMoon className="text-lg transition-transform duration-300 hover:-rotate-12" />
            ) : (
              <HiSun className="text-lg text-amber-400 transition-transform duration-300 hover:rotate-45" />
            )}
          </button>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <HiDocumentText className="text-base" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Actions: Theme Toggle + Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition"
          >
            {theme === "light" ? (
              <HiMoon className="text-xl" />
            ) : (
              <HiSun className="text-xl text-amber-400" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="text-2xl text-gray-800 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.06] transition focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-white/95 dark:bg-[#0c0e15]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/[0.08] shadow-2xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-6 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-lg text-sm font-semibold transition ${
                    isLinkActive
                      ? "text-blue-600 dark:text-cyan-400 bg-blue-50/80 dark:bg-white/[0.06]"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume Button */}
          <li className="pt-2 border-t border-gray-100 dark:border-white/[0.06]">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white py-3 rounded-xl font-bold text-sm shadow hover:opacity-95 transition"
            >
              <HiDocumentText className="text-lg" />
              View Full Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;