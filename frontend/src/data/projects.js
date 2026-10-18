import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio & Showcase",
    image: project1,
    category: "Frontend Web Application",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Router",
      "Vite"
    ],
    description:
      "A modern, high-performance personal portfolio built for showcasing frontend engineering skills, interactive projects, and a responsive resume viewer. Features smooth section navigation, responsive mobile menu, dynamic routing, and ATS-friendly printable resume.",
    live: "https://bazar-dor-ashen.vercel.app/",
    github: "https://github.com/nowazisahmad/Bazar-Dor",
    challenges: [
      "Building a smooth active-section scroll spy with route-aware navigation",
      "Crafting an ATS-compatible, print-optimized resume stylesheet in React",
      "Ensuring fluid responsiveness across ultra-wide monitors down to small mobile viewports"
    ],
    future: [
      "Dark / Light theme mode toggle with localStorage persistence",
      "Interactive contact form integration via EmailJS / Web3Forms",
      "Markdown-powered tech blog section with syntax highlighting"
    ],
  },
  {
    id: 2,
    title: "TechGear - Modern Tech Store",
    image: project2,
    category: "E-Commerce Web App",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Context API",
      "REST API"
    ],
    description:
      "A responsive, full-featured electronics and tech gadgets web application. Includes instant product category filtering, price range slider, real-time shopping cart drawer with quantity adjustments, and simulated checkout flow.",
    live: "https://fit-log-eight-sepia.vercel.app/",
    github: "https://github.com/nowazisahmad/Fit-Log",
    challenges: [
      "Global cart state management with React Context without unnecessary re-renders",
      "Smooth slide-over modal drawer implementation for cart and mobile filters",
      "Instant multi-criteria client-side search and category filtering"
    ],
    future: [
      "Integration with Stripe payment gateway test API",
      "User authentication and order history dashboard",
      "Wishlist system with localStorage persistence"
    ],
  },
  {
    id: 3,
    title: "TaskFlow - Agile Kanban Board",
    image: project3,
    category: "Productivity & SaaS",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "LocalStorage"
    ],
    description:
      "An intuitive task management and productivity dashboard inspired by Trello and Jira. Supports custom task creation, priority color-coding, multi-stage workflow columns (Backlog, In Progress, Completed), and search indexing.",
    live: "https://dev-stack-gules-six.vercel.app/",
    github: "https://github.com/nowazisahmad/DevStack",
    challenges: [
      "Seamless task state transitions across columns with proper data immutability",
      "Persistent state synchronization with browser LocalStorage",
      "Clean UI component design adhering to accessibility standards"
    ],
    future: [
      "Drag and drop reordering using @dnd-kit/core",
      "Firebase Firestore integration for multi-device real-time sync",
      "Subtasks checklist and due-date notification system"
    ],
  },
];

export default projects;
