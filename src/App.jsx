import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Lock,
  Menu,
  X,
  Loader2,
} from "lucide-react";
import web1 from "/images/web1.png";
import mcceImage from "/images/mcce.png";
import veloImage from "/images/velo.png";
import candidateImage from "/images/candidate.png";
import pulseboardImage from "/images/pulseboard.png";
import certificateImg from "/images/certificate.png";
import avatar from "/images/avatar3.jpg";

const CV_URL = `${import.meta.env.BASE_URL}Vu_Van_Thang-Fullstack_Developer.pdf`;
const EMAIL = "thangvuvan0611@gmail.com";

const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/thanggw", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/th%C4%83ng-v%C5%A9-v%C4%83n-3a4282374/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/thang.vuvan.061104?locale=vi_VN",
    icon: Facebook,
  },
];

const projects = [
  {
    title: "McCE",
    subtitle: "Collaborative cloud code editor",
    description:
      "Browser-based platform where multiple users edit and run code together in real time. Room-based presence and live sync over WebSocket/STOMP, a multi-file workspace (Java, Python, C++, JavaScript), room state persisted in Redis, and sandboxed execution via Docker or the Judge0 API.",
    image: mcceImage,
    imageAlt: "McCE workspace with a Java file open, file list and collaboration panel",
    technologies: ["Spring Boot", "Next.js", "WebSocket", "Redis", "Docker"],
    github: "https://github.com/thanggw/MccE",
    demo: "https://mcc-e.vercel.app",
  },
  {
    title: "Velo",
    subtitle: "Agile project management",
    description:
      "Agile/Scrum task management with a drag-and-drop Kanban board, project and member management, an admin dashboard, and role-based access enforced by both route guards and API guards. Auth uses JWT access and refresh tokens.",
    image: veloImage,
    imageAlt: "Velo login screen",
    technologies: ["Vue 3", "Pinia", "NestJS", "PostgreSQL", "Prisma"],
    github: "https://github.com/thanggw/velo",
    demo: "https://velo-nu-two.vercel.app",
  },
  {
    title: "Candidate Management",
    subtitle: "Serverless HR portal",
    description:
      "Row-Level Security isolates each HR user's data, Realtime keeps lists in sync across clients, Edge Functions handle validation and analytics, and resumes are stored securely. Includes full-text search and cursor-based pagination.",
    image: candidateImage,
    imageAlt: "Candidate Management sign-in screen",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "SCSS"],
    github: "https://github.com/thanggw/candidate-management",
    demo: "https://candidate-management-kappa.vercel.app",
  },
  {
    title: "PulseBoard",
    subtitle: "SaaS admin dashboard",
    description:
      "KPI cards and analytics charts, customer CRUD with search, filtering, sorting and pagination, validated auth forms, a responsive sidebar layout, and persisted dark mode.",
    image: pulseboardImage,
    imageAlt: "PulseBoard dashboard with revenue trend, active users and plan mix charts",
    technologies: ["Next.js", "TypeScript", "React Query", "Zustand", "Tailwind"],
    github: "https://github.com/thanggw/Saas",
    demo: "https://saas-seven-phi-87.vercel.app",
  },
  {
    title: "Food Ordering",
    subtitle: "Full-stack e-commerce",
    description:
      "Menu, cart, favorites and checkout for customers; user, product, order and voucher management for admins. Real-time support chat over WebSocket and online payment through VNPay.",
    image: web1,
    imageAlt: "Habibi Food Portal home page with menu and support chat",
    technologies: ["Spring Boot", "MySQL", "JavaScript", "WebSocket", "VNPay"],
    github: "https://github.com/thanggw/E-Commerce",
  },
];

const jobs = [
  {
    role: "Fullstack Developer",
    company: "Ecombe Technology Development",
    period: "01/2026 – 08/2026",
    points: [
      "Developed responsive web interfaces using Vue 3 and TypeScript, integrating REST APIs for end-to-end business workflows.",
      "Customized Shopify themes using Liquid and integrated external APIs and Webhooks to extend store functionality.",
      "Collaborated with Product, Design, and QA teams to deliver fullstack features for international merchants.",
      "Identified and resolved frontend and backend performance bottlenecks to improve rendering performance and user experience.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Melisoft",
    period: "03/2025 – 12/2025",
    points: [
      "Developed web applications using React, Next.js, Java, and MongoDB in a Linux development environment.",
      "Built reusable UI components, integrated REST APIs, and implemented authentication and business workflows.",
      "Researched and applied new technologies based on project requirements and existing system architecture.",
      "Collaborated with Designers, BAs, and QAs to analyze requirements, propose technical solutions, and deliver features.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Information Technology",
    org: "Hanoi University",
    period: "2022 – 2026",
    detail:
      "Expected graduation 11/2026. GPA 7.5/10. Academic Merit Scholarship for two semesters (Fall 2023, Spring 2024).",
  },
  {
    title: "Java Programming Certificate",
    org: "T3H",
    period: "07/2025",
    detail: "Completed the Java certificate program with GPA 8.5/10.",
    link: { label: "View certificate", href: certificateImg },
  },
  {
    title: "Hanu Test Certificate, Level B2",
    org: "Hanoi University",
    period: "03/2026",
    detail: "English proficiency certificate at level B2.",
  },
];

const skills = [
  {
    name: "Frontend",
    description:
      "TypeScript, React, Next.js, Vue 3, TailwindCSS and SCSS. State and data management with Redux Toolkit, Zustand, Pinia and React Query.",
  },
  {
    name: "Backend",
    description:
      "Java Spring Boot, NestJS and Node.js. REST APIs, JWT authentication and WebSocket/STOMP real-time features.",
  },
  {
    name: "Data",
    description: "PostgreSQL, MySQL, MongoDB, Redis, Prisma ORM and Supabase.",
  },
  {
    name: "Tools",
    description:
      "Git/GitHub, Docker, Postman, Vercel, VSCode, IntelliJ IDEA, Jira, Trello and Figma.",
  },
  {
    name: "Analysis & testing",
    description:
      "Requirements analysis, SRS/BRD documents, UML and BPMN diagrams. Unit, integration and UAT test cases.",
  },
  {
    name: "Teamwork",
    description:
      "Clear communication and time management, built by working with Product, Design, BA and QA teams.",
  },
];

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = navItems.map((item) => item.id);

function Nav() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id) =>
    `relative py-2 transition-colors duration-state ease-out hover:text-ink ${
      active === id ? "text-ink" : "text-ink-3"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-state ease-out ${
        scrolled || open ? "border-line bg-bg" : "border-transparent bg-accent-soft"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-display text-lg font-semibold tracking-tight text-ink"
        >
          Vu Van Thang
        </a>
        <ul className="hidden items-center gap-8 text-[0.9375rem] md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-state ease-out ${
                    active === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-ink-2 hover:text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex h-12 items-center text-lg ${
                  active === item.id ? "text-ink" : "text-ink-2"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Hero() {
  return (
    <section id="top" className="bg-accent-soft">
      <motion.div
        className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-container items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:gap-8 md:py-24 lg:px-8"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        <div className="md:col-span-8">
          <motion.p variants={fadeUp} className="mb-6 text-ink-3">
            Fullstack Developer · Hanoi
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-[14ch] text-hero">
            I build web apps end to end.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-[46ch] text-lead text-ink-2">
            1+ year shipping features with Vue, React, NestJS and Spring Boot at Ecombe
            and Melisoft.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href={CV_URL}
              download="Vu_Van_Thang-Fullstack_Developer.pdf"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-accent px-5 font-medium text-accent-ink transition-[transform,background-color] duration-press ease-out hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-px"
            >
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-sm border border-line-strong px-5 font-medium text-ink transition-[transform,border-color] duration-press ease-out hover:-translate-y-0.5 hover:border-ink-3 active:translate-y-px"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
        <motion.figure variants={fadeUp} className="md:col-span-4">
          <img
            src={avatar}
            alt="Portrait of Vu Van Thang"
            width="360"
            height="450"
            className="aspect-[4/5] w-full max-w-[200px] rounded border-4 border-bg object-cover md:ml-auto md:max-w-[320px]"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
}

function SectionHeading({ id, title, children }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 id={`${id}-title`} className="text-h2">
        {title}
      </h2>
      {children && <p className="mt-4 max-w-measure text-ink-2">{children}</p>}
    </div>
  );
}

function TextLink({ href, children, icon: Icon = ArrowUpRight }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-11 items-center gap-1.5 font-medium text-ink"
    >
      <span className="border-b border-line-strong pb-0.5 transition-colors duration-state ease-out group-hover:border-accent">
        {children}
      </span>
      <Icon
        size={16}
        aria-hidden="true"
        className="text-ink-3 transition-transform duration-state ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  );
}

function BrowserFrame({ project, eager }) {
  const url = project.demo ?? project.github;
  const label = url.replace(/^https?:\/\//, "");
  return (
    <div className="overflow-hidden rounded border border-line bg-surface">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 items-center gap-2 border-b border-line px-3 text-sm text-ink-3 transition-colors duration-state ease-out hover:text-ink"
        aria-label={`Open ${project.title} at ${label}`}
      >
        <Lock size={13} aria-hidden="true" className="shrink-0" />
        <span className="truncate">{label}</span>
        <ArrowUpRight
          size={14}
          aria-hidden="true"
          className="ml-auto shrink-0 opacity-0 transition-opacity duration-state ease-out group-hover:opacity-100"
        />
      </a>
      <img
        src={project.image}
        alt={project.imageAlt}
        loading={eager ? "eager" : "lazy"}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}

function TechList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-sm bg-accent-soft px-2.5 py-1.5 text-sm leading-none text-ink-2"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-6">
      {project.demo && <TextLink href={project.demo}>Live demo</TextLink>}
      <TextLink href={project.github} icon={Github}>
        Source
      </TextLink>
    </div>
  );
}

function Work() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading id="work" title="Selected work">
          Deployed projects with public source code. Open any address bar to try the live app.
        </SectionHeading>

        <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <BrowserFrame project={featured} eager />
          </div>
          <div className="md:col-span-5">
            <h3 className="text-h3">
              {featured.title}
              <span className="block font-body text-base font-normal tracking-normal text-ink-3">
                {featured.subtitle}
              </span>
            </h3>
            <p className="mt-4 text-ink-2">{featured.description}</p>
            <div className="mt-6">
              <TechList items={featured.technologies} />
            </div>
            <ProjectLinks project={featured} />
          </div>
        </article>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2">
          {rest.map((project) => (
            <article key={project.title}>
              <BrowserFrame project={project} />
              <h3 className="mt-6 text-h3">
                {project.title}
                <span className="block font-body text-base font-normal tracking-normal text-ink-3">
                  {project.subtitle}
                </span>
              </h3>
              <p className="mt-3 text-ink-2">{project.description}</p>
              <div className="mt-5">
                <TechList items={project.technologies} />
              </div>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading id="experience" title="Experience" />
        <ol>
          {jobs.map((job) => (
            <li
              key={job.company}
              className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8"
            >
              <p className="text-ink-3 tabular-nums md:col-span-3">{job.period}</p>
              <div className="md:col-span-9">
                <h3 className="text-h3">{job.company}</h3>
                <p className="mt-1 text-ink-2">{job.role}</p>
                <ul className="mt-5 max-w-[70ch] space-y-2.5 text-ink-2">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-5">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.8em] h-px w-2.5 bg-ink-3"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mb-6 mt-20 text-h3">Education & certificates</h3>
        <dl className="grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-3">
          {education.map((item) => (
            <div key={item.title} className="flex flex-col bg-bg p-6">
              <dt>
                <span className="block text-sm text-ink-3 tabular-nums">{item.period}</span>
                <span className="mt-2 block font-medium text-ink">{item.title}</span>
                <span className="block text-ink-2">{item.org}</span>
              </dt>
              <dd className="mt-3 text-[0.9375rem] text-ink-3">
                {item.detail}
                {item.link && (
                  <span className="mt-2 block">
                    <TextLink href={item.link.href}>{item.link.label}</TextLink>
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading id="skills" title="Skills" />
        <dl className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="border-t border-line py-6">
              <dt className="font-medium text-ink">{skill.name}</dt>
              <dd className="mt-2 text-ink-2">{skill.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-container gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <h2 id="about-title" className="text-h2 md:col-span-4">
          About
        </h2>
        <div className="space-y-5 text-lead text-ink-2 md:col-span-8">
          <p>
            I&apos;m Vu Van Thang, a Fullstack Developer from Van Phuc, Ha Dong, Hanoi.
            Alongside code I have a background in business analysis, so I care about how a
            business process turns into software, not only how the code is written.
          </p>
          <p>
            At Melisoft and Ecombe I built web apps with React, Next.js and Vue and
            extended Shopify stores for international merchants. I&apos;m finishing my IT
            degree at Hanoi University, expected 11/2026.
          </p>
        </div>
      </div>
    </section>
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (status.state !== "success") return;
    const timer = setTimeout(() => setStatus({ state: "idle", message: "" }), 6000);
    return () => clearTimeout(timer);
  }, [status.state]);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email" && emailError && emailPattern.test(value)) setEmailError("");
  };

  const checkEmail = () => {
    if (form.email && !emailPattern.test(form.email)) {
      setEmailError("Enter a valid email address, for example name@company.com.");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!emailPattern.test(form.email)) {
      setEmailError("Enter a valid email address, for example name@company.com.");
      return;
    }
    setStatus({ state: "sending", message: "" });
    try {
      const response = await fetch("https://formspree.io/f/mldldwaw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "New message from portfolio contact form",
          _replyto: form.email,
        }),
      });
      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus({ state: "success", message: "Thanks, your message was sent. I'll reply by email." });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus({
          state: "error",
          message: data.error || "The message could not be sent. Please try again.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: `Network error. Please try again or email ${EMAIL} directly.`,
      });
    }
  };

  const sending = status.state === "sending";
  const inputClass =
    "w-full rounded-sm border bg-surface px-4 text-base text-ink placeholder:text-ink-3 transition-colors duration-state ease-out hover:border-line-strong focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:opacity-60";

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-[0.9375rem] font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={form.name}
          onChange={update}
          disabled={sending}
          className={`${inputClass} h-12 border-line`}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-[0.9375rem] font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={update}
          onBlur={checkEmail}
          disabled={sending}
          aria-invalid={emailError ? "true" : undefined}
          aria-describedby={emailError ? "email-error" : undefined}
          className={`${inputClass} h-12 ${emailError ? "border-danger" : "border-line"}`}
        />
        {emailError && (
          <p id="email-error" className="mt-2 text-sm text-danger">
            {emailError}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[0.9375rem] font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={update}
          disabled={sending}
          className={`${inputClass} border-line py-3`}
        />
      </div>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
      <button
        type="submit"
        disabled={sending || !form.name || !form.email || !form.message}
        className="inline-flex h-12 items-center gap-2 rounded-sm bg-accent px-6 font-medium text-accent-ink transition-[transform,background-color,opacity] duration-press ease-out hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-accent"
      >
        {sending && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
        {sending ? "Sending" : "Send message"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`min-h-6 text-[0.9375rem] ${
          status.state === "error" ? "text-danger" : "text-accent"
        }`}
      >
        {status.message}
      </p>
    </form>
  );
}

function Contact() {
  const details = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: "+84 814 134 634", href: "tel:+84814134634" },
    { icon: MapPin, label: "Ha Dong, Hanoi" },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-container gap-12 px-4 sm:px-6 md:grid-cols-12 md:gap-8 lg:px-8">
        <div className="md:col-span-5">
          <h2 id="contact-title" className="text-h2">
            Get in touch
          </h2>
          <p className="mt-4 max-w-[40ch] text-ink-2">
            Open to Junior Fullstack Developer roles. Send a message or email me directly.
          </p>
          <ul className="mt-8 space-y-1">
            {details.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex min-h-11 items-center gap-3 text-ink-2">
                <Icon size={18} aria-hidden="true" className="text-ink-3" />
                {href ? (
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center transition-colors duration-state ease-out hover:text-ink"
                  >
                    {label}
                  </a>
                ) : (
                  label
                )}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink-2 transition-[transform,color,border-color] duration-state ease-out hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const Portfolio = () => (
  <MotionConfig reducedMotion="user">
    <Nav />
    <main>
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-ink-3 sm:px-6 lg:px-8">
        <p>© 2026 Vu Van Thang</p>
        <a href="#top" className="inline-flex min-h-11 items-center hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  </MotionConfig>
);

export default Portfolio;
