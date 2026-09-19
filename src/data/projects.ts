import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "gigsure",
    title: "GigSure — Parametric Income Protection",
    subtitle: "AI-driven parametric income safety net with sub-second payouts for gig workers.",
    category: "Full-Stack",
    status: "Lead Project • In Progress",
    timeline: "2026 — Present",
    featured: true,
    summary: "Automated parametric insurance platform designed to protect gig workers against severe income losses caused by weather anomalies, localized curfews, or urban disruptions through real-time telemetry and automated claim verification.",
    problemStatement: "Gig workers (food delivery partners, ride-hailing drivers) suffer immediate income loss during extreme climate events or localized civic shutdowns. Traditional insurance claims require manual paperwork, days of processing, and high administrative friction that gig workers cannot afford.",
    myRole: "Lead Full-Stack Architect & Core Developer. Designed the Spring Boot microservices backend, engineered the relational schema in MySQL, implemented JWT authentication & role-based access control, and built the interactive React driver dashboard.",
    architectureOverview: "GigSure operates on a decoupled client-server model. The Spring Boot backend exposes REST APIs for policy management, automated telemetry ingestion, anomaly validation, fraud detection heuristics, and instant wallet payout execution. Frontend React client provides driver onboarding, real-time risk indicators, and instant claim tracking.",
    architectureFlow: {
      title: "Parametric Claim & Payout Execution Flow",
      steps: [
        {
          step: 1,
          label: "External Trigger Event",
          desc: "IoT or weather API detects extreme rain, flood, or civic curfew in driver's active zone.",
          iconName: "Zap"
        },
        {
          step: 2,
          label: "Policy Validation",
          desc: "Spring Boot service validates policy status, coverage threshold, and driver active hours.",
          iconName: "ShieldCheck"
        },
        {
          step: 3,
          label: "AI Anomaly & Fraud Check",
          desc: "Automated fraud scoring algorithm cross-checks GPS telemetry and historical disruption data.",
          iconName: "Cpu"
        },
        {
          step: 4,
          label: "Instant Payout Dispatch",
          desc: "Direct digital payout calculation and wallet credit execution with audit log entry.",
          iconName: "Wallet"
        }
      ]
    },
    keyFeatures: [
      "RESTful API ecosystem for policy creation, premium calculation, and driver claims",
      "Automated claim evaluation pipeline requiring zero manual claims filing from workers",
      "Robust Security with JWT authentication, BCrypt password hashing, and Role-Based Access Control (RBAC)",
      "Relational MySQL schema optimized with indexation for fast geospatial and policy queries",
      "Responsive React UI with real-time risk maps, policy management, and claim status timeline"
    ],
    techStack: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "React 18",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Postman"
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring zero-latency claim trigger without false-positive claims from unverified drivers.",
        solution: "Engineered a multi-stage validation service in Spring Boot that requires both external environmental threshold verification and historical driver telemetry validation before triggering payout."
      },
      {
        challenge: "Preventing unauthorized claim manipulation and protecting financial transactions.",
        solution: "Implemented strict JWT token validation middleware with role-based access control separating Driver, Underwriter, and Admin API endpoints."
      }
    ],
    outcomesAndMetrics: [
      "Sub-second claim processing time from environmental trigger signal to payout authorization",
      "100% automated fraud pre-screening pipeline eliminating manual adjuster overhead",
      "Fully documented OpenAPI/Postman collection for seamless integration"
    ],
    githubUrl: "https://github.com/thanmay0718",
    liveDemoUrl: "https://github.com/thanmay0718"
  },
  {
    id: "ecommerce-platform",
    title: "Enterprise E-Commerce Engine",
    subtitle: "High-concurrency Spring Boot API with JWT security & ACID order isolation.",
    category: "Backend & API",
    status: "Completed",
    timeline: "Jan 2026 — May 2026",
    featured: true,
    summary: "Comprehensive e-commerce application featuring JWT authentication, role-based authorization, catalog search, persistent shopping cart management, and transaction-safe order execution.",
    problemStatement: "Modern e-commerce backends require strict transaction isolation, consistent product inventory counts during concurrent checkouts, and secure customer data privacy.",
    myRole: "Backend Developer & Full-Stack Architect. Built the relational database model in MySQL, wrote Spring Boot controllers and service layers, and integrated the React user interface.",
    architectureOverview: "Modular Spring Boot application following standard layered architecture (Controller, Service, Repository, DTO). Uses JPA/Hibernate for database interaction with MySQL, protected by Spring Security filters.",
    keyFeatures: [
      "JWT-authenticated user registration, login, and token refresh workflow",
      "Role-Based Access Control (RBAC) distinguishing Customer and Admin operations",
      "RESTful Endpoints for Product Management, Dynamic Search, Filtering, and Cart Operations",
      "ACID-compliant order processing using Spring @Transactional annotations",
      "Dynamic React frontend with product catalog grid, cart drawer, and order history view"
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "MySQL",
      "React",
      "Tailwind CSS"
    ],
    challengesAndSolutions: [
      {
        challenge: "Preventing race conditions during simultaneous inventory deductions for popular items.",
        solution: "Applied relational database locks and Spring transactional boundaries to guarantee inventory consistency."
      }
    ],
    outcomesAndMetrics: [
      "Complete REST API coverage tested across 25+ Postman endpoints",
      "[FILL: UI redesign notes, extra backend payment features, throughput benchmarks]"
    ],
    githubUrl: "https://github.com/thanmay0718",
    liveDemoUrl: "https://github.com/thanmay0718",
    fillPlaceholders: [
      "UI redesign notes (e.g. glassmorphism cart drawer, smooth animations)",
      "Extra backend features (e.g. Stripe/Razorpay integration, email receipt dispatch)",
      "Performance benchmarks or test coverage metrics"
    ]
  },
  {
    id: "homeease",
    title: "HomeEase — Service Booking Platform",
    subtitle: "On-demand service orchestration system with multi-role portals & slot scheduling.",
    category: "Full-Stack",
    status: "Completed",
    timeline: "Nov 2025 — Dec 2025",
    featured: true,
    summary: "Multi-role web application designed to connect homeowners with verified service professionals for plumbing, electrical, and appliance repair with real-time scheduling.",
    problemStatement: "Urban households face difficulty finding trusted local service providers with transparent pricing and real-time slot booking.",
    myRole: "Full-Stack Engineer. Designed the normalized MySQL database schema for service categories, provider availability, and customer bookings, and built the Spring Boot REST backend.",
    architectureOverview: "Dual portal architecture (Customer & Service Admin) communicating with a central Spring Boot REST API. MySQL database handles normalized entities for Users, Services, Service Providers, and Bookings.",
    keyFeatures: [
      "Role-Based User Portals (Customer, Service Provider, System Admin)",
      "Service Catalog with filterable categories, pricing tiers, and slot selection",
      "REST API suite managing appointment creation, status tracking, and cancellation",
      "Normalized relational database design avoiding data redundancy and ensuring integrity"
    ],
    techStack: [
      "Spring Boot",
      "Java",
      "React",
      "MySQL",
      "REST APIs",
      "Postman",
      "VS Code"
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing conflicting booking time slots across independent service providers.",
        solution: "Implemented SQL validation logic and custom Spring Boot exception handling to prevent double-booking."
      }
    ],
    outcomesAndMetrics: [
      "Clean modular code structure adhering to OOP principles and SOLID design",
      "Intuitive booking flow reducing booking confirmation steps to under 1 minute"
    ],
    githubUrl: "https://github.com/thanmay0718",
    liveDemoUrl: "https://github.com/thanmay0718"
  },
  {
    id: "capstone-sentiment",
    title: "Multilingual Aspect Sentiment Engine",
    subtitle: "NLP intelligence platform for fine-grained aspect sentiment & stance classification.",
    category: "AI & Analytics",
    status: "Capstone • Academic Research",
    timeline: "2026",
    featured: false,
    summary: "Advanced NLP intelligence platform for extracting fine-grained aspect sentiment and stance classification across multilingual text streams.",
    problemStatement: "Generic sentiment analysis fails to identify target-specific opinions in complex multilingual sentences (e.g. praising battery life while criticizing device price).",
    myRole: "Primary Developer & NLP Researcher.",
    architectureOverview: "Machine Learning pipeline integrated with a web dashboard for inputting text corpora, performing aspect extraction, and visualizing stance heatmaps.",
    keyFeatures: [
      "Multilingual aspect term extraction and sentiment classification",
      "Stance intelligence mapping (In-Favor, Against, Neutral towards target entities)",
      "Interactive analytics dashboard presenting aspect-level distribution graphs"
    ],
    techStack: [
      "Python",
      "NLP",
      "React",
      "REST APIs",
      "PostgreSQL / MySQL",
      "[FILL: Specific ML Framework e.g. PyTorch / HuggingFace / Transformers]"
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling code-mixed multilingual text and target ambiguity.",
        solution: "Applied transformer-based fine-tuning and aspect-entity alignment techniques."
      }
    ],
    outcomesAndMetrics: [
      "[FILL: Benchmark accuracy, F1-score results, supervisor credit or publication details]"
    ],
    githubUrl: "https://github.com/thanmay0718",
    fillPlaceholders: [
      "Problem context & specific target domain",
      "Machine Learning model architecture & tools (e.g., mBERT, XLM-RoBERTa)",
      "Evaluation metrics (Accuracy %, F1-Score)",
      "Faculty supervisor or lab credit if applicable"
    ]
  }
];
