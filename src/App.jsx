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
} from "lucide-react";
import {
  FaCode,
  FaDatabase,
  FaClipboardList,
  FaComments,
  FaBug,
  FaTools,
} from "react-icons/fa";
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
  const [openIndex, setOpenIndex] = useState(null);
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

  const skillCategories = [
    {
      name: "Front-End Development",
      icon: FaCode,
      description:
        "TypeScript, React, Next.js, Vue 3, TailwindCSS and SCSS. State and data management with Redux Toolkit, Zustand, Pinia and React Query. Building responsive, accessible interfaces.",
    },
    {
      name: "Back-End Development",
      icon: FaDatabase,
      description:
        "Java Spring Boot, NestJS and Node.js. RESTful APIs, JWT authentication, WebSocket/STOMP real-time features, PostgreSQL, MySQL, MongoDB, Redis, Prisma ORM and Supabase.",
    },
    {
      name: "Business Analysis",
      icon: FaClipboardList,
      description:
        "Skills in business requirements analysis, writing specification documents (SRS, BRD), drawing UML, BPMN diagrams, and using tools like Draw.io, Lucidchart.",
    },
    {
      name: "Soft Skills",
      icon: FaComments,
      description:
        "Communication, teamwork, time management and clear presentation skills, built through working in a development team and many group projects.",
    },
    {
      name: "Testing & QA",
      icon: FaBug,
      description:
        "Understanding of testing types like Unit Test, Integration Test, User Acceptance Testing (UAT). Know how to write test cases, use tools like Postman.",
    },
    {
      name: "Tools & Software",
      icon: FaTools,
      description:
        "Git/GitHub, Docker, Postman, Vercel, VSCode, IntelliJ IDEA, Jira, Trello, Figma and Microsoft Office.",
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

  const education = [
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

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
            className="text-center z-10 max-w-4xl mx-auto px-4"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <div className="mb-8 mt-24 md:mt-8">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "backOut" } },
                }}
                className="relative w-40 h-40 mx-auto mb-8"
              >
                {/* Rotating gradient ring */}
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#f87171,#a855f7)] blur-[2px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative w-full h-full rounded-full bg-slate-900 p-1">
                  <img
                    src={avatar2}
                    alt="Vu Van Thang's Profile Picture"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent leading-loose"
              >
                Vu Van Thang
              </motion.h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                Fullstack Developer · 1+ year of experience
              </motion.p>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
              >
                Hello and welcome to my portfolio! I build web applications end
                to end, from REST APIs and real-time features with Spring Boot
                and NestJS to responsive interfaces with React, Next.js and
                Vue. I care about clean architecture and understanding how
                business processes translate into software.
              </motion.p>
            </div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
            >
              <a
                href={`${import.meta.env.BASE_URL}Vu_Van_Thang-Fullstack_Developer.pdf`}
                download="Vu_Van_Thang-Fullstack_Developer.pdf"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/50"
              >
                Download CV
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Contact
              </button>
            </motion.div>
          </motion.div>
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block"
          >
            <ChevronDown size={32} className="text-purple-400" />
          </button>
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
              </motion.div>
              <motion.div {...reveal(0.2, { x: 40 })} className="text-center">
                <motion.div
                  whileHover={{ y: -8, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl inline-block shadow-xl shadow-purple-900/40"
                >
                  <div className="bg-slate-800 p-8 rounded-2xl">
                    <img
                      src={avatar}
                      alt="Your Profile"
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    />
                    <h4 className="text-xl font-bold mb-2">Vu Van Thang</h4>
                    <p className="text-gray-400">Fullstack Developer</p>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {skillCategories.map((skill, index) => (
                <motion.div key={index} {...reveal(index * 0.08)}>
                <button
                  type="button"
                  onClick={() => toggleOpen(index)}
                  aria-expanded={openIndex === index}
                  className={`group w-full text-left cursor-pointer bg-slate-800/50 p-6 rounded-lg border transition-all duration-300 hover:bg-slate-800/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 ${
                    openIndex === index
                      ? "border-purple-500/60 shadow-xl shadow-purple-500/20"
                      : "border-transparent hover:border-purple-500/30"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <span className="mr-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <skill.icon className="text-purple-400" size={22} />
                    </span>
                    <h3 className="text-xl font-bold flex-1">{skill.name}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-purple-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.span
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="block text-gray-300 text-sm overflow-hidden"
                      >
                        {skill.description}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
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
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  {...reveal((index % 3) * 0.12)}
                  className="flex"
                >
                <div className="group flex flex-col w-full bg-slate-800 rounded-lg overflow-hidden border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/25">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-purple-400 transition-colors group-hover:text-pink-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                        >
                          {tech}
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
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle align="left">Experience & Education</SectionTitle>
            <div className="flex flex-col md:flex-row gap-8">
              {" "}
              {/* Sử dụng flexbox để chia 2 cột */}
              <div className="md:w-3/5">
                {" "}
                {/* Cột trái cho Education & Achievements */}
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    {...reveal(0.05, { x: -40 })}
                    className="relative mb-12 last:mb-0"
                  >
                    <div className="flex items-start">
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6 shadow-lg shadow-purple-500/40 ring-4 ring-slate-900">
                        {item.icon}
                      </div>
                      <div className="flex-1 bg-slate-800/50 p-6 rounded-lg border border-transparent transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-purple-500/10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-purple-400">
                            {item.title}
                          </h3>
                          <span className="text-gray-400 text-sm">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {item.company}
                        </h4>
                        {Array.isArray(item.description) ? (
                          <ul className="list-disc pl-5 space-y-1 text-gray-300">
                            {item.description.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-300">{item.description}</p>
                        )}
                      </div>
                    </div>
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div> /* Điều chỉnh height thành h-full để đường kẻ dài hơn */
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div
                {...reveal(0.2, { x: 40 })}
                className="md:w-2/5 flex items-center justify-center p-4"
              >
                <motion.img
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  src={certificateImg}
                  alt="Java programming certificate from T3H"
                  className="max-w-full h-auto rounded-lg shadow-2xl shadow-purple-900/50"
                />
              </motion.div>
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
