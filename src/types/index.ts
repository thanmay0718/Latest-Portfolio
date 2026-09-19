export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Backend & API' | 'Cloud & Systems' | 'AI & Analytics';
  status: string;
  timeline: string;
  summary: string;
  featured: boolean;
  problemStatement: string;
  myRole: string;
  architectureOverview: string;
  architectureFlow?: {
    title: string;
    steps: {
      step: number;
      label: string;
      desc: string;
      iconName?: string;
    }[];
  };
  keyFeatures: string[];
  techStack: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  outcomesAndMetrics: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  fillPlaceholders?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Core';
    highlight?: boolean;
    icon?: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  partner?: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  techStack: string[];
  type: 'Internship' | 'Project' | 'Leadership';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skillsProven: string;
  credentialIdPlaceholder: string;
  verificationUrlPlaceholder: string;
  featured: boolean;
  badgeBgColor?: string;
  fillNotes?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  cgpa: string;
  maxCgpa: string;
  location: string;
  coursework: string[];
  achievements: string[];
  fillNotes?: string[];
}

export interface ProfileData {
  name: string;
  nickname: string;
  roles: string[];
  headline: string;
  aboutStory: string[];
  placementGoal: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  stats: {
    label: string;
    value: number;
    suffix: string;
    detail: string;
  }[];
}
