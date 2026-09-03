export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
  credentialUrl?: string;
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: "D365 Technical Consultant",
    company: "AXM365",
    companyUrl: "https://axm365.com",
    location: "Skopje, North Macedonia",
    start: "Nov 2021",
    end: "Present",
    current: true,
    summary:
      "Building maintainable Dynamics 365 CE and Power Platform solutions for enterprise projects.",
    bullets: [
      "Design and develop Dataverse solutions using C# plugins, JavaScript and TypeScript web resources, PCF controls, model-driven apps, and Power Automate.",
      "Build integrations with external systems using custom APIs, Azure Functions, Azure Service Bus, Virtual Entities, and .NET services.",
      "Build Copilot agents and custom agent tooling, integrating business data, actions, and external services to extend agent capabilities within the Power Platform ecosystem.",
      "Work on ALM, CI/CD pipelines, solution deployments, patches, data migrations, and release processes across environments.",
      "Review code and architecture with a focus on maintainability, consistency, testing, and reusable development practices.",
      "Lead and coordinate the internship mentorship program, helping developers learn Dynamics 365 CE development through practical projects.",
    ],
    badges: [
      "Dynamics 365 CE",
      "Power Platform",
      "Dataverse",
      "Copilot Studio",
      "Copilot Agents",
      "Agent Tools",
      "C#",
      "TypeScript",
      "JavaScript",
      "Plugins",
      "PCF",
      "Azure",
      "ALM",
    ],
  },
  {
    role: "Part-time Software Developer",
    company: "Vidict",
    companyUrl: "https://vidict.net",
    location: "Skopje, North Macedonia",
    start: "Oct 2018",
    end: "Dec 2020",
    summary:
      "Worked on web applications, APIs, backend development, and relational databases.",
    bullets: [
      "Developed web applications and backend services using PHP, Java Spring, and MVC architecture.",
      "Worked with MySQL and PostgreSQL on database design, queries, performance, and application data.",
      "Built practical experience with APIs, server-side development, and software architecture.",
    ],
    badges: ["Java", "PHP", "PostgreSQL", "MySQL"],
  },
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: {
  role: string;
  company: string;
  start: string;
  end: string;
}[] = [
  {
    role: "Software Developer Intern — Dynamics AX 2012",
    company: "Axapta Masters",
    start: "Sep 2021",
    end: "Nov 2021",
  },
  {
    role: "Computer Software & Hardware Repair Technician",
    company: "Maksolution",
    start: "Jun 2012",
    end: "Aug 2018",
  },
];

export const education: Education[] = [
  {
    degree: "University Studies",
    field: "Information Sciences and Computer Engineering",
    school: "Ss. Cyril and Methodius University in Skopje",
    start: "2018",
    end: "2022",
  },
  {
    degree: "High School Diploma",
    field: "Computer Technology and Automation",
    school: "Nikola Karev, Strumica",
    start: "2014",
    end: "2018",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Dynamics & Power Platform",
    skills: [
      "Dynamics 365 CE",
      "Dataverse",
      "Power Platform",
      "Model-driven Apps",
      "Power Automate",
      "Copilot Studio",
      "Copilot Agents",
      "PCF",
      "Custom APIs",
      "Service Bus",
      "Azure Functions",
    ],
  },
  {
    title: "Development",
    skills: [
      "C#",
      ".NET",
      "TypeScript",
      "JavaScript",
      "React",
      "Angular",
      "SQL",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Software Architecture",
      "Integrations",
      "ALM & CI/CD",
      "Unit Testing",
      "Code Review",
      "Developer Tooling",
    ],
  },
  {
    title: "Interests",
    skills: [
      "Open Source",
      "Software Architecture",
      "Developer Experience",
      "Exploring New Technologies",
      "Community & Knowledge Sharing",
    ],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  "Dynamics 365 CE Engineer",
  "Power Platform Developer",
  "Software Engineer",
  "Open Source Builder",
];

export const certifications: Certification[] = [
  {
    name: "Power Platform Solution Architect Expert",
    issuer: "Microsoft",
    date: "Jul 2022",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/GjorgjiGuzelov-8717/221B0AAC8FB45346?sharingId=38FE41816B0D4BF6",
    credential: "PL-600",
  },
  {
    name: "Power Platform Developer Associate",
    issuer: "Microsoft",
    date: "Apr 2022",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/GjorgjiGuzelov-8717/CD413B83E2583A75?sharingId=38FE41816B0D4BF6",
    credential: "PL-400",
  },
  {
    name: "Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "Apr 2022",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/GjorgjiGuzelov-8717/E72EEE2F5F291D83?sharingId=38FE41816B0D4BF6",
    credential: "PL-900",
  },
];
