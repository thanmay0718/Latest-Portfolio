import { ProfileData } from '../types';

export interface ExtendedProfileData extends ProfileData {
  avatarUrl: string;
  handle: string;
}

export const profileData: ExtendedProfileData = {
  name: "Racha Tanmay Sri Vardhan",
  nickname: "Bunny",
  handle: "thanmay0718",
  avatarUrl: "/profile.jpg",
  roles: [
    "Full-Stack Developer",
    "Spring Boot Engineer",
    "React & Web Systems Builder",
    "Cloud & REST API Specialist"
  ],
  headline: "Architecting high-concurrency Spring Boot backend microservices and modern React applications with mathematical precision and secure RESTful design.",
  aboutStory: [
    "I am a passionate third-year Computer Science & Engineering undergraduate at KL University (2023–2027) with an academic CGPA of 8.97. My engineering journey is driven by a deep fascination with backend architecture, system security, and full-stack integration.",
    "Rather than treating software development as mere feature crafting, I focus on building robust, resilient systems: designing relational database schemas in MySQL & PostgreSQL, enforcing strict JWT-based role authorization, and optimizing REST APIs for low latency and high availability.",
    "My current primary goal is securing campus placement at top product-based software companies and innovative high-growth startups where I can engineer mission-critical systems and scale full-stack architectures."
  ],
  placementGoal: "Targeting Campus Placements at Top Product-Based Companies & High-Growth Engineering Startups",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "rachatanmay0718@gmail.com",
  github: "https://github.com/thanmay0718",
  linkedin: "https://www.linkedin.com/in/thanmay0718/",
  stats: [
    {
      label: "Academic CGPA",
      value: 8.97,
      suffix: " / 10",
      detail: "Top Tier Engineering Academic Standing at KL University"
    },
    {
      label: "Full-Stack Projects",
      value: 3,
      suffix: "+",
      detail: "Production-ready Spring Boot & React end-to-end applications"
    },
    {
      label: "Cloud Credentials",
      value: 2,
      suffix: "",
      detail: "Microsoft Azure AZ-900 & Oracle Cloud Certified"
    },
    {
      label: "AI/ML Internships",
      value: 1,
      suffix: "",
      detail: "Google for Developers & AICTE-EduSkills Virtual Internship"
    }
  ]
};
