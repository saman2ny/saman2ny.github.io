export interface CompanyExperience {
  name: string;
  role: string;
  period: string;
}

export interface Highlight {
  title: string;
  body: string;
}

export interface Resume {
  fileName: string;
  uploadDate: string;
  resumeUrl: string;
}

export const companies: CompanyExperience[] = [
  {
    name: "Virtusa",
    role: "Associate Architect",
    period: "Jul 2025 - Jun 2026",
  },
  {
    name: "Temenos",
    role: "Associate Engineer",
    period: "Jul 2021 - Oct 2025",
  },
  {
    name: "Ducont India Systems",
    role: "Java Developer",
    period: "Jun 2019 - Jul 2021",
  },
];

export const highlights: Highlight[] = [
  {
    title: "What I build",
    body: "Revenue-generating products, internal tools, and data-backed platforms.",
  },
  {
    title: "How I work",
    body: "Pragmatic architecture, clear delivery, and a bias toward production-ready systems.",
  },
  {
    title: "Core stack",
    body: "TypeScript, Java, Spring Boot, cloud infrastructure, and API-heavy platforms.",
  },
];

export const resume: Resume = {
  fileName: "Sam_Antony_Joseph_Resume",
  uploadDate: "04/07/2026",
  resumeUrl: "/resume.pdf", // Replace with actual resume URL
};

export const experienceTitle = "The DNA of My Visual Language";
export const experienceDescription =
  "The current design already carries the stack. This layer adds the companies behind that experience so the page feels more personal and grounded in real work history.";

