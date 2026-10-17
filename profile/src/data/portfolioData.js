export const portfolioData = {
  personal: {
    name: 'Nikhil Nishad',
    title: 'Full Stack Developer',
    location: 'Bhilai, India',
    tagline: 'Available for full-time & enterprise projects',
    headingPrefix: 'Building scalable web apps & ',
    headingHighlight: 'enterprise systems.',
    heroDescription: 'Crafting production-grade Full Stack applications, secure backend APIs, and modern responsive interfaces that drive business growth.',
    aboutLead: 'I turn complex business requirements into production-ready software — from database architecture to smooth deployment.',
    aboutSub: 'Hands-on with the MERN stack, delivering end-to-end enterprise solutions — ERP, HR management, MIS and purchase/inventory systems — with a strong focus on responsive UI, secure REST APIs and performance optimization.'
  },
  education: [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Kalinga University, Raipur',
      score: 'CGPA 3.79 / 4.00',
      period: '2023 – 2026',
      badge: 'Academic Excellence'
    },
    {
      degree: 'Full Stack Web Development Certification',
      institution: 'Avish Educom, Durg',
      score: 'MERN Specialist',
      period: '2025 – 2026',
      badge: 'Professional Training'
    }
  ],
  contacts: {
    email: 'nikhilnishad622@gmail.com',
    phone: '+916264345297',
    phoneLabel: '+91 6264345297',
    linkedin: 'https://www.linkedin.com/in/nikhil-nishad-293176349?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/NikhilNishad06',
    location: 'Bhilai, India'
  },
  stats: [
    { value: 10, suffix: '+', label: 'Client Apps Deployed' },
    { value: 3.79, decimals: 2, suffix: '/4', label: 'BCA CGPA' },
    { value: 10, label: 'Key Enterprise Projects' },
    { value: 4, label: 'Core MERN Technologies' }
  ],
  projects: [
    {
      id: '01',
      title: 'ERP & Master Management System',
      category: 'Enterprise Platform',
      color: '#8fb8e8',
      description: 'Built a centralized ERP module to manage master data, user roles, and cross-department workflows with role-based access for a business client.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      note: 'Built for enterprise client'
    },
    {
      id: '02',
      title: 'HR & Payroll System',
      category: 'Attendance & Automated Payroll',
      color: '#c8a27a',
      description: 'Employee management with outside-attendance, live location tracking, role-based dashboards, and fully automated one-click monthly net salary generation.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth'],
      note: 'Built for enterprise client'
    },
    {
      id: '03',
      title: 'MIS (Management Information System)',
      category: 'BI & Real-Time Sync',
      color: '#a78bfa',
      description: 'Centralized MIS dashboard consolidating cross-department data into real-time reports; Google Apps Script automates sync with Google Sheets.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Apps Script'],
      note: 'Executive reporting suite'
    },
    {
      id: '04',
      title: 'IMS & Purchase / Sales / Order-to-Delivery',
      category: 'Inventory & Order Workflow',
      color: '#4ecdc4',
      description: 'Automated the purchase-to-delivery workflow with real-time order tracking, inventory and stock updates, and sales/purchase reporting.',
      tech: ['React.js', 'Express.js', 'MongoDB'],
      note: 'Production supply chain system'
    },
    {
      id: '05',
      title: 'Transport & Vehicle Management System',
      category: 'Logistics & Fleet Operations',
      color: '#6c9ce6',
      description: 'Managed vehicle and transport operations including challan records, FASTag tracking, and transport documentation with reporting.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      note: 'Fleet & logistics portal'
    },
    {
      id: '06',
      title: 'Coal & Mining System',
      category: 'Mining & Heavy Industry',
      color: '#e0a96d',
      description: "Built a domain-specific management system for coal and mining operations, developed around the client's specific requirements and workflows.",
      tech: ['React.js', 'Node.js', 'MongoDB'],
      note: 'Mining workflow system'
    },
    {
      id: '07',
      title: 'Petty Cash System',
      category: 'Finance & Expense Auditing',
      color: '#34d399',
      description: 'Tracked petty cash entries, expenses, and approvals with transparent, easy-to-audit reporting for day-to-day cash management.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      note: 'Day-to-day cash management'
    },
    {
      id: '08',
      title: 'Document Upload System (PDF / Image / Excel)',
      category: 'File Management & Security',
      color: '#f472b6',
      description: 'Secure multi-format (PDF, image, Excel) file upload and management module integrated across multiple client applications.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      note: 'Cross-app file manager'
    },
    {
      id: '09',
      title: 'Checklist & Delegation System',
      category: 'Task Delegation & Tracking',
      color: '#7fb7b0',
      description: 'Built task delegation and checklist tracking tools with email/in-app notifications to improve team accountability.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      note: 'Team accountability suite'
    }
  ],
  skillRows: [
    { category: 'Languages', items: ['JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Frameworks', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'NestJS', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Framer Motion', 'Spring Boot'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'] },
    { category: 'Auth', items: ['JWT Auth', 'OAuth Integration'] },
    { category: 'Integrations', items: ['REST APIs', 'Payment Gateways', 'Google Sheets API', 'Email / SMS Services'] },
    { category: 'Automation', items: ['Google Apps Script'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Netlify', 'Vercel', 'Render', 'npm'] },
    { category: 'Spoken', items: ['Hindi', 'English'] },
    { category: 'Soft skills', items: ['Problem Solving', 'Communication', 'Adaptability', 'Teamwork', 'Critical Thinking'] }
  ],
  services: [
    {
      title: 'Full-Stack Web Applications',
      description: 'End-to-end MERN applications — frontend, backend, database design, API integration, testing and deployment.',
      tech: 'MongoDB · Express · React · Node'
    },
    {
      title: 'ERP, HR & MIS Systems',
      description: 'Enterprise software that centralises data, roles and workflows across your departments.',
      tech: 'RBAC · Dashboards · Reports'
    },
    {
      title: 'REST API & Backend Development',
      description: 'Secure, well-structured APIs with JWT / OAuth authentication and optimised database queries.',
      tech: 'Node · Express · JWT'
    },
    {
      title: 'Business Process Automation',
      description: 'Google Apps Script and Sheets API integrations for automated data sync and report generation.',
      tech: 'Apps Script · Sheets API'
    },
    {
      title: 'Responsive Business Websites',
      description: 'Fast, responsive interfaces built around your brand and tuned for performance.',
      tech: 'React · Next.js · Tailwind'
    },
    {
      title: 'Performance & Maintenance',
      description: 'Cutting page-load times, tuning queries and resolving production issues.',
      tech: 'Optimisation · Support'
    }
  ],
  whyMe: [
    {
      title: 'End-to-End Ownership',
      desc: 'Architecting complete solutions from schema design and backend APIs to polished UI and production deployment on cloud servers.',
      tag: 'Full Lifecycle',
      icon: '🚀'
    },
    {
      title: 'Direct Client Collaboration',
      desc: 'Gathering real-world requirements directly from stakeholders and converting business bottlenecks into automated software modules.',
      tag: 'Agile Delivery',
      icon: '🤝'
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Built with defense-in-depth principles — JWT authentication, granular Role-Based Access Control (RBAC), and sanitised inputs.',
      tag: 'Secure By Design',
      icon: '🛡️'
    },
    {
      title: 'High-Performance APIs',
      desc: 'Engineered for low latency — indexed database queries, cached responses, and optimized payloads that handle heavy enterprise traffic.',
      tag: 'Optimized Speed',
      icon: '⚡'
    },
    {
      title: 'Scalable & Clean Code',
      desc: 'Maintainable modular architecture, readable coding standards, and comprehensive documentation built to scale as your business grows.',
      tag: 'Clean Architecture',
      icon: '💎'
    },
    {
      title: 'Cross-Device Responsiveness',
      desc: 'Pixel-perfect mobile, tablet, and widescreen layouts delivering intuitive usability across ERP dashboards and operational tools.',
      tag: 'Adaptive UI',
      icon: '📱'
    }
  ],
  journey: [
    {
      period: 'Mar 2026 – Present',
      role: 'Full Stack Web Developer',
      organization: 'Botivate Services LLP',
      type: 'On-site · Full-time',
      badge: 'Active Role',
      badgeColor: '#10b981',
      description: 'Designed, developed, and deployed 10+ client web applications end-to-end. Built enterprise systems including ERP, HR & Payroll, IMS, Purchase & Sales, MIS, Coal & Mining, Transport, Petty Cash, and Document management.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'RBAC Auth']
    },
    {
      period: 'Jan 2026 – Feb 2026',
      role: 'Full Stack Web Developer Intern',
      organization: 'Botivate Services LLP',
      type: 'On-site · Internship',
      badge: 'Completed',
      badgeColor: '#60a5fa',
      description: 'Assisted in building and maintaining client web applications, gaining hands-on exposure to full MERN development. Supported team in developing enterprise modules for ERP and HR management.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Database Design']
    },
    {
      period: 'Aug 2023 – Feb 2026',
      role: 'Bachelor of Computer Application (BCA)',
      organization: 'Kalinga University, Raipur, Chhattisgarh',
      type: 'Higher Education',
      badge: 'CGPA 3.79 / 4.00',
      badgeColor: '#f59e0b',
      description: 'Completed Bachelor of Computer Application with CGPA 3.79/4.00. Built strong foundations in Data Structures, Database Management, and Web Development.',
      skills: ['Computer Science', 'Data Structures', 'Database Engineering', 'Web Development']
    },
    {
      period: 'Feb 2026',
      role: 'Full Stack Web Development',
      organization: 'Avish Educom, Agration Chowk, Durg, Chhattisgarh',
      type: 'Certification Course',
      badge: 'Completed',
      badgeColor: '#c084fc',
      description: 'Completed intensive hands-on professional training in modern full stack web development with MERN stack.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
    }
  ]
};
