// Skills data organized by category
export const skillsData = [
  {
    category: "Frontend",
    icon: "Code",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Layers",
    skills: ["C#", "ASP.NET Core", "Node.js", "NestJS", "REST API", "GraphQL", "JWT", "Microservices"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MongoDB", "SQL Server", "SQLite"],
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Docker", "Postman", "Firebase", "Cloud Functions"],
  },
];

// Projects data
export const projectsData = [
  {
    number: "01",
    title: "AI Time Management & Habit Tracking System",
    description:
      "Graduation project - AI-powered mobile application for goal management, habit tracking, and AI-generated action plans.",
    fullDescription:
      "A comprehensive mobile application designed to help users achieve their goals through intelligent habit tracking and AI-generated action plans. Built with Flutter for cross-platform mobile development, ASP.NET Core for robust backend services, and MongoDB for flexible data storage. Integrates with LLM APIs to generate personalized action plans based on user goals and habits. Features Firebase for real-time notifications and cloud storage.",
    technologies: ["Flutter", "ASP.NET Core", "MongoDB", "LLM API", "Firebase"],
    demoLink: null,
    image: "/Graduation.png",
    screenshots: [
      "/imgs/graduation/homeScreen.png",
      "/imgs/graduation/homeScreen2.png",
      "/imgs/graduation/target_detail_screen.png",
    ],
  },
  {
    number: "02",
    title: "HUBT Social",
    description:
      "University social networking platform with microservices architecture, real-time communication, and role-based access control.",
    fullDescription:
      "A feature-rich social networking platform built for university communities. Implements a microservices architecture using ASP.NET Core for scalability and maintainability. Features real-time communication using SignalR, role-based access control for different user types, and containerized deployment with Docker. MongoDB provides flexible document storage for user profiles, posts, and relationships. The platform supports messaging, notifications, and community engagement features.",
    technologies: ["ASP.NET Core", "Microservices", "MongoDB", "SignalR", "Docker"],
    demoLink: null,
    image: "/HUBTSOCIALIMAGE.png",
    screenshots: [
      "/imgs/hubtSocialImg/homeScreen.png",
      "/imgs/hubtSocialImg/chatting.png",
      "/imgs/hubtSocialImg/notification.png",
    ],
  },
];

// Experience data
export const experienceData = [
  {
    title: "Full-Stack Developer",
    company: "NCC Plus",
    period: "July 2025 - May 2026",
    description:
      "Full-Stack Developer responsible for developing and maintaining web applications. Working with React, Next.js, TypeScript, Node.js, and NestJS on the backend. Contributing to MongoDB database design and optimization. Key responsibilities include building responsive UI components, developing RESTful APIs, implementing authentication systems, code reviews, and collaborating with team members in an Agile environment.",
    responsibilities: [
      "Develop and maintain full-stack web applications",
      "Build responsive UI components with React and Next.js",
      "Design and implement RESTful APIs with NestJS",
      "Optimize MongoDB database queries and schemas",
      "Conduct code reviews and maintain code quality",
      "Collaborate in Agile development processes",
    ],
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "Node.js", "MongoDB"],
    image: "/NCCPlus.png",
  },
];


// Technology icon mapping (empty - icons removed for cleaner look)
export const techIconMap: Record<string, string> = {};

