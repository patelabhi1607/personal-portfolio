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
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js.",
  resumeLink:
    "https://docs.google.com/document/d/1xTqwdUvPrhvhwQxmXRDqcSeDLp-FF3-qnRQyKuZ4hWQ/edit",
};

export const openSource = {
  githubUserName: "patelabhi1607",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "",
  linkedin: "https://www.linkedin.com/in/abhishek-patel-12221816a/",
  github: "https://github.com/patelabhi1607",
  twitter: "https://twitter.com/imabhishek1698",
  instagram: "https://www.instagram.com/abhiiptel/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          iconifyTag: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
  {
    Stack: "SIEM Integrations",
    progressPercentage: "70",
  },
  {
    Stack: "Frontend/Design",
    progressPercentage: "50",
  },
  {
    Stack: "Data Science",
    progressPercentage: "50",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Dharamsinh Desai University",
    subHeader: "Bachelor of Technology in Information Technology",
    duration: "September 2017 - April 2021",
    desc: "Embarking on a B.Tech in Information Technology journey, blending expertise in cutting-edge tech and innovative problem-solving for the digital era.",
    grade: "Grade A",
    descBullets: [
      "Engaging in a comprehensive program focused on the latest advancements.",
      "Developing proficiency in state-of-the-art technologies shaping the IT landscape.",
      "Applying creative solutions to address complex challenges in the digital realm.",
      "Channeling enthusiasm to contribute meaningfully to the evolving tech sphere.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Crest Data Systems",
    companyLogo: "/img/icons/common/crest_data_systems_logo.jpeg",
    date: "Dec 2021 – Now",
    desc: "Innovative Software Engineer (E3) at Crest Data Systems, specializing in web application and backend development/design, contributing to Splunk platforms, and driving DataDog integrations for real-time insights.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/patelabhi1607/personal-portfolio",
  },
  {
    name: "Micro E-Commerce",
    desc: "Elevating online commerce with a Django-powered Micro E-commerce platform for efficient and scalable business transactions.",
    github: "https://github.com/patelabhi1607/micro-ecommerce/",
  },
  {
    name: "Smart Attendance System",
    desc: "Revolutionizing attendance tracking with a Smart Attendance System, leveraging Flask for seamless integration and Siemens Neural Network for intelligent and accurate recognition.",
    github: "https://github.com/patelabhi1607/smartattendance",
  },
  {
    name: "Music Controller",
    desc: "Crafting seamless user experiences with an intuitive Music Controller for an immersive audio journey on your portfolio website.",
    github: "https://github.com/patelabhi1607/music_controller",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Mandiant Advantage",
    feedback:
      "I had a fantastic experience with your product/service! The attention to detail and quality surpassed my expectations. Thank you for providing such excellent service.",
  },
  {
    name: "DataDog INC",
    feedback:
      "I am thoroughly impressed with your product/service. The level of professionalism and efficiency is outstanding. Keep up the great work!",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Abhishek Patel",
  description: "A passionate Full Stack Web Developer.",
  author: "Abhishek Patel",
  image: "https://share.icloud.com/photos/0f3iWSWHw1uoVx6hSNqls7VGA",
  url: "https://main--portfolio-website-abhishekpatel.netlify.app",
  keywords: ["Abhishek", "Abhishek Patel", "Portfolio", "Abhishek Portfolio "],
};
