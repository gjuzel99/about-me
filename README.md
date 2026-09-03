# Gjorgji Gjuzelov — Personal Website

My personal website and developer portfolio, built with [Astro](https://astro.build).

The website is a central place for my professional experience, open-source projects, conference sessions, technical writing, and things I learn while working with software and technology.

## About

I'm a Software Engineer focused on Microsoft Dynamics 365 CE and the Power Platform.

I enjoy writing code, exploring new technologies, software architecture, developer tooling, open-source development, and sharing practical knowledge with the developer community.

The website brings together the different areas of my work and interests:

- professional experience and skills;
- open-source projects;
- conference and community speaking;
- certifications;
- technical articles and project notes;
- software engineering and technology interests.

## Sections

### Work

Professional experience, education, skills, and Microsoft certifications.

### Projects

Open-source and personal engineering projects, including:

**Reusable PCF Controls with React**  
An open-source project exploring reusable, maintainable, and testable Power Apps Component Framework controls using React and a shared component architecture.

**Community Event Hub**  
An open-source Power Platform project where I am building a maintainable event-management solution and documenting the architecture and engineering decisions along the way.

### Speaking

Conference and community sessions around Dynamics 365 CE, Power Platform, PCF, TypeScript, JavaScript, and software development.

This includes sessions at DynamicsMinds, Digiton/BizApps, and other technical events.

### Blog

Technical articles, project notes, experiments, and things I learn while building and exploring software.

### About

More about how I approach engineering, open source, community work, electronics and hardware, and some of my interests outside software.

## Technology

The website intentionally uses a small and simple technology stack:

- Astro
- TypeScript
- HTML
- CSS
- Markdown / Astro Content Collections

The site is statically generated and does not require a backend or database.

## Project Structure

```text
├── public/
│   └── img/
│
├── src/
│   ├── components/
│   │   ├── Certifications.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Layout.astro
│   │   ├── PostCard.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   └── Speaking.astro
│   │
│   ├── content/
│   │   └── blog/
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── resume.ts
│   │   ├── site.ts
│   │   └── speaking.ts
│   │
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── speaking.astro
│   │   └── work.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
└── README.md
```

## Running Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run Astro checks:

```bash
npm run check
```

## Blog

Blog posts are written in Markdown and stored under:

```text
src/content/blog/
```

Example:

```md
---
title: My Post
subtitle: An optional subtitle
date: 2026-09-03
tags:
  - power-platform
  - dataverse
category: tech
description: Short description for cards and SEO.
---

Article content goes here.
```

## Deployment

The website is designed to be deployed as a static site.

The repository includes a GitHub Actions workflow for deployment to GitHub Pages.

A production build is generated with:

```bash
npm run build
```

The generated static site is written to:

```text
dist/
```

The site can also be hosted on other static hosting platforms such as Cloudflare, Vercel, or Netlify.

## Credits

This website is based on the open-source [Astro Wanderer](https://github.com/igagansingh/astro-wanderer) theme created by [Gagan Singh](https://igagansingh.com).

The original theme provided the foundation for the design and Astro structure. It has since been customized and extended with additional pages, components, content structures, projects, speaking history, certifications, and other changes for this personal website.

## License

This project is licensed under the MIT License.

The original Astro Wanderer theme is Copyright (c) 2026 Gagan Singh and is distributed under the MIT License.

Modifications and additional work are Copyright (c) 2026 Gjorgji Gjuzelov.

See [LICENSE](LICENSE) for details.
