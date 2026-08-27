export const profile = {
  name: "Muhammad Ahmad",
  role: "AI/ML Engineer",
  supporting: "AI/ML Engineer & Data Science Student",
  headline: "Building explainable AI, RAG systems, and full-stack intelligent applications.",
  intro:
    "I'm an AI/ML Engineer and Data Science student at FAST-NUCES Lahore, focused on building practical machine learning, NLP, deep learning, and intelligent software applications. I enjoy turning data and AI research into useful, explainable solutions.",
  education: "BS Data Science — FAST-NUCES Lahore",
  location: "Lahore, Pakistan",
  coords: "LAT. 31.5204° N // LON. 74.3587° E",
  email: "mahmadimran383@gmail.com",
  phone: "+92 326 4498774",
  github: "https://github.com/Muhammad-Ahmad2511",
  githubHandle: "Muhammad-Ahmad2511",
  linkedin: "https://www.linkedin.com/in/hafiz-muhammad-ahmad-b76304273/",
  linkedinHandle: "Muhammad Ahmad",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const keyDetails = [
  { label: "Education", value: "BS Data Science — FAST-NUCES Lahore" },
  { label: "Focus", value: "AI Engineering, Machine Learning, Deep Learning, NLP, LLMs" },
  { label: "Interests", value: "Intelligent Applications, Applied AI, AI Systems" },
  { label: "Availability", value: "Open to AI/ML Opportunities", live: true },
];

export const approach = [
  {
    title: "Learn by Building",
    body: "I turn concepts in machine learning and AI into practical working systems.",
  },
  {
    title: "Explainable AI",
    body: "I value models and systems that can be understood, evaluated, and trusted.",
  },
  {
    title: "Continuous Learning",
    body: "I continuously explore new AI techniques, frameworks, and real-world applications.",
  },
];

export const currentlyBuilding = {
  title: "AI Proposal Builder",
  body: "Exploring RAG, semantic retrieval, LLMs, and intelligent proposal generation.",
  tags: ["LangChain", "Pinecone", "Groq", "RAG", "React"],
};

export const principles = [
  {
    title: "Machine Learning",
    body: "Building models that learn patterns from data and support useful predictions.",
  },
  {
    title: "Deep Learning",
    body: "Exploring neural networks and modern deep learning techniques.",
  },
  { title: "NLP & LLMs", body: "Working with transformers, language models, embeddings, and RAG." },
  {
    title: "Explainable AI",
    body: "Making machine learning decisions easier to understand and evaluate.",
  },
];

export const heroStats = [
  { value: "2+", label: "Internships", sub: "Industry Experience" },
  { value: "8+", label: "Projects", sub: "Production Grade Work" },
  { value: "5+", label: "Certifications", sub: "Professional Learning" },
  { value: "2027", label: "FAST Graduate", sub: "BS Data Science" },
];

export const marquee = [
  "EXPLAINABLE AI",
  "PRODUCTION ML",
  "RETRIEVAL-AUGMENTED GENERATION",
  "LLM ENGINEERING",
  "AI AUTOMATION",
  "DATA ENGINEERING",
  "FULL STACK AI",
  "MODEL DEPLOYMENT",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  mode: string;
  tag: string;
  summary: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
  certificateUrl?: string;
};

export const experiences: Experience[] = [
  {
    company: "DevNauts",
    role: "AI Intern",
    period: "Jun 2026 – Aug 2026",
    mode: "Lahore — Remote",
    tag: "AI ENGINEERING",
    summary:
      "Worked across full-stack development and AI engineering, building the technical foundation for retrieval-augmented and intelligent application systems.",
    bullets: [
      "Developed a real-time MERN chat application using React, Node.js, Express, MongoDB, Socket.io, and JWT-based authentication.",
      "Engineered a Retrieval-Augmented Generation pipeline including document chunking, vector embeddings, similarity search, and grounded response generation.",
      "Used LangChain, OpenAI/Gemini, and ChromaDB/FAISS.",
      "Co-designed and built a production RAG-based proposal generation system using Pinecone, LangChain.js, and Groq LLM.",
      "Combined retrieval-grounded facts with few-shot tone matching to generate client proposals.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "LangChain",
      "Pinecone",
      "Groq",
      "RAG",
    ],
    certificateUrl: "/devnauts-certificate.pdf",
  },
  {
    company: "Phoenux.design",
    role: "AI Product Development Intern",
    period: "Jun 2026 – Aug 2026",
    mode: "Lahore — Onsite",
    tag: "AI PRODUCT DEVELOPMENT",
    summary:
      "Contributed to AI product development and intelligent software workflows, working across practical AI applications and product-oriented engineering tasks.",
    bullets: [
      "Collaborated closely with the product and development team, gaining hands-on exposure to AI-assisted product development workflows.",
      "Contributed to the AI Project Management Assistant, supporting AI-assisted development.",
      "Worked on the AI Website Audit Tool, applying AI-assisted development practices.",
      "Built an AI-Powered Proposal Generator combining Figma-based design with Claude-driven AI development.",
      "Worked across a range of AI tools, demonstrating strong learning agility and responsiveness to feedback.",
    ],
    certificateUrl: "/phoenux-certificate.pdf",
    stack: [
      "AI Applications",
      "LLM Workflows",
      "Python",
      "AI Product Development",
      "Full-Stack AI",
    ],
  },
  {
    company: "Nepta Solutions",
    role: "Technical Intern",
    period: "Jun 2025 – Aug 2025",
    mode: "United Kingdom — Remote",
    tag: "TECHNICAL INTERNSHIP",
    summary: "Worked on backend automation and business process integration using C# and SAGE 50.",
    bullets: [
      "Developed backend automation workflows using C# and SAGE 50 for business process integration.",
      "Integrated RESTful API endpoints for system configuration and data exchange.",
      "Collaborated remotely through Microsoft Teams for task coordination.",
    ],
    stack: ["C#", "SAGE 50", "REST APIs", "Backend Automation", "System Integration"],
    certificateUrl: "/nepta-certificate.pdf",
  },
];

export type Project = {
  index: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  pipeline: { label: string; sub: string; accent?: boolean }[];
  stack: string[];
  github: string;
  demo?: string;
  featured?: string;
  filter: "Generative AI / NLP" | "Machine Learning" | "Data & Analytics" | "Full Stack";
};

export const projects: Project[] = [
  {
    index: "01",
    title: "DevNauts AI Proposal Builder",
    category: "GENERATIVE AI / FULL STACK",
    filter: "Generative AI / NLP",
    featured: "FEATURED // AI + RAG",
    description:
      "A chat-based proposal generation system that combines retrieval-augmented generation with few-shot tone matching to draft client proposals from a project knowledge base.",
    pipeline: [
      { label: "Brief", sub: "Client Request" },
      { label: "Knowledge", sub: "Pinecone DB" },
      { label: "LLM Orchestration", sub: "Groq API" },
      { label: "Proposal", sub: "Grounded Draft", accent: true },
    ],
    stack: ["Node.js", "LangChain.js", "Pinecone", "Groq", "RAG", "React", "Vercel"],
    github: "https://github.com/idreesahmed1257/uw-proposal-builder",
    demo: "https://uw-proposal-builder.vercel.app/",
  },
  {
    index: "02",
    title: "Site-Sense Audit Platform",
    subtitle: "Evidence-Based AI Website Auditing Platform",
    category: "GENERATIVE AI / NLP + FULL STACK",
    filter: "Full Stack",
    featured: "FEATURED // AI + FULL STACK",
    description:
      "Evidence-based web auditing platform for SEO, Accessibility, Performance, and Technical Health using real browser crawling via Playwright. OpenAI explains verified findings collected by the rule engine rather than discovering raw issues.",
    highlights: ["Optional AI configuration through environment variables."],
    pipeline: [
      { label: "URL Input", sub: "Playwright" },
      { label: "Rules", sub: "Rule Engine", accent: true },
      { label: "Findings", sub: "Verified Evidence" },
      { label: "GPT Explanation", sub: "OpenAI SDK", accent: true },
    ],
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Playwright",
      "OpenAI SDK",
      "Docker",
    ],
    github: "https://github.com/Muhammad-Ahmad2511/site-sense",
    demo: "https://site-sense-three.vercel.app/",
  },
  {
    index: "03",
    title: "PakWheels Car Price Predictor",
    category: "MACHINE LEARNING / EXPLAINABLE AI",
    filter: "Machine Learning",
    featured: "FEATURED // MACHINE LEARNING",
    description:
      "Machine learning web application predicting secondhand car prices in Pakistan with explainable AI feature attribution using SHAP.",
    highlights: [
      "Scraped 24,000+ listings.",
      "7-step cleaning pipeline with 97.6% retention.",
      "Engineered 12 domain features.",
      "Trained XGBoost / LightGBM models.",
    ],
    pipeline: [
      { label: "Raw Data", sub: "24k Listings" },
      { label: "Pipeline", sub: "7-Step Cleaning" },
      { label: "XGBoost", sub: "Model", accent: true },
      { label: "SHAP", sub: "Explainability", accent: true },
    ],
    stack: ["Python", "XGBoost", "LightGBM", "SHAP", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Muhammad-Ahmad2511/used-car-price-predictor",
    demo: "https://muhammad-ahmad2511-used-car-price-predictor.streamlit.app/",
  },
  {
    index: "04",
    title: "Support Ticket Triage System",
    category: "GENERATIVE AI / NLP",
    filter: "Generative AI / NLP",
    description:
      "End-to-end support ticket automation using a local ChromaDB-backed RAG architecture to classify incoming tickets and generate grounded draft responses through structured prompt engineering.",
    pipeline: [
      { label: "Inbound Ticket", sub: "Routing" },
      { label: "ChromaDB", sub: "Retrieval", accent: true },
      { label: "Llama 3.3", sub: "Inference", accent: true },
      { label: "Draft Gen", sub: "Grounded Reply" },
    ],
    stack: ["Python", "Flask", "ChromaDB", "Groq API", "Llama 3.3", "Prompt Engineering"],
    github: "https://github.com/Muhammad-Ahmad2511/support-triage-project",
  },
  {
    index: "05",
    title: "Emotion Detection in Social Text",
    category: "NLP / DEEP LEARNING",
    filter: "Generative AI / NLP",
    description:
      "Systematic comparison of zero-shot, few-shot, and fine-tuning strategies for multi-class emotion detection on 20,000 Reddit comments.",
    pipeline: [
      { label: "Social Text", sub: "Reddit" },
      { label: "Zero-Shot", sub: "Flan-T5" },
      { label: "Fine-Tune", sub: "DistilBERT", accent: true },
      { label: "Classifier", sub: "Multi-class" },
    ],
    stack: ["PyTorch", "Hugging Face", "Flan-T5", "DistilBERT", "NLP"],
    github: "https://github.com/Muhammad-Ahmad2511/emotion-detection-small-llms",
  },
  {
    index: "06",
    title: "Sales Trend Analysis",
    category: "DATA & ANALYTICS",
    filter: "Data & Analytics",
    description:
      "Time-series analysis of sales data to identify seasonal patterns and analyze demand trends.",
    pipeline: [
      { label: "Transactions", sub: "Sales Data" },
      { label: "STL", sub: "Decomposition" },
      { label: "ACF / PACF", sub: "Autocorrelation" },
      { label: "Forecasting", sub: "Seasonality", accent: true },
    ],
    stack: ["Python", "Time-Series Analysis", "Data Mining", "Statsmodels", "Scikit-learn"],
    github: "https://github.com/Muhammad-Ahmad2511/sales-trend-analysis",
  },
  {
    index: "07",
    title: "Electronics Inventory Dashboard",
    category: "DATA & ANALYTICS / BI",
    filter: "Data & Analytics",
    description:
      "Power BI dashboard backed by SQL analyzing sales performance, stock levels, supplier activity, and regional sales.",
    pipeline: [
      { label: "SQL Database", sub: "Source" },
      { label: "Modelling", sub: "Star Views" },
      { label: "Measures", sub: "Calculations", accent: true },
      { label: "Power BI", sub: "Dashboard" },
    ],
    stack: ["SQL", "Power BI", "Inventory Analytics"],
    github: "https://github.com/Muhammad-Ahmad2511/Electronics-Inventory-Management-Dashboard",
  },
  {
    index: "08",
    title: "Retail Inventory Forecasting & BI",
    category: "DATA ENGINEERING / BI",
    filter: "Data & Analytics",
    description:
      "Star Schema data warehouse for 73,000+ records with ETL pipelines achieving a 98% query speedup, plus Power BI dashboards for demand, pricing elasticity, and seasonal analysis.",
    pipeline: [
      { label: "Source Data", sub: "73k Records" },
      { label: "ETL Pipeline", sub: "Transform", accent: true },
      { label: "Warehouse", sub: "Star Schema" },
      { label: "Analytics", sub: "Power BI" },
    ],
    stack: ["PostgreSQL", "ETL", "Data Warehousing", "Power BI", "DAX", "Star Schema"],
    github: "https://github.com/Muhammad-Ahmad2511/retail-inventory-analytics-bi",
  },
  {
    index: "09",
    title: "Real-Time MERN Chat Infrastructure",
    category: "FULL STACK DEVELOPMENT",
    filter: "Full Stack",
    description:
      "Real-time full-stack chat infrastructure establishing bi-directional communication and authentication as the foundation for future RAG-powered applications.",
    pipeline: [
      { label: "React Client", sub: "Interface" },
      { label: "Socket.io", sub: "Realtime", accent: true },
      { label: "Express App", sub: "JWT Auth" },
      { label: "MongoDB", sub: "Persistence", accent: true },
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
    github: "https://github.com/Muhammad-Ahmad2511/real-time-chat-app",
  },
];

export const projectFilters = [
  "ALL",
  "Generative AI / NLP",
  "Machine Learning",
  "Data & Analytics",
  "Full Stack",
] as const;

export const stackGroups = [
  {
    no: "01",
    kicker: "CORE LANGUAGES",
    title: "Programming",
    items: ["Python", "SQL", "C", "C++", "JavaScript", "TypeScript"],
    primary: ["Python", "SQL", "TypeScript"],
  },
  {
    no: "02",
    kicker: "CLASSICAL ML",
    title: "ML / AI",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Dimensionality Reduction",
      "Feature Engineering",
      "Web Scraping",
      "LightGBM",
      "XGBoost",
    ],
    primary: ["Feature Engineering", "XGBoost", "LightGBM"],
  },
  {
    no: "03",
    kicker: "RAG & AGENTS",
    title: "NLP & Large Language Models",
    items: [
      "Hugging Face",
      "Transformers",
      "Flan-T5",
      "DistilBERT",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "RAG",
      "LangChain",
      "Pinecone",
      "ChromaDB",
      "Groq API",
      "OpenAI SDK",
    ],
    primary: ["RAG", "LangChain", "Hugging Face", "Transformers", "Pinecone"],
  },
  {
    no: "04",
    kicker: "VISION & NETS",
    title: "Deep Learning",
    items: ["PyTorch", "ANN", "RNN", "CNN"],
    primary: ["PyTorch"],
  },
  {
    no: "05",
    kicker: "XAI & STATS",
    title: "Explainable AI & Data Analysis",
    items: [
      "SHAP",
      "XAI",
      "Feature Importance",
      "Time-Series Analysis",
      "EDA",
      "Data Cleaning",
      "Statistical Analysis",
      "Scikit-learn",
    ],
    primary: ["SHAP", "XAI", "Scikit-learn"],
  },
  {
    no: "06",
    kicker: "SYSTEMS & APIS",
    title: "Data, Databases & Backend",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Data Warehousing",
      "ETL",
      "SQL Optimization",
      "Node.js",
      "Express",
      "Socket.io",
      "JWT",
      "API Integration",
      "Playwright",
    ],
    primary: ["PostgreSQL", "MongoDB", "Node.js", "Playwright"],
  },
  {
    no: "07",
    kicker: "UI & CHARTS",
    title: "Visualization / UI",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
    ],
    primary: ["React", "Tailwind CSS", "Power BI"],
  },
  {
    no: "08",
    kicker: "WORKFLOW",
    title: "Tools",
    items: [
      "Jupyter",
      "VS Code",
      "Google Colab",
      "Git/GitHub",
      "Streamlit",
      "Docker",
      "Vercel",
      "Railway",
    ],
    primary: ["Git/GitHub", "Docker", "Streamlit"],
  },
];

export const pipelineFlow = [
  { no: "01", title: "INPUT DATA", sub: "PDF · CSV · APIs" },
  { no: "02", title: "ML PROCESSING", sub: "Feature Eng · XGBoost" },
  { no: "03", title: "RETRIEVAL & LLM", sub: "RAG · LangChain · VectorDB" },
  { no: "04", title: "BACKEND ENGINE", sub: "Node.js · MongoDB" },
  { no: "05", title: "APPLICATION UI", sub: "React + Tailwind CSS" },
];

export const education = {
  degree: "Bachelor of Science in Data Science",
  school: "FAST-NUCES — Lahore, Pakistan",
  duration: "2023 — 2027",
  status: "CURRENTLY STUDYING",
  tags: ["DATA SCIENCE", "MACHINE LEARNING", "ARTIFICIAL INTELLIGENCE"],
};

export const certifications = [
  {
    no: "01",
    title: "Deep Learning with PyTorch",
    issuer: "DataCamp",
    tag: "DEEP LEARNING",
    url: "https://www.datacamp.com/statement-of-accomplishment/course/9eabbc32e0ca84d8f4a892be28c99fa1c06c19d6?raw=1",
  },
  {
    no: "02",
    title: "Prompt Engineering with OpenAI API",
    issuer: "DataCamp",
    tag: "GENERATIVE AI",
    url: "https://www.datacamp.com/statement-of-accomplishment/course/e18d6c6bb8e10cd4cd046e0be8e8f8a8cded9148?raw=1",
  },
  {
    no: "03",
    title: "IBM Machine Learning",
    issuer: "Coursera",
    tag: "MACHINE LEARNING",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/SJFWK6SVPRFA",
  },
  {
    no: "04",
    title: "Feature Engineering for Machine Learning",
    issuer: "DataCamp",
    tag: "MACHINE LEARNING",
    url: "https://www.datacamp.com/statement-of-accomplishment/course/2c0a7a8b961475cb1c77d0a0289c5a3d870e6c0b?raw=1",
  },
  {
    no: "05",
    title: "Deep Learning and Reinforcement Learning",
    issuer: "Coursera",
    tag: "DEEP LEARNING",
    url: "https://www.coursera.org/account/accomplishments/certificate/M7W3YP1FABUB",
  },
];
