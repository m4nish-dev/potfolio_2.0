// -----------------------------------------------------------------------------
// PORTFOLIO DATA
// Edit this file to update the content of the portfolio.
// Replace placeholder URLs (marked with YOUR_...) with your real links.
// -----------------------------------------------------------------------------

export const PROFILE = {
  name: 'Manish Kumar',
  role: 'Software Engineer',
  university: 'NSUT',
  issue: 'ISSUE 01',
  year: '2026',
  tagline: 'FROM THEORY TO SCALE',
  headline: 'The Chronicle\nof Development',
  publication: 'A Software Engineering Portfolio'
};

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export const EDUCATION = {
  intro:
    'A study in computer science and data analytics — the intersection of algorithms, systems, and software craft. Currently pursuing a Bachelor of Technology at one of India\'s premier engineering institutions.',
  institution: 'Netaji Subhas University of Technology',
  location: 'Delhi, India',
  degree: 'B.Tech — Computer Science and Data Analytics',
  period: '2023 — 2027',
  focus: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Systems',
    'Web Development',
    'Software Engineering'
  ],
  // Replace with a real image at public/images/nsut.jpg
  image: '/images/nsut.jpg',
  imageAlt: 'Netaji Subhas University of Technology campus'
};

export const EXPERIENCE = [
  {
    number: '01',
    role: 'Software Engineer Intern',
    company: 'Encore Ascend',
    period: 'Recent',
    department: 'Product Engineering',
    dispatch:
      'Built and shipped production-grade interfaces in a fast-moving product team, translating design specifications into reusable, tested components.',
    achievements: [
      'Developed 8+ responsive web pages using React.js, JavaScript, and modern CSS.',
      'Built 15+ reusable React components adopted across the product surface.',
      'Integrated 10+ REST APIs on the MERN stack, wiring frontend flows to backend services.',
      'Collaborated with a 5-member team on a shared Git/GitHub workflow, including code review.',
      'Implemented interactive animations with Framer Motion to elevate user experience.'
    ]
  }
];

export const PROJECTS = [
  {
    number: '01',
    title: 'AILifeOS',
    subtitle: 'The Ultimate\nOperating System',
    kicker: 'AI / FULL-STACK',
    dispatch:
      'An advanced AI-driven life operating system designed to streamline workflows, manage data, and automate daily tasks using intelligent agents and large language models.',
    features: [
      'Multi-agent workflow orchestration using LLMs',
      'Real-time data synchronization and persistence',
      'Customized dashboard with dynamic widgets',
      'Secure, role-based access and authentication'
    ],
    stack: ['React', 'Node.js', 'LLMs', 'MongoDB', 'AI Agents'],
    image: '/images/ailifeos.png', 
    imageAlt: 'AILifeOS Interface',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    number: '02',
    title: 'Homily',
    subtitle: 'A Premium\nBooking Platform',
    kicker: 'FULL-STACK / MERN',
    dispatch:
      'A complete property booking experience built on the MERN stack. A fluid interface backed by authenticated REST APIs and a responsive layout system.',
    features: [
      'End-to-end property search and booking engine',
      'Secure payment gateway integration',
      'Responsive, mobile-first design system'
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/images/homely_new.png',
    imageAlt: 'Homily booking platform interface',
    liveUrl: '#',
    codeUrl: '#'
  }
];

export const SKILLS = [
  {
    category: 'Languages',
    items: ['C++', 'C', 'JavaScript', 'Python']
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Tailwind']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Authentication']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman']
  },
  {
    category: 'Concepts',
    items: ['DSA', 'OOP', 'Operating Systems', 'DBMS']
  }
];

export const ACHIEVEMENTS = [
  {
    number: '01',
    stat: 'Top 3%',
    title: 'Amazon ML Trophy',
    detail:
      'Placed in the top three percent of a national machine learning competition hosted by Amazon.'
  },
  {
    number: '02',
    stat: 'Member',
    title: 'NSUT Cricket Team',
    detail:
      'Represented the university on its official cricket team — balancing sport with engineering.'
  },
  {
    number: '03',
    stat: 'NSUT',
    title: 'Academic Standing',
    detail:
      'Consistent academic performance within the Computer Science and Data Analytics program.'
  }
];

export const CERTIFICATIONS = [
  {
    number: 'C.01',
    title: 'Design Thinking',
    issuer: 'Structured methodology for solving user-centered problems.'
  },
  {
    number: 'C.02',
    title: 'Public Speaking',
    issuer: 'Communication, delivery, and audience engagement.'
  },
  {
    number: 'C.03',
    title: 'Soft Skills',
    issuer: 'Interpersonal, collaboration, and leadership fundamentals.'
  }
];

export const CONTACT = {
  email: 'manishkr28092003@gmail.com',
  phone: '+91-9334418671',
  phoneRaw: '+919334418671',
  location: 'Delhi, India'
};

// TODO: Replace with your actual social profile URLs
export const SOCIAL_LINKS = {
  github: 'YOUR_GITHUB_URL',
  linkedin: 'YOUR_LINKEDIN_URL'
};
