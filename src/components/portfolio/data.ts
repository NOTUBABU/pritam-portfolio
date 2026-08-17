import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiMysql, SiGit, SiGithub, SiExpress,
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  "MERN Stack Developer",
  "Full Stack Web Developer",
  "React Developer",
  "Problem Solver",
];

export const floatingIcons = [SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiExpress];

export const aboutCards = [
  { label: "Name", value: "Pritam Ghosh" },
  { label: "Degree", value: "B.Tech CSE (Data Science)" },
  { label: "University", value: "Brainware University" },
  { label: "Graduation", value: "2026" },
  { label: "Location", value: "Kolkata, West Bengal, India" },
  { label: "Email", value: "babupritam9933@gmail.com" },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    place: "Brainware University",
    year: "2022 — 2026",
    detail: "Specialized in data science, full-stack development and scalable software systems.",
  },
  {
    degree: "Higher Secondary Education",
    place: "Jhakra High School (H.S.)",
    year: "2022",
    detail: "Completed senior secondary education with a focus on science and mathematics.",
  },
];

export const experience = [
  {
    role: "MERN Stack Developer Intern",
    company: "Euphoria GNX",
    period: "January 2025 – June 2025",
    points: [
      "Developed responsive web applications",
      "Worked on frontend and backend development",
      "Integrated REST APIs",
      "Collaborated with development teams",
      "Improved user experience and application performance",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: SiReact },
      { name: "JavaScript", level: 88, icon: SiJavascript },
      { name: "HTML5", level: 95, icon: SiHtml5 },
      { name: "CSS3", level: 92, icon: SiCss },
      { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 82, icon: SiNodedotjs },
      { name: "MongoDB", level: 80, icon: SiMongodb },
      { name: "MySQL", level: 75, icon: SiMysql },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Java", level: 78, icon: FaJava },
      { name: "Git", level: 85, icon: SiGit },
      { name: "GitHub", level: 88, icon: SiGithub },
      { name: "VS Code", level: 90, icon: FaCode },
    ],
  },
];

export const otherSkills = ["REST APIs", "Responsive Web Design", "Problem Solving"];

export const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Develop scalable and modern web applications using the MERN stack with clean, maintainable architecture.",
  },
  {
    title: "MERN Stack Development",
    desc: "Build complete frontend and backend solutions with React, Node.js, Express and MongoDB.",
  },
  {
    title: "Responsive Website Design",
    desc: "Create mobile-friendly and visually appealing websites optimized for all devices and screen sizes.",
  },
];

export const projects = [
  {
    name: "Smart Product Recommendation System",
    desc: "A B.Tech research project that builds a personalized product recommender for a mock e-commerce website. It uses content-based filtering with an ML model, paired with an HTML/CSS + JavaScript frontend to improve analytical, problem-solving and project-management skills.",
    tech: ["HTML", "CSS", "JavaScript", "Machine Learning"],
    github: "https://github.com/NOTUBABU",
    demo: "#",
  },
  {
    name: "Healthcare Appointment Management System",
    desc: "A web-based healthcare appointment management system enabling patients to book appointments, doctors to manage schedules, and admins to control users with secure, role-based access.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/NOTUBABU",
    demo: "#",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2024",
    desc: "Participated with a team and pitched a mobile app idea to give farmers direct market access, cutting out intermediaries.",
  },
  {
    title: "Frontend Lead at EcoShudhra",
    desc: "Led a team of members, coordinated tasks, and ensured timely project completion. Developed leadership, communication, and team-management skills through regular collaboration while working closely with team members to solve problems and achieve project goals.",
  },
];

export const socials = {
  github: "https://github.com/NOTUBABU",
  linkedin: "https://www.linkedin.com/in/pritam-ghosh-7967782a7",
  twitter: "https://x.com/Notubabu001",
  instagram: "https://www.instagram.com/notubabu_01",
  email: "babupritam9933@gmail.com",
};
