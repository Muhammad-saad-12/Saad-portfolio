/* ===== EDIT YOUR CONTENT HERE ===== */
const EMAIL = "saad.work006@gmail.com";
const expertise = [
  {
    i: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    t: "Full-Stack Web Development",
    d: "Building responsive, modern, and interactive web applications with clean frontend component architecture and seamless backend integration. Creating maintainable user interfaces backed by scalable server systems.",
    g: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript(ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Responsive UI",
    ],
  },
  {
    i: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    t: "Backend Architecture & Systems",
    d: "Architecting reliable, secure server-side applications, business logic, and database schemas. Implementing clean MVC patterns, object-oriented design, authentication, and optimized data transactions.",
    g: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Authentication & Authorization",
      "MySQL",
      "MongoDB",
      "Mongoose ODM",
      "PostgreSQL",
      "Prisma ORM",
      "MVC Architecture",
      "Multi-Tenant Architecture",
      "Role-Based Access Control (RBAC)"
    ],
  },
  {
    i: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    t: "RESTful API Design & Integration",
    d: "Designing and integrating robust REST APIs, web services, and asynchronous workflows. Ensuring secure data transmission, JSON serialization, third-party API connectivity, and end-to-end Postman verification.",
    g: [
      "RESTful APIs",
      "API Integration",
      "Postman",
      "JSON",
      "Authentication",
      "Web Services",
      "CRUD",
    ],
  },
  {
    i: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1H7a4 4 0 0 0-4 4v2a4 4 0 0 0 2 3.46V18a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-1.54A4 4 0 0 0 21 13v-2a4 4 0 0 0-4-4h-1V6a4 4 0 0 0-4-4z"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M10 16h4"></path></svg>`,
    t: "AI-Powered Applications & Automation",
    d: "Developing intelligent digital solutions by integrating Generative AI APIs, LLMs, and smart workflow automations. Building conversational chatbots, AI-assisted development tools, and practical automated systems.",
    g: [
      "Antigravity CLI",
      "Claude Code",
      "Prompt Engineering",
      "Generative AI",
      "LLM APIs",
      "OpenAI",
      "AI Chatbots",
      "NLP",
      "Workflow Automation",
      "Google Gemini API",
      "Conversational AI Integration"

    ],
  },
];
const techIcons = {
  // Frontend
  "React.js": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse></svg>`,
  "Next.js": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9 16.5V7.5l9 11V7.5"></path></svg>`,
  "JavaScript": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="M8 17v-4a1 1 0 0 1 1-1"></path><path d="M14 13a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0"></path></svg>`,
  "TypeScript": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="M8 9h4M10 9v8"></path><path d="M14 15.5c.5.5 1 1 2 1s1.5-.5 1.5-1.25c0-1.5-2.5-1.25-2.5-2.5 0-.75.5-1.25 1.5-1.25s1.5.5 2 1"></path></svg>`,
  "Redux Toolkit": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse><circle cx="12" cy="12" r="1.5"></circle></svg>`,
  "Vite": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 9 22 22 7 12 2"></polygon><polygon points="13 3 8 13 12 13 11 19 16 9 12 9 13 3"></polygon></svg>`,
  "HTML5 & CSS3": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>`,
  "Tailwind CSS": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12c1.5-3 3.5-3 5 0 1.5 3 3.5 3 5 0"></path><path d="M2 17c1.5-3 3.5-3 5 0 1.5 3 3.5 3 5 0"></path></svg>`,
  "Framer Motion": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2h16v8h-8zM4 10h8l8 8H4zM4 18h8v6z"></path></svg>`,
  "Radix UI": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="4"></circle><path d="M17 3v8a4 4 0 0 1-4 4H7"></path><rect x="13" y="13" width="8" height="8" rx="1"></rect></svg>`,
  "Bootstrap": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M9 8h4.5a2 2 0 0 1 0 4H9V8z"></path><path d="M9 12h5a2 2 0 0 1 0 4H9v-4z"></path></svg>`,
  "jQuery": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12M15 9.5a3 3 0 0 0-6 0c0 3 6 2 6 5a3 3 0 0 1-6 0"></path></svg>`,
  "Responsive UI": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="14" height="12" rx="2"></rect><rect x="14" y="9" width="8" height="12" rx="2"></rect></svg>`,

  // Backend
  "PHP": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="7"></ellipse><path d="M7 10h3a1.5 1.5 0 0 1 0 3H7v3"></path><path d="M14 10h3a1.5 1.5 0 0 1 0 3h-3v3"></path></svg>`,
  "Laravel": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  "Node.js": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2z"></path><path d="M12 12v8"></path><path d="m12 12 8-4.5"></path><path d="m12 12-8-4.5"></path></svg>`,
  "Express.js": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  "Socket.IO": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m14 7-5 6h4l-3 5 7-7h-4l3-4z"></path></svg>`,
  "Livewire": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
  "JWT": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="m9 12 2 2 4-4"></path><path d="M12 3v3M12 18v3M3 12h3M18 12h3"></path></svg>`,
  "RESTful APIs": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  "REST APIs": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  "MVC Pattern": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  "Object-Oriented Programming": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
  "Auth & Security": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,

  // Databases
  "PostgreSQL": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="8" ry="4"></ellipse><path d="M4 7v6c0 2.2 3.6 4 8 4s8-1.8 8-4V7"></path><path d="M4 13v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4"></path><path d="M12 11c-2 0-3 1-3 2v2M12 11c2 0 3 1 3 2v2"></path></svg>`,
  "MySQL": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  "MongoDB": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z"></path><path d="M12 2v20"></path></svg>`,
  "Prisma": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5 12 2l8 17.5-8 3z"></path><path d="M12 2v20.5"></path><path d="M12 13l8 6.5"></path></svg>`,
  "Mongoose": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="9" ry="5"></ellipse><path d="M7 12c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"></path><path d="M10 12a2 2 0 1 0 4 0"></path><circle cx="9" cy="10" r="1"></circle><circle cx="15" cy="10" r="1"></circle></svg>`,
  "Relational Database Design": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="8" height="6" rx="1"></rect><rect x="14" y="4" width="8" height="6" rx="1"></rect><rect x="8" y="14" width="8" height="6" rx="1"></rect><line x1="6" y1="10" x2="6" y2="17"></line><line x1="6" y1="17" x2="8" y2="17"></line><line x1="18" y1="10" x2="18" y2="17"></line><line x1="18" y1="17" x2="16" y2="17"></line></svg>`,
  "CRUD Operations": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
  "Data Integrity": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,

  // Tools & Platforms
  "Docker": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 14c1-1 3-1 4 0 1 1 3 1 4 0 1-1 3-1 4 0 1 1 3 1 4 0 1-1 3-1 4 0"></path><rect x="5" y="8" width="3" height="3"></rect><rect x="9" y="8" width="3" height="3"></rect><rect x="13" y="8" width="3" height="3"></rect><rect x="9" y="5" width="3" height="3"></rect><rect x="13" y="5" width="3" height="3"></rect><path d="M2 14a10 10 0 0 0 19 2c1-2 1-5-1-6-1 0-2 1-3 1"></path></svg>`,
  "Git": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
  "GitHub": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  "Postman": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
  "Cloudinary": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path><circle cx="12" cy="13" r="2.5"></circle></svg>`,
  "Composer": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
  "AWS": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
  "Linux": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,

  // AI Tools
  "Google Gemini API": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z"></path><path d="M12 7.5 13.5 11 17 12l-3.5 1-1.5 3.5L10.5 13 7 12l3.5-1L12 7.5z"></path></svg>`,
  "Claude": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  "Claude Code": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line><circle cx="18" cy="8" r="2"></circle></svg>`,
  "Cursor": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3"></polygon></svg>`,
  "GitHub Copilot": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1H7a4 4 0 0 0-4 4v2a4 4 0 0 0 2 3.46V18a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-1.54A4 4 0 0 0 21 13v-2a4 4 0 0 0-4-4h-1V6a4 4 0 0 0-4-4z"></path></svg>`,
  "ChatGPT": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><circle cx="9" cy="10" r="1"></circle><circle cx="12" cy="10" r="1"></circle><circle cx="15" cy="10" r="1"></circle></svg>`,
  "Vercel AI SDK": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 3 22 21 2 21 12 3"></polygon><path d="M12 10v4M12 17h.01"></path></svg>`,
  "LLM Integration": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="3"></rect><path d="M7 9h2M12 9h5M7 13h5M15 13h2"></path><circle cx="6" cy="20" r="1"></circle><circle cx="12" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle><line x1="6" y1="18" x2="6" y2="19"></line><line x1="12" y1="18" x2="12" y2="19"></line><line x1="18" y1="18" x2="18" y2="19"></line></svg>`,
  "Prompt Engineering": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 4-2 2 5 5 2-2-5-5z"></path><path d="m4 15 2 2 5-5-2-2-5 5z"></path><line x1="2" y1="22" x2="8" y2="16"></line><circle cx="19" cy="5" r="2"></circle></svg>`,
};

const defaultSkillIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;

const stack = [
  {
    title: "Frontend Development",
    subtitle: "UI engineering, client-side frameworks, and responsive design",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Framer Motion",
      "Radix UI",
      "Bootstrap",
      "jQuery",
      "Responsive UI",
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Server-side architecture, MVC frameworks, and API engineering",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Socket.IO",
      "Livewire",
      "JWT",
      "RESTful APIs",
      "MVC Pattern",
      "Object-Oriented Programming",
      "Auth & Security",
    ],
  },
  {
    title: "Databases & Storage",
    subtitle: "Relational modeling, NoSQL systems, and CRUD operations",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Prisma",
      "Mongoose",
      "Relational Database Design",
      "CRUD Operations",
      "Data Integrity",
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Version control, API testing, deployment, and environments",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "AWS",
      "Linux",
      "Composer",
    ],
  },
  {
    title: "AI Tools & Automation",
    subtitle: "AI-augmented development workflows, LLMs, smart agents, and prompt engineering",
    highlight: true,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1H7a4 4 0 0 0-4 4v2a4 4 0 0 0 2 3.46V18a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-1.54A4 4 0 0 0 21 13v-2a4 4 0 0 0-4-4h-1V6a4 4 0 0 0-4-4z"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M10 16h4"></path></svg>`,
    skills: [
      "Google Gemini API",
      "Claude",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "ChatGPT",
      "Vercel AI SDK",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
];
const jobs = [
  {
    role: "Full-Stack Developer Intern",
    co: "TNV Solutions",
    loc: "Gujrat, Punjab, Pakistan",
    date: "June 2026 – October 2026",
    badge: "Internship",
    d: [
      "Contributed to full-stack web application development across responsive frontend interfaces and backend services.",
      "Engineered application features and server-side components utilizing PHP, Laravel, and modern JavaScript.",
      "Assisted with RESTful API integrations, backend business logic, and MySQL database operations.",
      "Collaborated in team workflows, utilizing Postman for API endpoint testing and Git for version control.",
    ],
    g: [
      "PHP",
      "Laravel",
      "JavaScript",
      "MySQL",
      "RESTful APIs",
      "Postman",
      "Bootstrap",
      "Blade",
      "Git",
    ],
  },
];
/* Projects data - customized with matched screenshots */
const projects = [
  {
    title: "B2B Expense Tracker",
    category: "Full-Stack",
    badgeClass: "project-card__badge--fullstack",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(15, 23, 42, 0.95))",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    description: "A full-stack B2B expense tracking and invoice management dashboard featuring secure JWT authentication, MongoDB aggregation pipelines for financial analytics, Recharts visualization, and PDF/CSV report generation.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts"],
    repo: "https://github.com/Muhammad-saad-12/b2b-expense-tracker",
    demo: "https://b2b-expense-tracker.vercel.app",
    image: "img/03_B2B_Expense_Tracker.png",
  },
  {
    title: "DineFlow — Food Delivery & Restaurant Platform",
    category: "MERN Stack",
    badgeClass: "project-card__badge--mern",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(15, 23, 42, 0.95))",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,
    description: "An advanced full-stack MERN restaurant management and on-demand food delivery platform featuring multi-vendor management, AI menu generation, real-time order tracking, and payment processing.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    repo: "https://github.com/Muhammad-saad-12/Food-Delivery-Project",
    demo: "https://restaurent-system-ten.vercel.app",
    image: "img/02_DineFlow.png",
  },
  {
    title: "FlightDesk PK — Travel Agency & Ticket Booking",
    category: "Laravel",
    badgeClass: "project-card__badge--laravel",
    gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(15, 23, 42, 0.95))",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>`,
    description: "A full-stack Travel Agency Management and B2B consolidator platform built with Laravel, Livewire, and Tailwind CSS. Features universal GDS PNR decoding, ticket inventory management, and B2B credit ledgers.",
    tags: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    repo: "https://github.com/Muhammad-saad-12/Travel-Agency-Project",
    demo: "https://travel-agency-project-production.up.railway.app/",
    image: "img/01_FlightDesk_PK.png",
  },
  {
    title: "StudyMind AI — AI-Powered Study Workspace",
    category: "AI / Next.js",
    badgeClass: "project-card__badge--ai",
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(15, 23, 42, 0.95))",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>`,
    description: "A full-stack AI Study Workspace built with Next.js, TypeScript, Prisma, PostgreSQL, and Google Gemini API featuring PDF document parsing, structured summaries, interactive flashcards, and auto-graded quizzes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Gemini API"],
    repo: "https://github.com/Muhammad-saad-12/ai-powered-study-tool",
    demo: "https://ai-powered-study-tool-ten.vercel.app",
    image: "img/04_StudyMind_AI.png",
  },
  {
    title: "Project Management Platform",
    category: "Next.js",
    badgeClass: "project-card__badge--next",
    gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(15, 23, 42, 0.95))",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
    description: "A production-grade, multi-tenant Jira/Trello collaborative workspace built with Next.js, TypeScript, Prisma, and PostgreSQL, featuring RBAC, drag-and-drop Kanban boards, activity logs, and real-time comments.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Kanban"],
    repo: "https://github.com/Muhammad-saad-12/Project-Management-Platform-",
    demo: "https://project-management-platform-eta.vercel.app",
    image: "img/05_Project_Management.png",
  },
  {
    title: "TaskFlow — Task Management Dashboard",
    category: "React.js",
    badgeClass: "project-card__badge--react",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(15, 23, 42, 0.95))",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    description: "A responsive Task Management Dashboard built with React and Tailwind CSS featuring dynamic task status workflows, priority categorization, deadline tracking, and interactive state management.",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "State Management"],
    repo: "https://github.com/Muhammad-saad-12/task-management-dashboard",
    demo: "https://task-management-dashboard-ruddy-beta.vercel.app",
    image: "img/06_TaskFlow.png",
  },
];
/* Certifications & Awards data */
const certs = [
  {
    title: "Google AI Fundamentals",
    issuer: "Coursera",
    category: "Professional Certification",
    color: "#3b82f6",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    link: "",
  },
  {
    title: "Google Antigravity National Hackathon — Regional Qualifiers",
    issuer: "Google for Developers",
    category: "Hackathon Award",
    color: "#eab308",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>`,
    link: "",
  },
];
/* ===== END OF CONTENT ===== */

const $ = (s) => document.querySelector(s);
const tags = (a) => a.map((x) => `<span class="tag">${x}</span>`).join("");
$("#expGrid").innerHTML = expertise
  .map(
    (e) =>
      `<div class="expertise__card rv">
        <div class="expertise__icon">${e.i}</div>
        <h3 class="expertise__card-title">${e.t}</h3>
        <p class="expertise__card-desc">${e.d}</p>
        <div class="expertise__tags">${e.g.map((t) => `<span class="expertise__tag">${t}</span>`).join("")}</div>
      </div>`,
  )
  .join("");
$("#stack").innerHTML = stack
  .map(
    (cat) => `
    <div class="tech-card rv ${cat.highlight ? "tech-card--ai" : ""}">
      <div class="tech-card__header">
        <div class="tech-card__header-left">
          <div class="tech-card__icon">${cat.icon}</div>
          <div>
            <h3 class="tech-card__title">${cat.title}</h3>
            <p class="tech-card__subtitle">${cat.subtitle}</p>
          </div>
        </div>
        <span class="tech-card__badge">${cat.skills.length} skills</span>
      </div>
      <div class="tech-card__body">
        <div class="tech-card__pills">
          ${cat.skills
            .map(
              (skill) => `
            <div class="skill-pill">
              <span class="skill-pill__icon">${techIcons[skill] || defaultSkillIcon}</span>
              <span class="skill-pill__name">${skill}</span>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>`,
  )
  .join("");
$("#tl").innerHTML = jobs
  .map(
    (j) => `
    <div class="timeline-item rv">
      <div class="timeline-spine">
        <div class="timeline-node">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <div class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span>${j.date}</span>
        </div>
        <div class="tl-card">
          <div class="tl-card__header">
            <div class="tl-card__role-row">
              <h3 class="tl-card__title">${j.role}</h3>
              <span class="tl-card__type-badge">${j.badge || "Internship"}</span>
            </div>
            <div class="tl-card__meta">
              <span class="tl-card__company">${j.co}</span>
              <span class="tl-card__sep">·</span>
              <span class="tl-card__location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${j.loc}
              </span>
            </div>
          </div>
          <div class="tl-card__body">
            <ul class="tl-card__bullets">
              ${j.d
                .map(
                  (bullet) => `
                <li class="tl-card__bullet">
                  <svg class="tl-card__bullet-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>${bullet}</span>
                </li>`,
                )
                .join("")}
            </ul>
          </div>
          <div class="tl-card__tags">
            ${j.g.map((t) => `<span class="tl-card__tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>`,
  )
  .join("");
const projGrid = $("#projGrid");
if (projGrid) {
  projGrid.innerHTML = projects
    .map(
      (p) => `
    <div class="project-card rv">
      <div class="project-card__image-wrap">
        ${
          p.image
            ? `<img src="${p.image}" class="project-card__img" alt="${p.title}" loading="lazy" />`
            : `<div class="project-card__placeholder" style="background: ${p.gradient};">
                <div class="project-card__placeholder-pattern"></div>
                <div class="project-card__placeholder-content">
                  <div class="project-card__placeholder-icon">${p.icon}</div>
                  <span class="project-card__placeholder-label">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    Screenshot Placeholder
                  </span>
                </div>
              </div>`
        }
        <span class="project-card__badge ${p.badgeClass}">${p.category}</span>
        <div class="project-card__overlay">
          ${
            p.demo
              ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-card__overlay-btn project-card__overlay-btn--primary">Live Demo ↗</a>`
              : ""
          }
          ${
            p.repo
              ? `<a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="project-card__overlay-btn project-card__overlay-btn--secondary">GitHub ↗</a>`
              : ""
          }
        </div>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        <div class="project-card__tags">
          ${p.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join("")}
        </div>
        <div class="project-card__actions">
          ${
            p.repo
              ? `<a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="project-action-link" aria-label="GitHub Repository">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>Code</span>
                </a>`
              : ""
          }
          ${
            p.demo
              ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-action-link project-action-link--primary" aria-label="Live Demo">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>Live Demo</span>
                </a>`
              : ""
          }
        </div>
      </div>
    </div>`,
    )
    .join("");
}
const certGrid = $("#certGrid");
if (certGrid) {
  certGrid.innerHTML = certs
    .map(
      (c) => `
    <div class="cert-card rv" style="--cert-color: ${c.color}">
      <div class="cert-card__top">
        <div class="cert-card__icon">
          ${c.icon}
        </div>
        ${c.category ? `<span class="cert-card__badge">${c.category}</span>` : ""}
      </div>
      <div class="cert-card__content">
        <h3 class="cert-card__title">${c.title}</h3>
        <div class="cert-card__issuer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span>${c.issuer}</span>
        </div>
      </div>
      ${
        c.link
          ? `<div class="cert-card__footer">
              <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="cert-card__link">
                <span>Verify Credential</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>`
          : `<div class="cert-card__footer">
              <span class="cert-card__status">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Verified Credential</span>
              </span>
            </div>`
      }
    </div>`,
    )
    .join("");
}

// scroll reveal + skill bars
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        const f = e.target.querySelector(".fill");
        if (f) f.style.width = f.dataset.w + "%";
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

// navbar scroll effect
(() => {
  const nav = $("#navbar") || $("nav");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add("navbar--scrolled");
    } else {
      nav.classList.remove("navbar--scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// mobile menu drawer
(() => {
  const menuToggle = $("#menuToggle") || $("#menu");
  const mobileMenu = $("#mobileMenu");
  const mobileOverlay = $("#mobileOverlay");
  const mobileClose = $("#mobileMenuClose");

  const openMenu = () => {
    if (mobileMenu) mobileMenu.classList.add("active");
    if (mobileOverlay) mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    if (mobileMenu) mobileMenu.classList.remove("active");
    if (mobileOverlay) mobileOverlay.classList.remove("active");
    const links = $("#links");
    if (links) links.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
      } else {
        const links = $("#links");
        if (links) links.classList.toggle("open");
      }
    });
  }

  if (mobileClose) mobileClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-menu__link, #links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

// contact form validation & mailto dispatch
(() => {
  const form = $("#form");
  if (!form) return;

  const nameInput = $("#name");
  const emailInput = $("#email");
  const msgInput = $("#message");
  const nameError = $("#nameError");
  const emailError = $("#emailError");
  const msgError = $("#messageError");

  const clearError = (input, errorEl) => {
    if (input) input.classList.remove("form-input--error");
    if (errorEl) errorEl.style.display = "none";
  };

  const showError = (input, errorEl) => {
    if (input) input.classList.add("form-input--error");
    if (errorEl) errorEl.style.display = "block";
  };

  [
    [nameInput, nameError],
    [emailInput, emailError],
    [msgInput, msgError],
  ].forEach(([input, errorEl]) => {
    if (input) {
      input.addEventListener("input", () => {
        if (input.value.trim()) clearError(input, errorEl);
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;

    if (!nameInput || !nameInput.value.trim()) {
      showError(nameInput, nameError);
      hasError = true;
    } else {
      clearError(nameInput, nameError);
    }

    if (!emailInput || !emailInput.value.trim()) {
      showError(emailInput, emailError);
      hasError = true;
    } else {
      clearError(emailInput, emailError);
    }

    if (!msgInput || !msgInput.value.trim()) {
      showError(msgInput, msgError);
      hasError = true;
    } else {
      clearError(msgInput, msgError);
    }

    if (hasError) return;

    const n = nameInput.value.trim();
    const contact = emailInput.value.trim();
    const m = msgInput.value.trim();

    const subject = encodeURIComponent("Portfolio Message from " + n);
    const body = encodeURIComponent(
      `Hi Muhammad Saad,\n\n${m}\n\n---\nSender: ${n}\nContact: ${contact}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  });
})();

// hero network animation
(() => {
  const c = $("#net"),
    x = c.getContext("2d");
  let w,
    h,
    P = [];
  const size = () => {
    w = c.width = c.offsetWidth;
    h = c.height = c.offsetHeight;
    P = Array.from({ length: Math.min(60, w / 20) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  };
  size();
  addEventListener("resize", size);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  (function loop() {
    x.clearRect(0, 0, w, h);
    P.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      x.fillStyle = "rgba(180,190,220,.5)";
      x.fillRect(p.x, p.y, 2, 2);
      for (let j = i + 1; j < P.length; j++) {
        const q = P[j],
          d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) {
          x.strokeStyle = `rgba(150,160,200,${0.15 * (1 - d / 130)})`;
          x.beginPath();
          x.moveTo(p.x, p.y);
          x.lineTo(q.x, q.y);
          x.stroke();
        }
      }
    });
    requestAnimationFrame(loop);
  })();
})();
