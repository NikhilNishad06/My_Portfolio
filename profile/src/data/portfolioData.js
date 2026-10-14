export const portfolioData = {
  personal: {
    name: 'Nikhil Nishad',
    title: 'MERN Stack Developer',
    location: 'Bhilai, India',
    tagline: 'Full Stack Developer',
    headingPrefix: 'Scalable full-stack apps that ',
    headingHighlight: 'businesses rely on.',
    heroDescription: 'MERN stack developer building production-ready ERP, HR, MIS and inventory systems with secure REST APIs and responsive UI.',
    aboutLead: 'I turn business requirements into production-ready software — from database design to deployment.',
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
    { value: 7, label: 'Enterprise Systems Built' },
    { value: 3.79, decimals: 2, suffix: '/4', label: 'BCA CGPA' },
    { value: 8, label: 'Key Projects' },
    { value: 4, label: 'Core MERN Technologies' }
  ],
  projects: [
    {
      id: '01',
      title: 'IMS — Inventory Management System',
      category: 'Inventory & Stock Control',
      color: '#4ecdc4',
      description: 'End-to-end inventory management featuring real-time stock tracking, automated low-stock reorder triggers, multi-warehouse support, barcode scanning, and supplier workflow management.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      note: 'Built for enterprise client'
    },
    {
      id: '02',
      title: 'Coal & Mining Operations System',
      category: 'Mining & Heavy Industry',
      color: '#e0a96d',
      description: 'Specialized enterprise portal for coal extraction, weighbridge automation, daily production logs, safety compliance audits, and fleet dispatch tracking in mining zones.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      note: 'Heavy industry enterprise system'
    },
    {
      id: '03',
      title: 'Transport Management System (TMS)',
      category: 'Logistics & Fleet Operations',
      color: '#6c9ce6',
      description: 'Logistics management platform covering vehicle tracking, driver allocation, route optimization, consignment status, diesel/expense tracking, and automated client billing.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API'],
      note: 'Production fleet logistics software'
    },
    {
      id: '04',
      title: 'Professional Analytics & MIS Dashboard',
      category: 'BI & Real-Time Analytics',
      color: '#a78bfa',
      description: 'Executive decision dashboard consolidating multi-department KPIs, predictive business forecasting, interactive charts, and live Google Sheets bidirectional data sync.',
      tech: ['React.js', 'Node.js', 'Chart.js', 'Google Apps Script', 'MongoDB'],
      note: 'Executive BI & Reporting suite'
    },
    {
      id: '05',
      title: 'ERP & Master Management',
      category: 'Enterprise Platform',
      color: '#8fb8e8',
      description: 'A centralized ERP module for managing master data, role-based access control (RBAC), and cross-department automated workflows.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      note: 'Built for a business client'
    },
    {
      id: '06',
      title: 'HR Management System',
      category: 'Attendance & Live Tracking',
      color: '#c8a27a',
      description: 'Employee management with outside-attendance geo-fencing, live location monitoring, leave tracking, and payroll-ready dashboards.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth'],
      note: 'Built for a business client'
    },
    {
      id: '07',
      title: 'Purchase & Sales Order System',
      category: 'Order-to-Delivery Workflow',
      color: '#d8c8a4',
      description: 'Automates the full purchase-to-delivery lifecycle with real-time PO tracking, quotation comparison, and automated invoice reconciliation.',
      tech: ['React.js', 'Express.js', 'MongoDB', 'REST APIs'],
      note: 'Built for a business client'
    },
    {
      id: '08',
      title: 'Checklist & Delegation Platform',
      category: 'Team Accountability',
      color: '#7fb7b0',
      description: 'Task delegation and SOP checklist tracking tools with SLA reminders and alert notifications improving cross-team execution speed.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      note: 'Built for a business client'
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
      type: 'Full-Time Experience',
      badge: 'Active Role',
      badgeColor: '#10b981',
      description: 'Designing, building, and deploying scalable client applications end-to-end. Maintaining 7 enterprise systems including ERP, real-time HR live-tracking, Purchase & Sales, MIS, and automated notification workflows.',
      skills: ['MERN Stack', 'REST APIs', 'RBAC Auth', 'Query Tuning', 'Enterprise Systems']
    },
    {
      period: 'Jan – Feb 2026',
      role: 'Full Stack Web Developer Intern',
      organization: 'Botivate Services LLP',
      type: 'Industrial Internship',
      badge: 'Completed',
      badgeColor: '#60a5fa',
      description: 'Contributed to core enterprise modules for ERP and HR systems. Built secure authentication, database schemas, and RESTful endpoints under senior architectural guidance.',
      skills: ['React.js', 'Express.js', 'MongoDB', 'API Architecture']
    },
    {
      period: 'Aug 2023 – Feb 2026',
      role: 'Bachelor of Computer Application (BCA)',
      organization: 'Kalinga University, Raipur',
      type: 'Formal Higher Education',
      badge: 'CGPA 3.79 / 4.00',
      badgeColor: '#f59e0b',
      description: 'Completed Bachelor degree with exceptional academic standing (3.79 CGPA). Specialised in Data Structures, Database Systems, Object-Oriented Software Design, and Web Architectures.',
      skills: ['Computer Science', 'Data Structures', 'Database Engineering', 'Software Architecture']
    },
    {
      period: 'Feb 2026',
      role: 'Full Stack Web Development Certification',
      organization: 'Avish Educom, Durg',
      type: 'Professional Certification',
      badge: 'Certified',
      badgeColor: '#c084fc',
      description: 'Advanced industrial full-stack certification focusing on modern MERN production workflows, real-time data sync, state management, and cloud deployment best practices.',
      skills: ['MERN Mastery', 'Component Architecture', 'Full-Stack Deployment']
    }
  ]
};
