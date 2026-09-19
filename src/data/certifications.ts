import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: "azure-az900",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2025",
    skillsProven: "Demonstrates foundational knowledge of cloud concepts, Azure architectural components, core cloud services, security management, and cloud governance.",
    credentialIdPlaceholder: "Credential ID: [AZ900-M-XXXXXX]",
    verificationUrlPlaceholder: "https://learn.microsoft.com/en-us/users/thanmay0718/credentials",
    featured: true,
    badgeBgColor: "from-blue-600/20 to-cyan-500/10"
  },
  {
    id: "oracle-oci-2025",
    title: "Oracle Cloud Infrastructure 2025 Certification",
    issuer: "Oracle",
    year: "2025",
    skillsProven: "Validates expertise in Oracle Cloud Infrastructure core services, compute instance provisioning, Virtual Cloud Networks (VCN), and cloud storage architecture.",
    credentialIdPlaceholder: "Credential ID: [OCI-2025-XXXXXX]",
    verificationUrlPlaceholder: "https://mylearn.oracle.com/ou/learning-path/",
    featured: true,
    badgeBgColor: "from-red-600/20 to-orange-500/10",
    fillNotes: "Exact certification level/name (e.g., OCI Foundations Associate / Architect Associate)"
  }
];
