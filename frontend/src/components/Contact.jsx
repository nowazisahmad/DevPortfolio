import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Have an entry-level opening, internship, freelance project, or simply want to chat about tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              I am actively looking for full-time junior frontend or full-stack opportunities and am available to join immediately.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href="mailto:1289usama@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50/70 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/60 hover:border-blue-200 dark:hover:border-blue-500/50 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    1289usama@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801880480085"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 hover:bg-blue-50/70 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/60 hover:border-blue-200 dark:hover:border-blue-500/50 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    +880 1880480085
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/60">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Gazipur, Dhaka, Bangladesh (Remote / On-site)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/nowazisahmad/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nowazis-ahmad-usama-4a7345427/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://x.com/NowazisAhm03zb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter Profile"
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-sky-500 hover:text-white flex items-center justify-center text-gray-700 dark:text-gray-300 transition"
                >
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-10 shadow-xs">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello! We are looking for a Fresher / Junior Frontend Developer to join our team..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
