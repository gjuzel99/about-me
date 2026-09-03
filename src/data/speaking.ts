export interface SpeakingEngagement {
  title: string;
  event: string;
  date: string;
  description?: string;
  coSpeakers?: string[];
  type?: 'Conference' | 'Community' | 'Private Conference';
  tags?: string[];
  eventUrl?: string;
  videoUrl?: string;
  slidesUrl?: string;
}

export const speakingEngagements: SpeakingEngagement[] = [
  {
    title: 'React Superpowers for PCF: Next-Level Custom Components',
    event: 'DynamicsMinds 2026',
    date: 'May 2026',
    type: 'Conference',
    description:
      'A technical session about building reusable and maintainable Power Apps Component Framework controls with React, Fluent UI, shared components, hooks, services, testing, and solution deployment.',
    tags: [
      'PCF',
      'React',
      'TypeScript',
      'Fluent UI',
      'Power Platform',
    ],
  },
  {
    title: 'Level Up Your CE Scripts: TypeScript, Tooling, and Automation That Work',
    event: 'DynamicsMinds 2026',
    date: 'May 2026',
    type: 'Conference',
    coSpeakers: ['Andrew Butenko'],
    description:
      'A practical session about improving Dynamics 365 CE client-side development with TypeScript, modern tooling, automation, testing, and maintainable development practices.',
    tags: [
      'Dynamics 365 CE',
      'TypeScript',
      'JavaScript',
      'Tooling',
      'Automation',
    ],
  },
  {
    title: 'Dynamics 365 CE: JavaScript Best Practices and Advanced Techniques',
    event: 'DynamicsMinds 2025',
    date: 'May 2025',
    type: 'Conference',
    description:
      'A session focused on writing cleaner, more maintainable, and efficient JavaScript for Dynamics 365 CE using practical patterns and advanced techniques.',
    tags: [
      'Dynamics 365 CE',
      'JavaScript',
      'Web Resources',
      'Best Practices',
    ],
  },
  {
    title: 'Advanced Case Management in Dynamics 365 CE',
    event: 'Digiton 2024',
    date: '2024',
    type: 'Conference',
    coSpeakers: ['Sasha Konechni'],
    description:
      'A session exploring advanced approaches to case management and customization in Dynamics 365 Customer Engagement.',
    tags: [
      'Dynamics 365 CE',
      'Case Management',
      'Customer Service',
    ],
  },
  {
    title: 'Dynamics 365 CE: Code and Programming',
    event: 'Masters Conference',
    date: 'Feb 2023',
    type: 'Private Conference',
    description:
      'An internal technical session focused on Dynamics 365 CE development, customization, and programming concepts.',
    tags: [
      'Dynamics 365 CE',
      'C#',
      'JavaScript',
      'Development',
    ],
  },
];