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
  PenTool,
} from "lucide-react";
import {
  FaCode,
  FaDatabase,
  FaClipboardList,
  FaComments,
  FaBug,
  FaTools,
} from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import web1 from "/images/web1.png";
import web2 from "/images/web2.png";
import gameTheoryImage from "/images/algorithm.png";
import medicalBookingImage from "/images/medical.png";
import certificateImg from "/images/certificate.png";
import avatar3 from "/images/avatar3.jpg";
import avatar2 from "/images/avatar2.png";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillCategories = [
    {
      name: "Front-End Development",
      icon: FaCode,
      description:
        "Proficient in HTML, CSS, JavaScript, ReactJS, and TailwindCSS. Skilled in designing user-friendly, responsive interfaces and optimizing user experience.",
    },
    {
      name: "Back-End Development",
      icon: FaDatabase,
      description:
        "Basic knowledge of Node.js, Express, RESTful APIs, Spring Boot, Hibernate and databases like MySQL, MongoDB. Understand how to connect front-end and back-end.",
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
        "Communication, teamwork, time management and clear presentation skills. Have participated in many group projects at school.",
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
        "Proficient in Microsoft Office (Excel, Word, PowerPoint), VSCode, Git/GitHub, Jira, Trello, Figma, and business analysis support software.",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with HTML, CSS, SpringBoot and MySQL integrated with real-time messaging using Web Socket and besides COD payment also integrated with VnPay payment gateway test environment, easy login via Google using oAuth2.",
      image: web1,
      technologies: ["HTML", "CSS", "Javascript", "SpringBoot", "MySQL"],
      github: "https://github.com/thanggw/E-Commerce",
      demo: "#",
    },
    {
      title: "Furniture E-commerce",
      description:
        "Full-stack e-commerce solution with ReactJs, SpringBoot and MySQL integrated with real-time messaging using Web Socket and besides COD payment also integrated with VnPay payment gateway test environment, easy login via Google using oAuth2.",
      image: web2,
      technologies: ["React", "SpringBoot", "MySQL"],
      github: "https://github.com/thanggw/BE_FurnitureWebsite",
      demo: "#",
    },
    {
      title: "Game Theory & Stable Matching Algorithm",
      description:
        "Development of a web application for demonstrating Game Theory and Stable Matching algorithms, built as a requirement for a university course. This project showcases complex algorithm implementations with an interactive user interface.",
      image: gameTheoryImage,
      technologies: ["ReactJs", "SpringBoot", "SpringBoot"],
      github: "https://github.com/FitHanuSpecialSubject/GA-Application-Java",
      demo: "#",
    },
    {
      title: "Online Medical Appointment Booking System",
      description:
        "Currently under development, this full-stack web application allows users to easily book medical appointments. It features a robust backend for managing schedules and a user-friendly frontend for seamless booking experience.",
      image: medicalBookingImage,
      technologies: ["Node.js", "Express.js", "MySQL", "ReactJs"],
      github: "#",
      demo: "#",
    },
  ];

  const education = [
    {
      title: "Software Engineer",
      company: "Hanoi University",
      period: "2022 - Present",
      description:
        "Achieved GPA 7.5/10 in the Information System program. Participated in many group projects, honing problem-solving and teamwork skills.",
      icon: <BookOpen size={20} className="text-white" />,
    },
    {
      title: "Java Programming Certificate",
      company: "T3H",
      period: "2023",
      description:
        "Completed Java certificate program with GPA 8.5/10. Enhanced knowledge of object-oriented programming and best practices in software development.",
      icon: <Award size={20} className="text-white" />,
    },
    {
      title: "Content Creator (Freelancer)",
      company: "Personal Project",
      period: "2022 - Present",
      description:
        "Worked freelance in content creation, receiving positive feedback on in-depth research skills, engaging content production and meeting deadlines. Developed communication, creativity and time management skills.",
      icon: <PenTool size={20} className="text-white" />,
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
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
      setFormStatus(" Please enter a valid email address.");
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
        setFormStatus(" Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setFormStatus(
          `❌ Error: ${
            errorData.error || "Failed to send message. Please try again."
          }`
        );
      }
    } catch (error) {
      setFormStatus(" Error sending message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === item ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8 mt-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 overflow-hidden">
              {/* Thay thế phần này bằng thẻ <img> của bạn */}
              <img
                src={avatar3}
                alt="Vu Van Thang's Profile Picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent leading-loose">
              Vu Van Thang
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Business Analyst Intern
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Hello and welcome to my portfolio! I am an enthusiastic and
              analytical student, actively seeking a Business Analyst internship
              to apply my academic knowledge and developed skills to real-world
              projects. With a strong aptitude for logical thinking, effective
              problem-solving, and a keen eagerness to learn, I am keen to
              contribute to business growth and evolve into a professional
              Business Analyst in the future.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="/Nguyen_Van_Hinh-Intern_BA.pdf"
              download="Vu_Van_Thang_BA_Intern.pdf"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Download CV
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something about me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Myself
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My name is Vu Van Thang, and I am from Van Phuc, Ha Dong, Hanoi.
                I was born on November 06, 2004. I am currently pursuing my
                studies and am eager to learn and grow in everything I do. I
                enjoy exploring new experiences, meeting new people, and staying
                curious about the world around me. I believe in the power of
                perseverance and hard work, and I am always ready to take on new
                challenges. I value personal growth and look forward to the
                opportunities ahead in my journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl inline-block">
                <div className="bg-slate-800 p-8 rounded-2xl">
                  <img
                    src={avatar2}
                    alt="Your Profile"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">Vu Van Thang</h4>
                  <p className="text-gray-400">Business Analyst Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((skill, index) => (
              <div
                key={index}
                onClick={() => toggleOpen(index)}
                className="cursor-pointer bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-all transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-300 text-sm overflow-hidden"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {/* Chỉ hiển thị thông báo cho project thứ 4 (index 3) */}
                    {index === 3 && project.github === "#" ? (
                      <span className="flex items-center text-gray-500 text-sm italic">
                        Code is being completed, please come back later!
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:text-left">
            {" "}
            {/* Thêm md:text-left để căn trái trên màn hình lớn hơn */}
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto md:mx-0"></div>{" "}
            {/* Căn trái thanh gạch dưới */}
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {" "}
            {/* Sử dụng flexbox để chia 2 cột */}
            <div className="md:w-3/5">
              {" "}
              {/* Cột trái cho Education & Achievements */}
              {education.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                      {item.icon}
                    </div>
                    <div className="flex-1 bg-slate-800/50 p-6 rounded-lg">
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
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div> /* Điều chỉnh height thành h-full để đường kẻ dài hơn */
                  )}
                </div>
              ))}
            </div>
            <div className="md:w-2/5 flex items-center justify-center p-4">
              <img
                src={certificateImg}
                alt="Description of your image"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Let's connect!
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new collaboration opportunities or
                interesting projects. Feel free to contact me!
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
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 p-8 rounded-lg"
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

                <input type="text" name="_gotcha" style={{ display: "none" }} />

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
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">
            © 2024 Vu Van Thang. Made with ❤️ using React
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
