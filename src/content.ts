export const about = {
  name: 'Shubham',
  title: 'Full Stack JavaScript Engineer',
  tagline: 'Building end-to-end experiences with the MERN stack',
  description:
    'I design, build, and ship resilient web applications across the stack. Over the last three years I have delivered production-ready features, architected scalable APIs, and mentored teams on modern JavaScript best practices.',
  photo:
    'https://media.licdn.com/dms/image/v2/D4D03AQF_jD0Lgc7sqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677418168393?e=1764201600&v=beta&t=Pi6E-IqcGRsO3TFBzB4lmtcX2i4SlR3NF60u05uvShg'
};

export const highlights = [
  '3 years crafting production-grade web apps with the MERN stack',
  'Comfortable owning features end-to-end — from UX design to deployment',
  'Strong focus on performance, accessibility, and thoughtful developer experience'
];

export const experience = [
  {
    company: 'NextWave Labs',
    role: 'Full Stack JavaScript Developer',
    period: '2023 — Present',
    achievements: [
      'Led the rebuild of a real-time analytics dashboard with React, Redux Toolkit, and WebSockets, increasing data refresh frequency by 4x.',
      'Designed Node.js microservices and MongoDB schema optimizations that reduced API response times by 35%.',
      'Championed adoption of automated end-to-end testing with Playwright, eliminating an entire sprint of regression fixes.'
    ]
  },
  {
    company: 'BrightPixel Studio',
    role: 'Full Stack Developer',
    period: '2022 — 2023',
    achievements: [
      'Delivered a multi-tenant SaaS MVP in under 10 weeks with Next.js, Express, and Tailwind CSS.',
      'Introduced CI/CD workflows, decreasing release friction and enabling weekly deployments.',
      'Collaborated closely with designers to enhance UX, contributing to a 20% increase in user activation.'
    ]
  }
];

export const projects = [
  {
    name: 'Pulseboard',
    description:
      'An observability dashboard combining live log streams, usage metrics, and alerting in a unified interface.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Tailwind'],
    link: 'https://github.com/shubham/pulseboard'
  },
  {
    name: 'LaunchPad CRM',
    description:
      'CRM platform tailored for early-stage startups. Features pipeline automation, AI-assisted email drafting, and collaborative notes.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'OpenAI API'],
    link: 'https://github.com/shubham/launchpad'
  },
  {
    name: 'RouteRunner API',
    description:
      'Geo-enabled delivery routing API with caching strategies that cuts request overhead and response latency.',
    tech: ['Node.js', 'Express', 'Redis', 'Docker'],
    link: 'https://github.com/shubham/routerunner'
  }
];

export const skills = {
  core: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'GraphQL'],
  backend: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'REST APIs'],
  tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Jest', 'Playwright']
};

export const socials = [
  { label: 'Email', value: 'hello@shubham.dev', href: 'mailto:hello@shubham.dev' },
  { label: 'GitHub', value: 'github.com/shubham', href: 'https://github.com/shubham' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shubham', href: 'https://linkedin.com/in/shubham' }
];
