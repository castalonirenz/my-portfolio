export const siteProfile = {
  name: 'Renz Castaloni',
  title: 'Frontend Developer',
  location: 'Philippines',
  email: 'renz.castaloni.dev@gmail.com',
  phone: '+63 900 000 0000',
  summary:
    'Frontend developer focused on building maintainable web products with React and Next.js, backed by practical backend integration experience.',
}

export const mainNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks = [
  { short: 'Gh', label: 'GitHub', href: 'https://github.com/castalonirenz' },
  { short: 'In', label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { short: 'Mail', label: 'Email', href: '/contact' },
]

export const portfolioCategories = ['All', 'UI/UX', 'Frontend', 'Backend', 'Mobile']

export const portfolioProjects = [
  {
    id: 'rnz-app',
    title: 'Rnz App',
    category: 'Frontend',
    summary: 'Financial tracker and monitoring application.',
    url: 'https://rnz-app-sepia.vercel.app/',
    repo: 'https://github.com/castalonirenz/RnzApp',
    stack: ['Next.js', 'React', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'office-ride-share',
    title: 'Official Ride Share',
    category: 'Frontend',
    summary: 'Ride sharing application to offer or book a ride.',
    url: 'https://office-ride-share.vercel.app/',
    repo: 'https://github.com/castalonirenz/OfficeRideShare',
    stack: ['Next.js', 'React', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'office-ride-share-api',
    title: 'Official Ride Share API',
    category: 'Backend',
    summary: 'API for ride sharing offer and booking workflows.',
    url: null,
    repo: 'https://github.com/castalonirenz/OfficeRideShareApi',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'rnz-app-api',
    title: 'RNZ App API',
    category: 'Backend',
    summary: 'API for financial tracking and monitoring services.',
    url: null,
    repo: 'https://github.com/castalonirenz/RnzAppApi',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'tax-calendar-mobile',
    title: 'Enterprise Philippine Tax Calendar',
    category: 'Mobile',
    summary: 'Tracking of government tax deadlines and requirements.',
    url: null,
    repo: null,
    stack: ['React Native', 'Styled Components'],
  },
  {
    id: 'tax-code-mobile',
    title: 'Enterprise Philippine Tax Code',
    category: 'Mobile',
    summary: 'Tracking of government tax laws and regulations.',
    url: null,
    repo: null,
    stack: ['React Native', 'Styled Components'],
  },
  {
    id: 'internal-projects',
    title: 'Some Internal Projects',
    category: 'Frontend',
    summary: 'Internal projects that cannot be disclosed due to firm policy.',
    url: null,
    repo: null,
    stack: ['Next.js', 'CMS', 'Component Library'],
  },
]

export const cvData = {
  role: 'Frontend Developer',
  profile:
    'Dedicated to building high-quality digital products using React and Next.js, with practical backend integration across Node.js, Laravel, and FastAPI.',
  skills: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'FastAPI',
    'MongoDB',
    'MySQL',
  ],
  experience: [
    {
      period: '2021 - Present',
      title: 'Freelance Frontend Developer',
      detail: 'Built web and mobile products with deployment-ready UI and API integration.',
    },
    {
      period: '2019 - 2021',
      title: 'Web Developer',
      detail: 'Delivered business interfaces, dashboards, and responsive landing experiences.',
    },
  ],
  education: [
    {
      period: '2015 - 2019',
      title: 'BS in Information Technology',
      detail: 'Focused on software engineering and web application development.',
    },
  ],
}
