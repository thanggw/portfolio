import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Award,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Facebook,
  BookOpen,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";
import {
  FaCode,
  FaDatabase,
  FaClipboardList,
  FaComments,
  FaTools,
  FaServer,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiReactquery,
  SiVite,
  SiFramer,
  SiAntdesign,
  SiReacthookform,
  SiZod,
  SiShopify,
  SiSpringboot,
  SiNestjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiLinux,
  SiJira,
  SiFigma,
} from "react-icons/si";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useScroll,
  useSpring,
} from "framer-motion";
import web1 from "/images/web1.png";
import mcceImage from "/images/mcce.png";
import veloImage from "/images/velo.png";
import candidateImage from "/images/candidate.png";
import pulseboardImage from "/images/pulseboard.png";
import certificateImg from "/images/certificate.png";
import avatar2 from "/images/avatar3.jpg";
import avatar from "/images/avatar2.png";
import Intro from "./components/Intro";

const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];

// Technologies used in the CV and the GitHub projects, with brand colors
const tech = {
  react: { name: "React", icon: SiReact, color: "#61DAFB" },
  next: { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  vue: { name: "Vue 3", icon: SiVuedotjs, color: "#42B883" },
  ts: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  js: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  html: { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  css: { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  sass: { name: "Sass / SCSS", icon: SiSass, color: "#CC6699" },
  redux: { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  query: { name: "React Query", icon: SiReactquery, color: "#FF4154" },
  zustand: { name: "Zustand", color: "#F5A524" },
  pinia: { name: "Pinia", color: "#FFD859" },
  vite: { name: "Vite", icon: SiVite, color: "#646CFF" },
  framer: { name: "Framer Motion", icon: SiFramer, color: "#FF4D9D" },
  antd: { name: "Ant Design", icon: SiAntdesign, color: "#1677FF" },
  rhf: { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
  zod: { name: "Zod", icon: SiZod, color: "#3E67B1" },
  shopify: { name: "Shopify Liquid", icon: SiShopify, color: "#7AB55C" },
  spring: { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  nest: { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  node: { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  java: { name: "Java", icon: SiOpenjdk, color: "#F89820" },
  postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  mysql: { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  mongo: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  redis: { name: "Redis", icon: SiRedis, color: "#FF4438" },
  prisma: { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
  supabase: { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  git: { name: "Git", icon: SiGit, color: "#F05032" },
  github: { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  vercel: { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  linux: { name: "Linux", icon: SiLinux, color: "#FCC624" },
  jira: { name: "Jira", icon: SiJira, color: "#2684FF" },
  figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
};

const frontendStack = [
  "react", "next", "vue", "ts", "js", "html", "css", "tailwind", "sass",
  "redux", "query", "zustand", "pinia", "rhf", "zod", "antd", "framer", "shopify",
].map((key) => tech[key]);

const marqueeRows = [
  ["react", "next", "vue", "ts", "tailwind", "redux", "query", "sass", "vite", "framer", "html", "css", "js", "antd"],
  ["spring", "nest", "node", "java", "postgres", "mysql", "mongo", "redis", "prisma", "supabase", "docker", "git", "postman", "vercel", "linux", "figma"],
].map((row) => row.map((key) => tech[key]));

const TechIcon = ({ item, size = 20 }) =>
  item.icon ? (
    <item.icon size={size} style={{ color: item.color }} aria-hidden="true" />
  ) : (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded font-bold text-slate-900"
      style={{ background: item.color, width: size, height: size, fontSize: size * 0.6 }}
    >
      {item.name[0]}
    </span>
  );

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const heroWords = ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS"];

const heroStats = [
  { value: "1+", label: "Years of experience" },
  { value: "2", label: "Companies" },
  { value: "4", label: "Live projects" },
];

const heroBadges = [
  { item: tech.react, position: "-top-2 -left-4 sm:-left-12" },
  { item: tech.vue, position: "top-12 -right-6 sm:-right-16" },
  { item: tech.ts, position: "bottom-14 -left-8 sm:-left-20" },
  { item: tech.next, position: "-bottom-3 right-2 sm:-right-4" },
];

const aboutFacts = [
  { icon: MapPin, label: "Location", value: "Ha Dong, Hanoi" },
  { icon: Briefcase, label: "Experience", value: "1+ year at Melisoft & Ecombe" },
  { icon: GraduationCap, label: "Education", value: "B.IT, Hanoi University (11/2026)" },
  { icon: Globe, label: "English", value: "B2 (Hanu Test)" },
  { icon: Code, label: "Focus", value: "Frontend & fullstack web apps" },
  { icon: Mail, label: "Email", value: "thangvuvan0611@gmail.com" },
];

// Cycles through words with a slide-up transition
const RotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(timer);
  }, [words.length]);
  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="font-semibold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const TechChip = ({ item }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/60 text-sm text-gray-200 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-0.5">
    <TechIcon item={item} size={16} />
    {item.name}
  </span>
);

// Fade-and-rise when an element scrolls into view (runs once)
const reveal = (delay = 0, from = { y: 40 }) => ({
  initial: { opacity: 0, ...from },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SectionTitle = ({ children, align = "center" }) => (
  <motion.div
    {...reveal()}
    className={`mb-16 ${align === "left" ? "text-center md:text-left" : "text-center"}`}
  >
    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {children}
    </h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto ${
        align === "left" ? "md:mx-0 origin-left" : ""
      }`}
    />
  </motion.div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (formStatus && !formStatus.includes("Sending...")) {
      const timer = setTimeout(() => setFormStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  // Highlight the nav item of the section currently in view
  useEffect(() => {
    if (showIntro) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [showIntro]);

  // What the frontend work in the projects and jobs actually covered
  const frontendHighlights = [
    "Responsive, mobile-first layouts with Tailwind CSS and SCSS modules",
    "Reusable component libraries in React and Vue 3 (Composition API)",
    "State management with Redux Toolkit, Zustand and Pinia",
    "Server state, caching and pagination with React Query",
    "Drag-and-drop Kanban board (Velo)",
    "Real-time collaborative editor UI over WebSocket (McCE)",
    "Analytics charts, sortable and filterable data tables (PulseBoard)",
    "Validated forms with React Hook Form and Zod",
    "Route guards and permission-based UI for role-based access",
    "Shopify theme customization with Liquid (Ecombe)",
  ];

  const skillCategories = [
    {
      name: "Back-End",
      icon: FaServer,
      description:
        "REST APIs, JWT access and refresh tokens, WebSocket/STOMP real-time features.",
      stack: ["spring", "nest", "node", "java"],
      highlights: [
        "JWT auth with role guards (Velo)",
        "Real-time rooms over WebSocket/STOMP (McCE)",
        "Code execution via Docker and Judge0 (McCE)",
        "VNPay payment and support chat (E-commerce)",
      ],
    },
    {
      name: "Database",
      icon: FaDatabase,
      description: "Relational and document data, caching and ORM.",
      stack: ["postgres", "mysql", "mongo", "redis", "prisma", "supabase"],
      highlights: [
        "Schema and migrations with Prisma (Velo)",
        "Row-Level Security policies (Candidate Mgmt)",
        "Redis-backed room state (McCE)",
      ],
    },
    {
      name: "Tools & Workflow",
      icon: FaTools,
      description: "Version control, containers, API testing and deployment.",
      stack: ["git", "github", "docker", "postman", "vercel", "linux", "jira", "figma"],
    },
    {
      name: "Business Analysis & Testing",
      icon: FaClipboardList,
      description:
        "Requirements analysis, SRS and BRD documents, UML and BPMN diagrams. Writing test cases for unit, integration and UAT testing.",
      tags: ["Requirements analysis", "SRS / BRD", "UML", "BPMN", "Test cases", "UAT"],
    },
    {
      name: "Soft Skills",
      icon: FaComments,
      description:
        "Communication, teamwork, time management and clear presentation, built by working with Product, Design, BA and QA teams.",
      tags: ["Communication", "Teamwork", "Time management", "Presentation", "Self-learning"],
    },
  ];

  const projects = [
    {
      title: "McCE - Collaborative Cloud Code Editor",
      description:
        "Browser-based platform where multiple users edit and run code together in real time. Room-based presence and live sync over WebSocket/STOMP, a multi-file workspace (Java, Python, C++, JavaScript), room state persisted in Redis, and sandboxed execution via Docker or the Judge0 API.",
      image: mcceImage,
      technologies: ["Spring Boot", "Next.js", "WebSocket", "Redis", "Docker"],
      github: "https://github.com/thanggw/MccE",
      demo: "https://mcc-e.vercel.app",
    },
    {
      title: "Velo - Agile Project Management",
      description:
        "Agile/Scrum task management app with a drag-and-drop Kanban board, project and member management, an admin dashboard, and role-based access (Admin, Manager, Member) enforced by both route guards and API guards. Auth uses JWT access and refresh tokens.",
      image: veloImage,
      technologies: ["Vue 3", "Pinia", "NestJS", "PostgreSQL", "Prisma"],
      github: "https://github.com/thanggw/velo",
      demo: "https://velo-nu-two.vercel.app",
    },
    {
      title: "Candidate Management System",
      description:
        "Serverless HR app for managing candidate profiles. Row-Level Security isolates each HR user's data, Realtime keeps lists in sync across clients, Edge Functions handle validation and analytics, and resumes are stored securely. Includes full-text search and cursor-based pagination.",
      image: candidateImage,
      technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "SCSS"],
      github: "https://github.com/thanggw/candidate-management",
      demo: "https://candidate-management-kappa.vercel.app",
    },
    {
      title: "PulseBoard - SaaS Admin Dashboard",
      description:
        "SaaS admin dashboard with KPI cards and analytics charts, customer CRUD with search, filtering, sorting and pagination, validated auth forms, a responsive sidebar layout, and persisted dark mode.",
      image: pulseboardImage,
      technologies: ["Next.js", "TypeScript", "React Query", "Zustand", "Tailwind"],
      github: "https://github.com/thanggw/Saas",
      demo: "https://saas-seven-phi-87.vercel.app",
    },
    {
      title: "Food Ordering E-commerce",
      description:
        "Full-stack food ordering website with menu, cart, favorites and checkout for customers, and user, product, order and voucher management for admins. Real-time customer support chat over WebSocket and online payment through the VNPay gateway.",
      image: web1,
      technologies: ["Spring Boot", "MySQL", "JavaScript", "WebSocket", "VNPay"],
      github: "https://github.com/thanggw/E-Commerce",
    },
  ];

  const work = [
    {
      title: "Fullstack Developer",
      company: "Ecombe Technology Development",
      period: "01/2026 - 08/2026",
      description: [
        "Developed responsive web interfaces using Vue 3 and TypeScript, integrating REST APIs for end-to-end business workflows.",
        "Customized Shopify themes using Liquid and integrated external APIs and Webhooks to extend store functionality.",
        "Collaborated with Product, Design, and QA teams to deliver fullstack features for international merchants.",
        "Identified and resolved frontend and backend performance bottlenecks to improve rendering performance and user experience.",
      ],
      icon: <Briefcase size={20} className="text-white" />,
    },
    {
      title: "Fullstack Developer",
      company: "Melisoft",
      period: "03/2025 - 12/2025",
      description: [
        "Developed web applications using React, Next.js, Java, and MongoDB in a Linux development environment.",
        "Built reusable UI components, integrated REST APIs, and implemented authentication and business workflows.",
        "Researched and applied new technologies based on project requirements and existing system architecture.",
        "Collaborated with Designers, BAs, and QAs to analyze requirements, propose technical solutions, and deliver features.",
      ],
      icon: <Briefcase size={20} className="text-white" />,
    },
  ];

  const education = [
    {
      title: "Bachelor of Information Technology",
      company: "Hanoi University",
      period: "2022 - 2026",
      description:
        "Expected graduation 11/2026. Achieved GPA 7.5/10 and received the Academic Merit Scholarship for two semesters (Fall 2023, Spring 2024).",
      icon: <BookOpen size={20} className="text-white" />,
    },
    {
      title: "Java Programming Certificate",
      company: "T3H",
      period: "07/2025",
      description:
        "Completed Java certificate program with GPA 8.5/10. Enhanced knowledge of object-oriented programming and best practices in software development.",
      icon: <Award size={20} className="text-white" />,
      image: certificateImg,
    },
    {
      title: "Hanu Test Certificate - Level B2",
      company: "Hanoi University",
      period: "03/2026",
      description: "English proficiency certificate at level B2.",
      icon: <Award size={20} className="text-white" />,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setMenuOpen(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFormStatus("❌ Please enter a valid email address.");
      return;
    }

    setFormStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mldldwaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New message from portfolio contact form",
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setFormStatus(
          `❌ Error: ${
            errorData.error || "Failed to send message. Please try again."
          }`
        );
      }
    } catch {
      setFormStatus("❌ Error sending message. Please try again later.");
    }
  };
  const handleEnter = () => {
    setShowIntro(false);
  };
  if (showIntro) {
    return (
      <AnimatePresence mode="wait">
        <Intro onEnter={handleEnter} />
      </AnimatePresence>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
    <AnimatePresence mode="wait">
      <motion.div
        key="main" // Key để Framer biết đây là component mới
        initial={{ opacity: 0 }} // Animation khi enter
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Animation khi exit (nếu cần quay lại)
        transition={{ duration: 0.5 }}
        className="min-h-screen overflow-x-clip bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
      >
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled || menuOpen
              ? "bg-slate-900/90 backdrop-blur-md shadow-lg shadow-purple-900/20"
              : "bg-transparent"
          }`}
        >
          {/* Scroll progress */}
          <motion.div
            style={{ scaleX: progress }}
            className="absolute top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-red-400"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Portfolio
              </button>
              <div className="hidden md:flex space-x-8">
                {sectionIds.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative capitalize hover:text-purple-400 transition-colors ${
                      activeSection === item
                        ? "text-purple-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      />
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="md:hidden p-2 -mr-2 text-gray-300 hover:text-purple-400 transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-purple-500/20"
              >
                <div className="px-4 py-3 flex flex-col">
                  {sectionIds.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize text-left py-3 text-lg transition-colors ${
                        activeSection === item
                          ? "text-purple-400"
                          : "text-gray-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
          {/* Floating glow orbs */}
          <motion.div
            aria-hidden="true"
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-pink-600/25 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-14 lg:gap-8 items-center"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.p
                variants={heroItem}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200 text-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                </span>
                Open to Junior Fullstack / Frontend roles
              </motion.p>
              <motion.h1
                variants={heroItem}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent leading-tight pb-2"
              >
                Vu Van Thang
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="mt-3 text-2xl md:text-3xl font-semibold text-white"
              >
                Fullstack Developer
              </motion.p>
              <motion.p
                variants={heroItem}
                className="mt-3 text-xl md:text-2xl text-gray-300"
              >
                I build interfaces with <RotatingWord words={heroWords} />
              </motion.p>
              <motion.p
                variants={heroItem}
                className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0"
              >
                Hello and welcome to my portfolio! I build web applications end
                to end, from REST APIs and real-time features with Spring Boot
                and NestJS to responsive interfaces with React, Next.js and
                Vue. I care about clean architecture and understanding how
                business processes translate into software.
              </motion.p>
              <motion.div
                variants={heroItem}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <a
                  href={`${import.meta.env.BASE_URL}Vu_Van_Thang-Fullstack_Developer.pdf`}
                  download="Vu_Van_Thang-Fullstack_Developer.pdf"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/50"
                >
                  Download CV
                </a>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  View Projects
                </button>
              </motion.div>
              <motion.dl
                variants={heroItem}
                className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
              >
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-slate-800/50 border border-slate-700/50 px-3 py-4 text-center lg:text-left"
                  >
                    <dd className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </motion.dl>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "backOut" } },
              }}
              className="order-1 lg:order-2 relative mx-auto w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            >
              {/* Rotating gradient ring */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#f87171,#a855f7)] blur-[2px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative w-full h-full rounded-full bg-slate-900 p-1.5">
                <img
                  src={avatar2}
                  alt="Vu Van Thang's Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating tech badges */}
              {heroBadges.map((badge, i) => (
                <motion.span
                  key={badge.item.name}
                  aria-hidden="true"
                  className={`absolute ${badge.position} flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/85 backdrop-blur border border-purple-400/30 shadow-lg shadow-purple-900/40 text-sm font-medium text-gray-100 whitespace-nowrap`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <TechIcon item={badge.item} size={18} />
                  <span className="hidden sm:inline">{badge.item.name}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Tech stack marquee */}
        <section
          aria-label="Tech stack"
          className="py-10 border-y border-purple-500/20 bg-slate-900/40"
        >
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 mb-6">
            Tech I work with
          </p>
          <div className="space-y-4">
            {marqueeRows.map((row, i) => (
              <div key={i} className="marquee-mask flex overflow-hidden">
                <div className={`marquee-track flex gap-4 pr-4 ${i % 2 ? "marquee-reverse" : ""}`}>
                  {[...row, ...row].map((item, j) => (
                    <span
                      key={j}
                      aria-hidden={j >= row.length ? "true" : undefined}
                      className="flex shrink-0 items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700/60 text-gray-200"
                    >
                      <TechIcon item={item} size={18} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Something about me</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...reveal(0.1, { x: -40 })}>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Myself
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My name is Vu Van Thang, and I am from Van Phuc, Ha Dong,
                  Hanoi. I was born on November 06, 2004. I am a Fullstack
                  Developer with over a year of hands-on experience, and I am
                  eager to learn and grow in everything I do. I enjoy exploring new experiences, meeting
                  new people, and staying curious about the world around me. I
                  believe in the power of perseverance and hard work, and I am
                  always ready to take on new challenges. I value personal
                  growth and look forward to the opportunities ahead in my
                  journey.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  On the frontend I enjoy turning designs into smooth,
                  responsive interfaces, and on the backend I like clean APIs
                  and real-time features.
                </p>
              </motion.div>
              <motion.div {...reveal(0.2, { x: 40 })}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl shadow-xl shadow-purple-900/40"
                >
                  <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl">
                    <div className="flex items-center gap-5 mb-6">
                      <img
                        src={avatar}
                        alt="Vu Van Thang"
                        className="w-20 h-20 object-cover rounded-full ring-2 ring-purple-400/60"
                      />
                      <div>
                        <h4 className="text-xl font-bold">Vu Van Thang</h4>
                        <p className="text-gray-400">Fullstack Developer</p>
                      </div>
                    </div>
                    <dl className="grid sm:grid-cols-2 gap-3">
                      {aboutFacts.map(({ icon: Icon, label, value }) => (
                        <div
                          key={label}
                          className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3"
                        >
                          <Icon size={18} className="mt-0.5 shrink-0 text-pink-400" />
                          <div>
                            <dt className="text-xs uppercase tracking-wider text-gray-400">
                              {label}
                            </dt>
                            <dd className="text-sm text-gray-100">{value}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Skills</SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend: main focus */}
              <motion.div {...reveal()} className="flex md:col-span-2 lg:row-span-2">
                <div className="w-full rounded-2xl p-px bg-gradient-to-br from-purple-500/70 via-pink-500/40 to-slate-700/40 shadow-xl shadow-purple-900/30">
                  <div className="h-full rounded-2xl bg-slate-900/95 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                        <FaCode className="text-white" size={22} />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold">Front-End Development</h3>
                      <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-pink-500/15 text-pink-300 border border-pink-400/30">
                        Main focus
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Building fast, responsive interfaces in React, Next.js and
                      Vue 3, from component architecture to state, data
                      fetching, forms and motion.
                    </p>
                    <ul className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                      {frontendStack.map((item, i) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.03 }}
                        >
                          <div
                            className="group flex h-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-800/70 border border-slate-700/60 px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-slate-800"
                            style={{ "--brand": item.color }}
                          >
                            <span className="transition-transform duration-300 group-hover:scale-125">
                              <TechIcon item={item} size={28} />
                            </span>
                            <span className="text-xs text-gray-300 leading-tight">
                              {item.name}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                    <h4 className="text-sm uppercase tracking-wider text-purple-300 mb-3">
                      What I have built
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300">
                      {frontendHighlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-pink-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {skillCategories.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  {...reveal(0.1 + index * 0.08)}
                  className={`flex ${index === skillCategories.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="group w-full rounded-2xl bg-slate-800/50 p-6 border border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-purple-500/15">
                    <div className="flex items-center mb-3">
                      <span className="mr-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <skill.icon className="text-purple-400" size={22} />
                      </span>
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{skill.description}</p>
                    {skill.stack && (
                      <div className="flex flex-wrap gap-2">
                        {skill.stack.map((key) => (
                          <TechChip key={key} item={tech[key]} />
                        ))}
                      </div>
                    )}
                    {skill.tags && (
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full text-sm bg-purple-900/50 text-purple-200 border border-purple-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {skill.highlights && (
                      <ul className="mt-5 space-y-2 text-sm text-gray-300">
                        {skill.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-pink-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const featured = index === 0;
                return (
                  <motion.div
                    key={project.title}
                    {...reveal(featured ? 0 : ((index - 1) % 3) * 0.12)}
                    className={`flex ${featured ? "md:col-span-2" : ""}`}
                  >
                    <div
                      className={`group flex w-full flex-col ${
                        featured ? "lg:flex-row" : ""
                      } bg-slate-800 rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/25 ${
                        featured ? "border-purple-500/30" : "border-transparent"
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden ${
                          featured
                            ? "lg:w-3/5 flex items-center bg-gradient-to-br from-purple-600/50 via-slate-900 to-pink-600/40 p-5 pt-14 sm:p-8 sm:pt-16"
                            : "h-48 bg-gradient-to-br from-purple-500 to-pink-500"
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className={
                            featured
                              ? "w-full h-auto rounded-lg ring-1 ring-white/10 shadow-2xl shadow-purple-950/70 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
                              : "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                          }
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        {featured && (
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                            Featured project
                          </span>
                        )}
                      </div>
                      <div className={`p-6 flex flex-col flex-1 ${featured ? "lg:p-8" : ""}`}>
                        <h3
                          className={`font-bold mb-2 text-purple-400 transition-colors group-hover:text-pink-400 ${
                            featured ? "text-2xl" : "text-xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((techName) => (
                            <span
                              key={techName}
                              className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                            >
                              {techName}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                          <a
                            href={project.github}
                            className="flex items-center px-4 py-2 rounded-full border border-slate-600 text-gray-300 transition-all duration-300 hover:border-purple-400 hover:text-purple-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/40 hover:scale-105"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle align="left">Experience & Education</SectionTitle>
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-100 mb-8">
                  <Briefcase size={20} className="text-pink-400" />
                  Work experience
                </h3>
                {work.map((item, index) => (
                  <motion.div
                    key={item.company}
                    {...reveal(0.05, { x: -40 })}
                    className="relative mb-12 last:mb-0"
                  >
                    <div className="flex items-start">
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 sm:mr-6 shadow-lg shadow-purple-500/40 ring-4 ring-slate-900">
                        {item.icon}
                      </div>
                      <div className="flex-1 bg-slate-800/50 p-6 rounded-lg border border-transparent transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-purple-500/10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-xl font-bold text-purple-400">
                            {item.title}
                          </h4>
                          <span className="text-gray-400 text-sm">{item.period}</span>
                        </div>
                        <p className="text-lg font-semibold mb-3">{item.company}</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-300">
                          {item.description.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < work.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-2">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-100 mb-8">
                  <GraduationCap size={22} className="text-pink-400" />
                  Education & certificates
                </h3>
                <div className="space-y-5">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.title}
                      {...reveal(0.1 + index * 0.1, { x: 40 })}
                    >
                      <div className="flex gap-4 bg-slate-800/50 p-5 rounded-lg border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-purple-500/10">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                            <h4 className="font-bold text-purple-400">{item.title}</h4>
                            <span className="text-gray-400 text-sm">{item.period}</span>
                          </div>
                          <p className="font-semibold text-gray-100 mb-1">{item.company}</p>
                          <p className="text-sm text-gray-300">{item.description}</p>
                          {item.image && (
                            <a
                              href={item.image}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 block overflow-hidden rounded-md border border-slate-700/60"
                            >
                              <img
                                src={item.image}
                                alt={`${item.title} from ${item.company}`}
                                className="w-full h-32 object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Contact</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div {...reveal(0.1, { x: -40 })}>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">
                  Let's connect!
                </h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new collaboration opportunities
                  or interesting projects. Feel free to contact me!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-purple-400 mr-4" size={20} />
                    <span className="text-gray-300">
                      thangvuvan0611@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-purple-400 mr-4" size={20} />
                    <span className="text-gray-300">+84 814 134 634</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-purple-400 mr-4" size={20} />
                    <span className="text-gray-300">
                      Van Phuc, Ha Dong, Ha Noi
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a
                    href="https://github.com/thanggw"
                    className="bg-slate-700 hover:bg-purple-600 p-3 rounded-full transition-all transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/th%C4%83ng-v%C5%A9-v%C4%83n-3a4282374/"
                    className="bg-slate-700 hover:bg-purple-600 p-3 rounded-full transition-all transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/thang.vuvan.061104?locale=vi_VN"
                    className="bg-slate-700 hover:bg-purple-600 p-3 rounded-full transition-all transform hover:scale-110"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.form
                {...reveal(0.2, { x: 40 })}
                onSubmit={handleSubmit}
                className="bg-slate-800 p-8 rounded-lg shadow-xl shadow-purple-900/30"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />

                  <button
                    type="submit"
                    disabled={formStatus === "Sending..."}
                    className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                      formStatus === "Sending..."
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus === "Sending..." ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {formStatus && (
                    <p
                      className={`text-center mt-2 text-sm ${
                        formStatus.includes("✅")
                          ? "text-green-400"
                          : formStatus.includes("❌")
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {formStatus}
                    </p>
                  )}
                </div>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-8 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-400">
              © 2026 Vu Van Thang
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
    </MotionConfig>
  );
};

export default Portfolio;
