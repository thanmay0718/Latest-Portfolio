import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: "Core Languages",
    description: "Strong object-oriented foundational languages and script programming.",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Advanced", highlight: true, description: "OOP, Collections Framework, Multithreading, Streams API" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true, description: "Async/Await, DOM, Event Loop, Closures" },
      { name: "SQL", level: "Advanced", highlight: true, description: "Complex Joins, Indexing, Transactions, Stored Procedures" },
      { name: "Python", level: "Core", description: "Scripting, Data Handling, Basic ML/NLP Libraries" },
      { name: "C", level: "Core", description: "Pointers, Memory Management, Procedural Fundamentals" }
    ]
  },
  {
    title: "Backend & Microservices",
    description: "Enterprise Java backend engineering, RESTful API design, and security enforcement.",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: "Advanced", highlight: true, description: "Auto-configuration, Spring Data JPA, REST Controllers" },
      { name: "Spring Security", level: "Advanced", highlight: true, description: "Custom Filters, UserDetailsService, Auth Providers" },
      { name: "JWT (JSON Web Tokens)", level: "Advanced", highlight: true, description: "Stateless Auth, Token Signing, Claims, Refresh Tokens" },
      { name: "REST APIs", level: "Advanced", highlight: true, description: "Clean Contract Design, HTTP Verbs, Status Codes, OpenAPI" },
      { name: "System Architecture", level: "Proficient", description: "Layered Architecture, DTO Pattern, Exception Handling" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern, interactive user interfaces with React and utility-first CSS.",
    icon: "Layout",
    skills: [
      { name: "React 18", level: "Advanced", highlight: true, description: "Hooks, Context API, Component Lifecycle, State Optimization" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true, description: "Custom Tokens, Glassmorphic UI, Responsive Grids" },
      { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic Markup, Flexbox, CSS Grid, Custom Properties" },
      { name: "Framer Motion", level: "Proficient", description: "Scroll Animations, Page Transitions, Staggered Reveals" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational database management, schema normalization, and query performance.",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", highlight: true, description: "Schema Design, Foreign Keys, Transaction Management, Query Optimization" },
      { name: "PostgreSQL", level: "Proficient", highlight: true, description: "ACID Compliance, JSONB Queries, Relational Schemas" },
      { name: "DBMS Concepts", level: "Advanced", description: "Normalization (1NF-3NF), ER Modeling, Indexing Strategies" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    description: "Containerization, cloud fundamentals, and version control workflows.",
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "Proficient", highlight: true, description: "Containerization, Dockerfiles, Container Execution" },
      { name: "Microsoft Azure", level: "Proficient", highlight: true, description: "Azure Fundamentals (AZ-900), Cloud Concepts, Resource Groups" },
      { name: "Oracle Cloud (OCI)", level: "Proficient", description: "OCI Core Infrastructure, Compute Instances, Cloud Storage" },
      { name: "Git & GitHub", level: "Advanced", description: "Branching Strategies, Pull Requests, Version Control" }
    ]
  },
  {
    title: "Developer Tools",
    description: "Professional IDEs, API testing utilities, and workflow software.",
    icon: "Wrench",
    skills: [
      { name: "IntelliJ IDEA", level: "Advanced", highlight: true, description: "Primary IDE for Java & Spring Boot Debugging" },
      { name: "Postman", level: "Advanced", highlight: true, description: "API Endpoint Testing, Environment Variables, Mocking" },
      { name: "VS Code", level: "Advanced", description: "Frontend Development, Extension Ecosystem" }
    ]
  },
  {
    title: "CS Fundamentals",
    description: "Academic rigor and computer science principles powering engineering solutions.",
    icon: "GraduationCap",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", highlight: true, description: "Arrays, Trees, Graphs, Sorting, Dynamic Programming" },
      { name: "Object-Oriented Programming", level: "Advanced", highlight: true, description: "Abstraction, Encapsulation, Inheritance, Polymorphism" },
      { name: "Computer Networks", level: "Proficient", description: "TCP/IP Suite, HTTP/HTTPS, Sockets, DNS, OSI Layers" }
    ]
  }
];
