import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Abhishek Patel",
  title: "Hi all, I'm Abhishek",
  description:
    "Senior Backend & AI Engineer with 6+ years building scalable distributed systems, event-driven architectures, and production GenAI applications. Specialist in Python (FastAPI, Django), RAG pipelines, LLM integrations, Splunk platform engineering, and enterprise observability.",
  resumeLink:
    "https://docs.google.com/document/d/14ixR5X48mip23jT-PdJit7stRGBG6CkP-os26Ykq1AY/edit",
};

export const openSource = {
  githubUserName: "patelabhi1607",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "https://personal-portfolio-fawn-seven-44.vercel.app",
  linkedin: "https://www.linkedin.com/in/abhishek-patel-12221816a/",
  github: "https://github.com/patelabhi1607",
  twitter: "https://twitter.com/imabhishek1698",
  instagram: "https://www.instagram.com/abhiiptel/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "BACKEND & AI ENGINEER BUILDING PRODUCTION-GRADE SYSTEMS IN THE AGE OF AI",
  data: [
    {
      title: "Backend Engineering",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building high-throughput async APIs with FastAPI, Django, and Flask at scale"),
        emoji("⚡ Designing event-driven microservices using Kafka, RabbitMQ, WebSockets & Celery"),
        emoji("⚡ Engineering fault-tolerant data pipelines with back-pressure, caching & compression"),
      ],
      softwareSkills: [
        { skillName: "Python",      iconifyTag: "logos:python" },
        { skillName: "FastAPI",     iconifyTag: "logos:fastapi" },
        { skillName: "Django",      iconifyTag: "vscode-icons:file-type-django" },
        { skillName: "Flask",       iconifyTag: "logos:flask" },
        { skillName: "GraphQL",     iconifyTag: "logos:graphql" },
        { skillName: "Kafka",       iconifyTag: "logos:apache-kafka" },
        { skillName: "RabbitMQ",    iconifyTag: "logos:rabbitmq-icon" },
        { skillName: "PostgreSQL",  iconifyTag: "logos:postgresql" },
        { skillName: "MongoDB",     iconifyTag: "logos:mongodb-icon" },
        { skillName: "Redis",       iconifyTag: "logos:redis" },
        { skillName: "Elasticsearch", iconifyTag: "logos:elasticsearch" },
        { skillName: "gRPC",        iconifyTag: "logos:grpc" },
      ],
    },
    {
      title: "AI / GenAI Engineering",
      lottieAnimationFile: "/lottie/skills/ethereum.json",
      skills: [
        emoji("⚡ Building production RAG pipelines with LangChain, LlamaIndex & vector databases"),
        emoji("⚡ Integrating and orchestrating LLMs (Claude, GPT-4, Llama 3) with tool calling & agents"),
        emoji("⚡ Designing AI-powered automation workflows with embeddings, semantic search & prompt engineering"),
      ],
      softwareSkills: [
        { skillName: "LangChain",   iconifyTag: "simple-icons:langchain" },
        { skillName: "Python",      iconifyTag: "logos:python" },
        { skillName: "OpenAI",      iconifyTag: "simple-icons:openai" },
        { skillName: "HuggingFace", iconifyTag: "logos:hugging-face-icon" },
        { skillName: "Pinecone",    iconifyTag: "simple-icons:pinecone" },
        { skillName: "Cloudflare",  iconifyTag: "logos:cloudflare-icon" },
        { skillName: "Pandas",      iconifyTag: "logos:pandas-icon" },
        { skillName: "NumPy",       iconifyTag: "logos:numpy" },
      ],
    },
    {
      title: "Cloud, DevOps & Observability",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        emoji("⚡ Orchestrating containerised workloads with Docker & Kubernetes on AWS"),
        emoji("⚡ Engineering 25+ Splunk apps/add-ons and DataDog integrations for enterprise SIEM"),
        emoji("⚡ Building robust CI/CD pipelines with GitHub Actions, Bamboo & OpenTelemetry tracing"),
      ],
      softwareSkills: [
        { skillName: "AWS",            iconifyTag: "logos:aws" },
        { skillName: "Docker",         iconifyTag: "logos:docker-icon" },
        { skillName: "Kubernetes",     iconifyTag: "logos:kubernetes" },
        { skillName: "GitHub Actions", iconifyTag: "logos:github-actions" },
        { skillName: "Splunk",         iconifyTag: "simple-icons:splunk" },
        { skillName: "DataDog",        iconifyTag: "logos:datadog" },
        { skillName: "Grafana",        iconifyTag: "logos:grafana" },
        { skillName: "Nginx",          iconifyTag: "logos:nginx" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Backend (Python / FastAPI / Django)",        progressPercentage: "95" },
  { Stack: "SIEM & Observability (Splunk / DataDog)",    progressPercentage: "92" },
  { Stack: "AI / GenAI (RAG / LLMs / Agents)",          progressPercentage: "85" },
  { Stack: "Cloud & DevOps (AWS / Docker / K8s)",       progressPercentage: "82" },
  { Stack: "Data & Messaging (Kafka / Redis / Elastic)", progressPercentage: "80" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Dharamsinh Desai University",
    subHeader: "Bachelor of Technology in Information Technology",
    duration: "September 2017 – April 2021",
    desc: "Graduated with Grade A in a comprehensive program focused on software engineering, data structures, algorithms, and modern web technologies.",
    grade: "Grade A",
    descBullets: [
      "Studied advanced data structures, algorithms, and system design.",
      "Developed proficiency in Python, Java, and web technologies.",
      "Built a Smart Attendance System using Flask and Neural Networks as a final-year project.",
      "Participated in hackathons and coding competitions at the university level.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer — Backend & AI",
    company: "GlobalLogic (Client: 6sense)",
    companyLogo: "/img/icons/common/globallogic_logo.svg",
    date: "May 2026 – Present",
    desc: "Building backend APIs and AI/GenAI integrations for the 6sense revenue-AI platform as part of the Platform Apps Team.",
    descBullets: [
      "Develop and maintain backend APIs supporting core product workflows on the 6sense revenue-AI platform.",
      "Build automation tooling and services that streamline recurring engineering and data workflows, reducing manual effort.",
      "Integrate LLM and RAG-based approaches using LangChain & LlamaIndex to enhance product intelligence and automation.",
      "Contribute end-to-end across backend APIs and frontend (React) integration for selected product features.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Qualys",
    companyLogo: "/img/icons/common/qualys_logo.svg",
    date: "Dec 2025 – Apr 2026",
    desc: "Enhanced Qualys Connectors and SIEM integrations for reliable security data ingestion, normalization, and correlation across enterprise security platforms.",
    descBullets: [
      "Developed and enhanced Qualys Connectors and SIEM integrations for multi-platform security data ingestion.",
      "Built scalable backend services for real-time security event processing in cloud-based environments.",
      "Improved observability, integration efficiency, and performance across Qualys cloud security infrastructure.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Crest Data Systems",
    companyLogo: "/img/icons/common/crest_data_systems_logo.jpeg",
    date: "Dec 2020 – Nov 2025",
    desc: "Led backend and full-stack development of Splunkbase and 25+ enterprise Splunk apps/add-ons, and built DataDog integrations improving monitoring efficiency for Fortune 500 clients.",
    descBullets: [
      "Architected Splunkbase — a large-scale enterprise marketplace — using Django, PostgreSQL, Kubernetes, and event-driven workflows.",
      "Engineered a VM Management System (Python + ReactJS) reducing deployment time by 40%; built REST APIs with MongoDB, Redis caching, and Docker.",
      "Led the Splunk App Review Portal (TypeScript, Next.js, Django), increasing submission processing speed by 50%.",
      "Delivered 25+ Splunk apps & add-ons with dashboards, alerting, correlation searches, and ES/ITSI integrations.",
      "Designed DataDog and Cisco Splunk integrations improving monitoring efficiency by 25%.",
      "Integrated LangChain, LlamaIndex, and Cloudflare to deliver actionable intelligence across observability workflows.",
      "Implemented back-pressure and compression for high-volume data ingestion, reducing memory usage by 15%.",
      "Resolved 100+ high-priority customer issues consistently exceeding SLA expectations.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Real-Time Chat App with AI",
    desc: "Scalable chat system with FastAPI, WebSockets, and Redis for real-time messaging. Integrated AI-powered message summarization and sentiment analysis using LangChain and Llama 3. Containerized with Docker for fault-tolerant deployment.",
    github: "https://github.com/patelabhi1607",
  },
  {
    name: "GenAI Document Summarizer",
    desc: "Document summarization backend using LangChain, LlamaIndex, and Llama 3, processing PDFs, web pages, and text inputs. REST API service for structured summaries with async processing for high-performance AI tasks.",
    github: "https://github.com/patelabhi1607",
  },
  {
    name: "Smart Attendance System",
    desc: "Facial recognition attendance system using Flask and a Siamese Neural Network achieving 95%+ accuracy on live video feeds with real-time logging.",
    github: "https://github.com/patelabhi1607/smartattendance",
  },
  {
    name: "Micro E-Commerce Platform",
    desc: "Django-powered e-commerce platform with product catalog, cart management, Stripe payment integration, and admin dashboard for inventory control.",
    github: "https://github.com/patelabhi1607/micro-ecommerce/",
  },
  {
    name: "Music Controller (Real-Time)",
    desc: "Collaborative music controller with Django Channels (WebSockets) and React letting multiple users vote on and control a shared queue in real-time.",
    github: "https://github.com/patelabhi1607/music_controller",
  },
  {
    name: "Developer Portfolio",
    desc: "Personal portfolio built with Next.js, TypeScript, and Bootstrap featuring Lottie animations, Iconify skill icons, and GitHub GraphQL integration.",
    github: "https://github.com/patelabhi1607/personal-portfolio",
    link: "https://personal-portfolio-fawn-seven-44.vercel.app",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Mandiant Advantage",
    feedback:
      "Abhishek's Splunk integration was seamless — the attention to detail and data accuracy surpassed our expectations. Highly recommended.",
  },
  {
    name: "DataDog INC",
    feedback:
      "The DataDog integration Abhishek delivered was production-ready from day one. Outstanding professionalism and engineering depth.",
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: "Abhishek Patel — Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in Python, Django, React, Splunk, and DataDog integrations.",
  author: "Abhishek Patel",
  image:
    "https://avatars.githubusercontent.com/u/51072743?s=400&u=6c8267aec613ac8d3c5069a411e6e30965cbc72e&v=4",
  url: "https://personal-portfolio-fawn-seven-44.vercel.app",
  keywords: [
    "Abhishek",
    "Abhishek Patel",
    "Portfolio",
    "Full Stack",
    "Splunk",
    "DataDog",
    "Django",
    "React",
  ],
};
