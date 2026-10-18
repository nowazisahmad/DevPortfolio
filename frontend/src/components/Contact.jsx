import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("1289usama@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    // Bot detection honeypot
    if (formData.botcheck) {
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Web3Forms public access key (configured via .env or Web3Forms default for 1289usama@gmail.com)
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      "YOUR_ACCESS_KEY_HERE"; // User can replace with their Web3Forms key

    try {
      // If user has not yet set up their access key, provide fallback to mailto
      if (accessKey === "YOUR_ACCESS_KEY_HERE") {
        // Open default mail client directly addressed to 1289usama@gmail.com
        const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
        const mailtoBody = encodeURIComponent(`Hi Nowazis,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
        window.location.href = `mailto:1289usama@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        setStatus({
          submitting: false,
          submitted: true,
          error: null,
        });
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: formData.name,
          to_email: "1289usama@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });

        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, submitted: false }));
        }, 8000);
      } else {
        throw new Error(result.message || "Failed to deliver message via Web3Forms.");
      }
    } catch (err) {
      // Graceful fallback: allow direct sending via email client
      setStatus({
        submitting: false,
        submitted: false,
        error:
          "Unable to send automatically via form service. Please click 'Open in Mail' below or email 1289usama@gmail.com directly.",
      });
    }
  };

  const mailtoHref = `mailto:1289usama@gmail.com?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
  )}&body=${encodeURIComponent(
    formData.message || "Hi Nowazis, I came across your portfolio..."
  )}`;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto transition-colors duration-300 relative">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info Cards & Quick Copy (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <SpotlightCard className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I am actively looking for full-time junior frontend or full-stack opportunities and am available to join immediately.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {/* Email with Quick Copy Button */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/60 flex items-center justify-between gap-3 group">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <HiOutlineMail className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:1289usama@gmail.com"
                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      1289usama@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <HiOutlineCheck className="text-emerald-500 text-sm" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineClipboardCopy className="text-sm" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
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
          </SpotlightCard>
        </div>

        {/* Right Column: Interactive Working Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <SpotlightCard className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  Delivered straight to Nowazis's inbox (<span className="text-blue-600 dark:text-blue-400 font-medium">1289usama@gmail.com</span>).
                </p>
              </div>

              <a
                href={mailtoHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
              >
                <span>Or open email app &rarr;</span>
              </a>
            </div>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start gap-3 animate-fade-in">
                <HiOutlineCheckCircle className="text-2xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5 leading-relaxed">
                    Thank you for reaching out! Your message was delivered to <strong>1289usama@gmail.com</strong>. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message with Mailto Fallback */}
            {status.error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm space-y-2">
                <p>{status.error}</p>
                <div>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-800 dark:text-rose-200 underline hover:no-underline"
                  >
                    Click here to send message via your email app &rarr;
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field for bot protection */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

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
                    placeholder="e.g. Alex Johnson"
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
                    placeholder="e.g. alex@company.com"
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
                  placeholder="e.g. Junior Frontend Developer Opening / Freelance Project"
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
                  placeholder="Hello Nowazis! We saw your projects (Bazar-Dor, FitLog) and would love to discuss an opportunity..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition resize-none"
                ></textarea>
              </div>

              {/* Submit & Secondary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>

                <a
                  href={mailtoHref}
                  className="text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Or click to open in mail app
                </a>
              </div>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
