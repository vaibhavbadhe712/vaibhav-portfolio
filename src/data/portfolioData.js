export const profile = {
  name: "Vaibhav Badhe",
  role: "Senior Flutter Developer",
  currentCompany: "INFYNOD TECH PRIVATE LIMITED",
  shortBio: "Senior Flutter Developer at INFYNOD TECH PRIVATE LIMITED with 2+ years of professional engineering experience shipping 11+ production mobile applications across Android and iOS. Creator of proprietary consumer products like Welvors (trust-first dating app) and enterprise solutions, backed by Node.js/Fastify services and AI workflows.",
  location: "Pune / Sangamner, Maharashtra, India",
  email: "vaibhavbadhe2004@gmail.com",
  phone: "+91 8624872310",
  linkedin: "https://www.linkedin.com/in/vaibhavbadhe-flutter/",
  github: "https://github.com/vaibhavbadhe712",
  pubDev: "https://pub.dev/packages/toast_service",
  resumeUrl: "/Vaibhav_Badhe_Resume.pdf",
  resumeFilename: "Vaibhav_Badhe_Resume.pdf",
  availability: "Open to exciting opportunities",
};

// Aliased for compatibility
export const personalInfo = profile;

export const metrics = [
  { value: 11, suffix: "+", label: "Production Apps", description: "Shipped across Android & iOS" },
  { value: 2, suffix: "+", label: "Years Experience", description: "Infynod Tech & Baap Services" },
  { value: 8, suffix: "+", label: "Developers Mentored", description: "Code reviews & architectural guidance" },
  { value: 3, suffix: "", label: "Payment Gateways", description: "Razorpay, Easebuzz, HDFC Juspay" },
  { display: "Android + iOS", label: "Production Releases", description: "Play Store, App Store & TestFlight" },
  { display: "US Client", label: "International Project", description: "Enterprise Workforce Management" },
];

export const stats = [
  { label: "Production Apps", value: "11+", icon: "Smartphone", description: "Shipped to Play Store & App Store" },
  { label: "Years Experience", value: "2+", icon: "Briefcase", description: "Senior Flutter Developer" },
  { label: "Current Company", value: "INFYNOD", icon: "Building", description: "Infynod Tech Private Limited" },
  { label: "Payment Gateways", value: "3", icon: "CreditCard", description: "Razorpay, Easebuzz, HDFC Juspay" },
  { label: "International Project", value: "US", icon: "Globe", description: "Enterprise Workforce Management" },
];

export const timeline = [
  { 
    year: "2026 – Present", 
    title: "Senior Flutter Developer", 
    role: "Senior Flutter Developer",
    company: "INFYNOD TECH PRIVATE LIMITED",
    badge: "Current Company",
    detail: "Leading mobile product engineering, architecture, and production delivery at Infynod Tech. Architected and launched Welvors (proprietary trust-first dating & matchmaking application) on Google Play with real-time WebSockets, AI selfie & ID verification, GetX state management, and in-app subscription billing." 
  },
  { 
    year: "2025", 
    title: "Best Employee Award Winner", 
    role: "Best Employee Award",
    company: "Baap Services Pvt. Ltd.",
    badge: "Excellence Recognized",
    detail: "Recognised for stellar delivery ownership, zero-regression releases across enterprise CRM, ERP, and payment gateway integrations (Razorpay, Easebuzz, HDFC Juspay)." 
  },
  { 
    year: "2024", 
    title: "Flutter & Full Stack Developer", 
    role: "Flutter Developer",
    company: "Baap Services Pvt. Ltd.",
    badge: "Career Inception",
    detail: "Began shipping production Flutter features, REST APIs with Node.js/Fastify, MySQL schemas, and cross-platform releases for Android and iOS." 
  },
];

export const experienceTimeline = timeline;

export const techStack = [
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", level: "Expert", highlight: true },
      { name: "Dart", level: "Expert", highlight: true },
      { name: "Android", level: "Advanced", highlight: true },
      { name: "iOS", level: "Advanced", highlight: true },
      { name: "Responsive UI", level: "Expert" }
    ],
  },
  { 
    category: "State Management", 
    items: [
      { name: "GetX", level: "Expert", highlight: true },
      { name: "BLoC", level: "Expert", highlight: true },
      { name: "Cubit", level: "Advanced" },
      { name: "Provider", level: "Advanced" }
    ] 
  },
  { 
    category: "Architecture", 
    items: [
      { name: "Clean Architecture", level: "Expert", highlight: true },
      { name: "MVVM", level: "Expert", highlight: true },
      { name: "Reusable Components", level: "Expert" },
      { name: "Repository Pattern", level: "Expert" }
    ] 
  },
  { 
    category: "Backend & APIs", 
    items: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Fastify", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced" },
      { name: "REST APIs", level: "Expert", highlight: true },
      { name: "Dio", level: "Expert" },
      { name: "Firebase", level: "Advanced", highlight: true },
      { name: "FCM (Push Notifications)", level: "Advanced" },
      { name: "Authentication / JWT", level: "Advanced" }
    ] 
  },
  { 
    category: "AI & Smart Tech", 
    items: [
      { name: "AI/LLM API Integration", level: "Advanced", highlight: true },
      { name: "AI-powered chat", level: "Advanced", highlight: true },
      { name: "AI-driven personalization", level: "Advanced" },
      { name: "Prompt Engineering", level: "Proficient" }
    ] 
  },
  { 
    category: "Payments", 
    items: [
      { name: "Razorpay", level: "Production", highlight: true },
      { name: "Easebuzz", level: "Production", highlight: true },
      { name: "HDFC Juspay", level: "Production", highlight: true }
    ] 
  },
  { 
    category: "Databases", 
    items: [
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "SQLite", level: "Expert", highlight: true },
      { name: "Hive", level: "Advanced" },
      { name: "Firestore", level: "Advanced" },
      { name: "Shared Preferences", level: "Expert" }
    ] 
  },
  { 
    category: "DevOps & Stores", 
    items: [
      { name: "Play Store Console", level: "Expert", highlight: true },
      { name: "Apple App Store", level: "Advanced", highlight: true },
      { name: "TestFlight", level: "Advanced", highlight: true },
      { name: "CI/CD Pipelines", level: "Advanced" },
      { name: "Git / GitHub / GitLab / Bitbucket", level: "Expert" }
    ] 
  },
  { 
    category: "Tools", 
    items: [
      { name: "Jira (Agile/Scrum)", level: "Expert" },
      { name: "Postman", level: "Expert" },
      { name: "Figma", level: "Advanced" },
      { name: "Android Studio", level: "Expert" },
      { name: "VS Code", level: "Expert" }
    ] 
  },
];

export const aiShowcase = [
  {
    title: "AI-Powered HR & Employee Chat Support",
    product: "OfficeBook HRMS",
    description: "Architected an integrated AI conversational assistant within the mobile HRMS to handle employee shift queries, company policy lookups, and instant leave balance guidance.",
    tech: ["OpenAI / LLM APIs", "Streaming Responses", "Mobile Chat UI", "Context Prompting"],
    icon: "MessageSquare",
    highlight: "Reduces HR administrative queries by delivering instant answers inside the app."
  },
  {
    title: "Intelligent AI/LLM API Integrations",
    product: "Enterprise & Productivity Suites",
    description: "Connecting mobile clients with scalable LLM endpoints using Dio and WebSockets for real-time text streaming, structured JSON extraction, and client-side caching.",
    tech: ["LLM REST APIs", "Fastify AI Gateway", "SSE / Streaming", "Token Optimization"],
    icon: "Sparkles",
    highlight: "Ensures responsive UI rendering with sub-second time-to-first-token in mobile views."
  },
  {
    title: "AI-Driven Personalization & Local Discovery",
    product: "Goyant Ecosystem",
    description: "Smart categorization algorithms and automated listing recommendations based on user travel preferences, location signals, and real-time vendor availability.",
    tech: ["Heuristic Scoring", "Location Intelligence", "Personalized Ranking"],
    icon: "Zap",
    highlight: "Drives higher vendor conversion rates by presenting contextual local experiences."
  }
];

export const projects = [
  {
    id: "welvors",
    name: "Welvors",
    title: "Welvors — Trust-First Dating & Social App",
    subtitle: "Modern Verified Dating Platform for Indian Singles",
    category: "Dating / Social Networking",
    platform: "Android (Play Store Live)",
    platforms: ["Android"],
    initials: "WV",
    accent: "from-rose-500/20 to-orange-500/20",
    color: "from-rose-500 to-pink-600",
    featured: true,
    tag: "Infynod Tech Product",
    company: "INFYNOD TECH PRIVATE LIMITED",
    playStore: "https://play.google.com/store/apps/details?id=com.infynod.welvors",
    description:
      "A trust-first, verification-driven dating application built in-house at Infynod Tech Private Limited for career-focused Indian singles seeking serious relationships. Features AI selfie/ID verification, real-time matchmaking algorithms, WebSockets chat, ghost-free messaging guardrails, and Razorpay subscription billing.",
    features: [
      "AI Selfie & ID Verification Engine",
      "Career & Lifestyle Matchmaking Algorithm",
      "Real-Time Socket Chat & Media Sharing",
      "Proximity & Distance Obfuscation",
      "Subscription Tiers & Microtransactions",
      "Privacy Guardrails & Ghost-Free Chats",
      "Instant Push Notifications (FCM)",
      "Clean Modular GetX Architecture",
    ],
    badges: ["Infynod Tech", "Flutter", "Dart", "GetX", "WebSockets", "Node.js", "Razorpay", "Play Store"],
    caseStudy: {
      overview:
        "Welvors is a trust-first dating and matchmaking mobile product built end-to-end by Infynod Tech Private Limited, focused on meaningful connections for career-oriented Indian singles through verified profiles and safety-first interactions.",
      problem:
        "Traditional dating apps suffer from widespread fake profiles, catfishing, ghosting, and privacy concerns, creating a low-trust environment especially for professional Indian singles.",
      solution:
        "Architected a Flutter application incorporating mandatory AI facial recognition and ID verification, real-time messaging over WebSockets, intelligent lifestyle and career matchmaking, and location-based discovery with strict distance obfuscation.",
      role:
        "Senior Flutter Developer (INFYNOD TECH PRIVATE LIMITED) — Lead mobile developer responsible for full app lifecycle: Flutter architecture, UI/UX implementation, real-time WebSockets communication, state management with GetX, in-app billing & Razorpay payments, and Google Play Store production deployment.",
      challenges: [
        "Real-time chat synchronization with low latency, read receipts, and background push notifications",
        "Seamless camera selfie capture with anti-spoofing verification flow",
        "Ensuring user safety through blurred photo privacy controls and report mechanisms",
        "Handling in-app purchases and subscription tiers reliably",
      ],
      architecture: [
        "Modular Flutter architecture with GetX state management and clean controller separation",
        "Persistent local storage for cached conversations and offline state",
        "WebSocket communication layer with automatic reconnection and typing status",
        "RESTful API integration with Node.js backend services and secure JWT auth",
      ],
      production: [
        "Production build, code obfuscation, and deployment to Google Play Store",
        "Firebase Crashlytics, Analytics, and performance monitoring",
        "Collaboration with backend and design teams at Infynod Tech",
      ],
      results: [
        "Live on Google Play Store with verified trust-first user onboarding",
        "High-engagement real-time chat and smart matchmaking experience",
      ],
    },
  },
  {
    id: "simplify-vms",
    name: "Simplify VMS",
    title: "Simplify VMS",
    subtitle: "Enterprise Workforce Management App",
    category: "Workforce Management / US Client Project",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "SV",
    accent: "from-sky-500/25 to-indigo-600/10",
    color: "from-blue-600 to-indigo-600",
    featured: true,
    usClient: true,
    tag: "US Client Project",
    playStore: "https://play.google.com/store/apps/details?id=com.simplifyvmsapp.mobile&hl=en_IN",
    appStore: "https://apps.apple.com/us/app/simplifyvms/id6759705043",
    description:
      "Simplify Workforce (US client): Enterprise workforce management app covering Jobs, Candidates, Assignments, and Timesheets, with localization support.",
    features: ["Jobs", "Candidates", "Assignments", "Timesheets", "Localization"],
    badges: ["US Client", "Flutter", "Dart", "REST API", "Localization", "Android/iOS"],
    caseStudy: {
      overview:
        "Enterprise workforce management application developed for a US-based client, covering workforce operations such as jobs, candidates, assignments and timesheets.",
      problem:
        "An enterprise workforce management platform needed a production mobile experience for distributed teams working across jobs, candidates, assignments and timesheets.",
      solution:
        "A Flutter application covering core workforce management workflows with localization support, released on both Google Play and the Apple App Store.",
      role: "Flutter Developer — Flutter mobile development, feature implementation, API integration, workforce management workflows, localization, production build and release support, and collaboration with product, backend and QA teams.",
      challenges: [
        "Workforce management workflows across jobs, candidates, assignments and timesheets",
        "Localization support across the application",
        "Coordinating delivery with a US-based client team",
      ],
      architecture: [
        "Feature-based Flutter structure with reusable components",
        "REST API integration layer",
        "Localization setup for multi-language support",
      ],
      production: [
        "Production build and release support",
        "Google Play and Apple App Store releases",
        "Collaboration with product, backend and QA teams",
      ],
      results: [
        "Live production application for a US-based enterprise client",
        "Available on both Google Play and the Apple App Store",
      ],
    },
  },
  {
    id: "baap-crm",
    name: "BAAP CRM",
    title: "BAAP CRM",
    subtitle: "Field Sales & Operations Engine",
    category: "CRM / Field Sales / Enterprise",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "BC",
    accent: "from-sky-500/25 to-blue-600/10",
    color: "from-sky-500 to-blue-700",
    featured: true,
    tag: "Enterprise CRM",
    playStore: "https://play.google.com/store/apps/details?id=com.baap.crm.app",
    appStore: "https://apps.apple.com/us/app/baap-crm/id6746981287",
    description:
      "An enterprise CRM platform designed for field teams and sales operations, covering customer management, lead management, campaigns, billing, field tracking, communication and reporting.",
    features: [
      "Lead Management",
      "Campaign Management",
      "POS & Billing",
      "Sales Pipeline",
      "GPS Field Tracking",
      "Location-based Attendance",
      "Call Management",
      "WhatsApp / SMS / Email workflows",
      "Task Management",
      "Reports & Analytics",
      "Offline support and synchronization",
    ],
    badges: ["Flutter", "REST API", "Firebase", "GPS", "Enterprise", "Android/iOS"],
    caseStudy: {
      overview:
        "BAAP CRM brings customer, lead, billing and field-team operations into a single mobile application for sales organisations working on the ground.",
      problem:
        "Field sales teams needed one mobile surface for leads, customer records, billing, attendance and communication instead of separate tools and manual reporting.",
      solution:
        "A role-aware Flutter application covering the sales pipeline end to end — from lead capture and campaigns through POS and billing, with GPS tracking, location-based attendance and integrated communication workflows.",
      role: "Flutter Developer / Senior Flutter Developer — feature development, API integration, state management, production debugging, release management, code reviews and collaboration with backend, QA and product teams.",
      challenges: [
        "Reliable GPS field tracking and location-based attendance across devices",
        "Offline usage with synchronization once connectivity returns",
        "Role-based access across sales, field and management users",
        "Keeping large list and reporting screens responsive",
      ],
      architecture: [
        "Feature-first Flutter structure with reusable UI components",
        "REST API layer with centralised error and session handling",
        "Firebase notifications for workflow updates",
        "Local persistence for offline-first flows",
      ],
      production: [
        "Play Store and App Store release management",
        "Production debugging and issue triage",
        "Jira-based task breakdown with Agile delivery",
      ],
      results: [
        "Shipped and maintained as a live production enterprise application",
        "Consolidated field sales workflows into a single mobile app",
      ],
    },
  },
  {
    id: "school-book",
    name: "School Book",
    title: "School Book",
    subtitle: "All-in-One School ERP & Community",
    category: "School ERP / Education",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "SB",
    accent: "from-emerald-500/25 to-teal-600/10",
    color: "from-emerald-500 to-teal-700",
    featured: true,
    tag: "EdTech ERP",
    playStore: "https://play.google.com/store/apps/details?id=com.school.book.app",
    appStore: "https://apps.apple.com/us/app/school-book/id6791931446",
    description:
      "An all-in-one school management application for students, teachers and administrators.",
    features: [
      "Geo-fencing attendance",
      "Leave management",
      "Fees",
      "Student certificates",
      "Leave approvals",
      "Notifications",
      "Multiple school workflows",
    ],
    badges: ["Flutter", "School ERP", "Firebase", "REST API", "Payments"],
    caseStudy: {
      overview:
        "School Book is a school ERP covering students, teachers and administrators across attendance, fees, certificates and day-to-day school operations.",
      problem:
        "Schools ran attendance, fees, transport, hostel and certificate workflows across disconnected systems with limited visibility for parents and staff.",
      solution:
        "A multi-role Flutter application supporting geo-fenced attendance, leave management, fees with payment integration, certificates and notifications across school workflows.",
      role: "Flutter Developer — multi-role UI, API integration, payment gateway integration, notifications and production releases.",
      challenges: [
        "Multiple user roles with distinct navigation and permissions",
        "Geo-fencing accuracy for attendance",
        "Payment gateway integration and callback handling for fees",
      ],
      architecture: [
        "Role-driven routing and reusable module widgets",
        "REST API services with shared session/auth layer",
        "Payment gateway SDK integration with success/failure callbacks",
      ],
      production: ["Play Store / App Store releases", "Ongoing production maintenance"],
      results: ["Live ERP app serving students, teachers and administrators"],
    },
  },
  {
    id: "officebook-hrms",
    name: "OfficeBook HRMS",
    title: "OfficeBook HRMS",
    subtitle: "Workforce & Attendance Suite (with AI Chat)",
    category: "HRMS / Workforce",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "OB",
    accent: "from-violet-500/25 to-indigo-600/10",
    color: "from-purple-600 to-indigo-700",
    featured: true,
    tag: "HRMS + AI Chat",
    playStore: "https://play.google.com/store/apps/details?id=com.baapcompany.officebook.hrms",
    appStore: "https://apps.apple.com/us/app/officebook-hrms/id6757068529",
    description:
      "A workplace management application focused on employee attendance, time management and leave workflows with integrated AI-powered chat assistance.",
    features: [
      "GPS-enabled attendance",
      "Working hours calculation",
      "Attendance history",
      "Leave application",
      "Manager approval workflow",
      "Leave balance",
      "AI-powered chat support",
      "Notifications",
    ],
    badges: ["Flutter", "Firebase", "GPS", "HRMS", "AI Chat", "REST API"],
    caseStudy: {
      overview:
        "OfficeBook HRMS handles day-to-day workforce operations: attendance, working hours, and leave requests with manager approvals.",
      problem:
        "Organisations needed an accurate, location-aware way for employees to mark attendance and manage leave without paper or spreadsheets.",
      solution:
        "A focused Flutter HRMS app with GPS-enabled attendance, working-hour calculation, attendance history, leave application and approval workflows, plus AI-powered chat support.",
      role: "Flutter Developer — feature development, API integration, state management, notifications, AI chat support integration and release support.",
      challenges: [
        "Accurate GPS attendance capture and validation",
        "Working-hours computation across shifts and edge cases",
        "Multi-role leave approval flow",
        "Integrating conversational AI support with mobile context",
      ],
      architecture: [
        "Clean separation of feature modules and shared widgets",
        "REST API integration with typed models",
        "Firebase Cloud Messaging for approval and status notifications",
        "AI Chat service integration with fallback responses",
      ],
      production: ["Store releases and versioning", "Production support and bug fixes"],
      results: ["Live production HRMS app used for daily attendance, leave workflows, and instant AI help"],
    },
  },
  {
    id: "strawberry-ems",
    name: "Strawberry EMS",
    title: "Strawberry EMS",
    subtitle: "Education & Staff Management Platform",
    category: "Education / Employee Management",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "SE",
    accent: "from-red-500/25 to-rose-600/10",
    color: "from-pink-500 to-rose-700",
    tag: "EMS Platform",
    playStore: "https://play.google.com/store/apps/details?id=com.strawberry.ems",
    appStore: "https://apps.apple.com/us/app/strawberry-ems/id6779705728",
    description:
      "School and employee management platform covering operational workflows such as attendance, payroll and document management.",
    features: ["Attendance", "Payroll", "Document Management", "Employee workflows"],
    badges: ["Flutter", "EMS", "REST API", "Firebase", "Android/iOS"],
  },
  {
    id: "goyant",
    name: "Goyant",
    title: "Goyant",
    subtitle: "Goa Travel & Local Services Ecosystem",
    category: "Travel / Local Services",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "GY",
    accent: "from-amber-500/25 to-orange-600/10",
    color: "from-amber-500 to-orange-600",
    featured: true,
    tag: "Travel Discovery",
    playStore: "https://play.google.com/store/apps/details?id=com.goyant.travel",
    appStore: "https://apps.apple.com/us/app/goyant/id6774471324",
    description:
      "A digital platform connecting users with local services and businesses in Goa, enabling discovery and booking of travel and local experiences.",
    features: [
      "Taxi discovery",
      "Moto rental",
      "Vehicle rental",
      "Restaurants",
      "Cafes",
      "Events",
      "Service providers",
      "Booking experience",
      "Real-time availability",
    ],
    badges: ["Flutter", "Travel", "Booking", "REST API", "Android/iOS"],
  },
  {
    id: "goyant-business",
    name: "Goyant Business",
    title: "Goyant Business",
    subtitle: "Vendor & Partner Booking Operations",
    category: "Business / Service Provider Platform",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "GB",
    accent: "from-rose-500/25 to-pink-600/10",
    color: "from-rose-500 to-pink-700",
    tag: "B2B Partner App",
    playStore: "https://play.google.com/store/apps/details?id=com.goyant.business.app",
    appStore: "https://apps.apple.com/us/app/goyant-business/id6774471933",
    description:
      "Business-side application for service providers operating within the Goyant ecosystem.",
    features: ["Service provider workflows", "Listing management", "Booking handling", "Earnings dashboard"],
    badges: ["Flutter", "REST API", "Business", "Android/iOS"],
  },
  {
    id: "treecoin",
    name: "Treecoin",
    title: "Treecoin",
    subtitle: "Microfinance & Loan Management",
    category: "Finance / Loan Management",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "TC",
    accent: "from-teal-500/25 to-cyan-600/10",
    color: "from-teal-600 to-emerald-800",
    tag: "Fintech Platform",
    playStore: "https://play.google.com/store/apps/details?id=com.treecoin.app",
    description:
      "A finance and loan management platform for managing loan products, customers and agents with real-time operational visibility.",
    features: [
      "Loan Product Management",
      "Loan Applications",
      "Customer Onboarding",
      "Agent Management",
      "Repayment Schedules",
      "Loan Summaries",
      "Dashboards",
      "Analytics",
    ],
    badges: ["Flutter", "Finance", "REST API", "Secure Storage"],
  },
  {
    id: "janhit",
    name: "Janhit",
    title: "Janhit",
    subtitle: "Citizen Civic Issue Grievance Platform",
    category: "Citizen Services / Community",
    platform: "Android / iOS",
    platforms: ["Android", "iOS"],
    initials: "JH",
    accent: "from-blue-500/25 to-sky-600/10",
    color: "from-cyan-600 to-blue-800",
    tag: "Civic Tech",
    playStore: "https://play.google.com/store/apps/details?id=com.government.janhit",
    appStore: "https://apps.apple.com/us/app/%E0%A4%9C%E0%A4%A8%E0%A4%B9-%E0%A4%A4/id6763272223",
    description:
      "A community platform allowing users to report local public issues such as roads, water supply, electricity and cleanliness using photos and location details.",
    features: [
      "Issue Reporting",
      "Photo Upload",
      "Location Sharing",
      "Complaint Tracking",
      "Community Awareness",
    ],
    badges: ["Flutter", "Community", "REST API", "Location", "Android/iOS"],
    note: "Private community platform — not an official government service.",
  },
  {
    id: "marathi-shala",
    name: "Marathi Shala",
    title: "Marathi Shala",
    subtitle: "Interactive Language Learning App",
    category: "Education / Language Learning",
    platform: "Android",
    platforms: ["Android"],
    initials: "MS",
    accent: "from-fuchsia-500/25 to-purple-600/10",
    color: "from-fuchsia-600 to-purple-800",
    tag: "EdTech & Language",
    description:
      "An educational application focused on Marathi language learning through structured lessons, interactive exercises and engaging learning content.",
    features: ["Structured lessons", "Interactive exercises", "Learning content"],
    badges: ["Flutter", "Education", "Android"],
  },
  {
    id: "rm-drip-dealer",
    name: "RM Drip Dealer",
    title: "RM Drip Dealer",
    subtitle: "B2B Agriculture Dealer Management",
    category: "Dealer / Business Management",
    platform: "Android",
    platforms: ["Android"],
    initials: "RM",
    accent: "from-lime-500/25 to-green-600/10",
    color: "from-lime-600 to-green-800",
    tag: "B2B Agritech",
    playStore: "https://play.google.com/store/apps/details?id=com.rmdrip.dealer",
    description: "A dealer-facing business management application built with Flutter.",
    features: ["Dealer workflows", "Business management", "Ordering & Invoicing"],
    badges: ["Flutter", "REST API", "Android"],
  },
];

export const experience = {
  currentCompany: {
    name: "INFYNOD TECH PRIVATE LIMITED",
    position: "Senior Flutter Developer",
    period: "2026 – Present",
    location: "Pune, Maharashtra, India",
    responsibilities: [
      "Leading mobile product architecture and engineering across consumer and enterprise applications",
      "Architected and deployed Welvors (trust-first dating & matchmaking application) on Google Play Store",
      "Engineered real-time WebSockets communication layer for low-latency chat, presence, and messaging",
      "Integrated AI selfie verification & anti-spoofing facial recognition pipelines for safe user onboarding",
      "Implemented state management with GetX, clean modular directory structures, and reusable components",
      "Integrated in-app purchases, subscription tiers, and payment gateways (Razorpay)",
      "Set up production release pipelines, versioning, and Firebase Crashlytics monitoring",
    ],
  },
  previousCompany: {
    name: "Baap Services Private Limited",
    position: "Flutter & Full Stack Developer (Promoted / Best Employee '25)",
    period: "2024 – 2025",
    location: "Sangamner, Maharashtra, India",
    responsibilities: [
      "Delivered 10+ production Flutter applications across Android and iOS",
      "Won Best Employee Award 2025 for ownership, speed of delivery, and zero-regression releases",
      "Full-stack feature ownership — Flutter UI to Node.js/Fastify APIs and MySQL schemas",
      "Integrated 3 payment gateways: Razorpay, Easebuzz, HDFC Juspay",
      "Mentored 8+ junior developers and interns on clean code and Flutter best practices",
      "Managed Google Play Store and Apple App Store production deployments",
    ],
  },
  collaboration: ["Product", "QA", "Backend", "Design", "Management"],
};

export const achievements = [
  { title: "Best Employee Award", detail: "2025", icon: "trophy" },
  { title: "10+ Production Apps Shipped", detail: "Across Android and iOS", icon: "rocket" },
  { title: "8+ Developers & Interns Mentored", detail: "Code reviews and guidance", icon: "users" },
  { title: "Full Stack Development", detail: "Node.js, Fastify, MySQL & REST APIs", icon: "layers" },
  { title: "3 Payment Gateway Integrations", detail: "Razorpay, Easebuzz, HDFC Juspay", icon: "credit-card" },
  { title: "Android + iOS Production Releases", detail: "Play Store, App Store, TestFlight", icon: "smartphone" },
  { title: "Open-source Flutter Package", detail: "toast_service on pub.dev", icon: "package" },
];

export const philosophy = [
  { title: "Clean Architecture", detail: "Structure code for scalability and maintainability." },
  { title: "Production First", detail: "Build for real users, real devices and real-world constraints." },
  { title: "Reusable Components", detail: "Reduce duplication through reusable UI and architecture patterns." },
  { title: "Continuous Learning", detail: "Explore modern Flutter, AI and mobile engineering practices." },
];

export const buildProcess = [
  "Requirement",
  "Architecture",
  "Development",
  "Code Review",
  "Testing",
  "Release",
  "Production Monitoring",
];

export const paymentFlow = [
  "Mobile App",
  "Payment Gateway",
  "Authentication",
  "Payment Processing",
  "Success / Failure Callback",
];

export const openSource = {
  name: "toast_service",
  pubDevUrl: "https://pub.dev/packages/toast_service",
  installCommand: "flutter pub add toast_service",
  description: "A highly customizable, lightweight Flutter toast notification package engineered for modern mobile apps. Supports animated entries, rich icons, auto-dismiss timers, and theme-adaptive colors.",
  features: [
    "Zero boilerplate implementation",
    "Support for success, error, warning & custom banners",
    "Smooth physics-based slide & fade animations",
    "Works seamlessly on both Android and iOS"
  ]
};
