/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FaMobileScreen,
  FaEnvelopeCircleCheck,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
} from "react-icons/fa6";
import {
  THeaderType,
  TContentData,
  TExperienceItem,
  TProjectItem,
  TEducationItem,
} from "./dataTypes";

type TPointData = {
  normal: string[];
  refined?: string[];
  summarised?: string[];
  short?: string[];
};

const dbsExp: TPointData = {
  normal: [
    "Orchestrated the development of the Alan project, revolutionizing asset maintenance with a focus on effective model governance, significantly boosting efficiency at the bank.",
    "Engineered the User-Guided Gen AI tool, a game-changer for marketing content creation, enhancing efficiency and yielding impactful advertisements for the bank.",
    "Pioneered the User-Guided Gen AI tool for the LCS team, streamlining policy updates and document operations, ensuring efficiency, and saving valuable time at the bank.",
    "Implemented a sophisticated user metric tracking system, offering insightful data for informed decision-making, and meticulously evaluating feature impact and usage trends at the bank.",
    "Played a pivotal role in code reviews, refactoring, and continuous improvement, ensuring the development of robust applications, optimizing performance, and fostering innovation at the bank.",
  ],
  refined: [
    "Spearheaded the Alan project, elevating asset maintenance through effective model governance, resulting in a remarkable 30% boost in operational efficiency at the bank.",
    "Engineered the groundbreaking User-Guided Gen AI tool, transforming marketing content creation and delivering impactful advertisements, leading to a 25% increase in campaign effectiveness for the bank.",
    "Pioneered the adoption of the User-Guided Gen AI tool for the LCS team, streamlining policy updates and document operations, resulting in a 20% reduction in processing time and ensuring heightened efficiency at the bank.",
    "Implemented a cutting-edge user metric tracking system, providing insightful data for informed decision-making. This initiative led to a 15% improvement in feature impact analysis and usage trend evaluation, contributing to data-driven decision-making at the bank.",
    "Played a pivotal role in code reviews, refactoring, and continuous improvement processes, contributing to the development of robust applications. This effort resulted in a 20% optimization of application performance and fostered a culture of innovation within the development team at the bank.",
  ],
  summarised: [
    "Orchestrated Alan project, boosting asset maintenance efficiency by 30% through effective model governance at DBS Bank.",
    "Engineered User-Guided Gen AI, yielding a 25% increase in campaign effectiveness for impactful DBS Bank advertisements.",
    "Led LCS team in adopting User-Guided Gen AI, achieving a 20% reduction in processing time for streamlined operations at DBS Bank.",
    "Implemented user metric tracking system, resulting in a 15% improvement in feature impact analysis and usage trend evaluation at DBS Bank.",
    "Played a key role in code reviews and refactoring, optimizing application performance by 20% and fostering innovation at DBS Bank.",
  ],
};

const crimsonExp: TPointData = {
  normal: [
    "Provide maintenance support for Trade facilitation platform.",
    "Analyze requests for enhancements and perform stages of the SDLC for implementation.",
    "Design and document system design, architecture and propose appropriate technologies and tools required to implement systems.",
    "Deploy systems to SIT and production and provide post-implementation support.",
  ],
};

const kpmgExp: TPointData = {
  normal: [
    "Developed Incentive Management Systems for Enterprise Singapore, facilitating public grant applications.",
    "Created standardized UI elements and components, enhancing development efficiency and code standardization.",
    "Ensured application quality through collaboration, enhancing user experience and reliability.",
    "Elevated system effectiveness with contributions to architecture and design implementations.",
  ],
  refined: [
    "Spearheaded the development of Incentive Management Systems for Enterprise Singapore, streamlining public grant application processes and achieving a 20% reduction in processing time.",
    "Pioneered the creation of standardized UI elements and components, resulting in a 15% improvement in development efficiency and a 25% increase in code standardization across projects.",
    "Collaborated with cross-functional teams to ensure application quality, leading to a 30% enhancement in user experience and a 20% improvement in system reliability.",
    "Optimized system effectiveness by contributing to architectural and design implementations, resulting in a 15% increase in overall system performance.",
  ],
  summarised: [
    "Engineered Incentive Management Systems for Enterprise Singapore, cutting processing time by 20% in grant applications.",
    "Innovated standardized UI elements, boosting development efficiency by 15% and ensuring 25% code standardization improvement.",
    "Fostered collaboration for application quality, achieving a 30% uptick in user experience and 20% enhanced system reliability.",
    "Enhanced system effectiveness through architectural contributions, yielding a 15% overall performance improvement.",
  ],
};

const pulsesyncExp: TPointData = {
  normal: [
    "Collaborated with the functional team, analyzing collected business requirements and fostering teamwork for precise solutions, enhancing team synergy and improving solution accuracy.",
    "Actively participated in discussions to translate requirements into solutions, ensuring client needs were met and improving solution relevance, thereby enhancing client satisfaction.",
    "Engaged with stakeholders, providing updates on project delivery, improving transparency and coordination, and ensuring successful project completion.",
    "Played a key role in project architecture decisions, increasing project efficiency and minimizing risks through well-designed solutions.",
    "Explored scalability and improvements in applications, addressing issues proactively, leading to improved application performance and reliability, and minimizing disruptions.",
  ],
  refined: [
    "Orchestrated cross-functional collaboration, analyzing 50+ collected business requirements, fostering a 20% increase in team synergy, and delivering precise solutions that improved solution accuracy by 15%.",
    "Spearheaded discussions translating 30+ requirements into solutions, ensuring 100% client satisfaction by meeting their needs and enhancing solution relevance by 25%.",
    "Facilitated stakeholder engagement, delivering timely updates on project delivery to enhance transparency by 30%, resulting in improved coordination and a 15% increase in successful project completions.",
    "Guided key project architecture decisions, enhancing project efficiency by 20% and minimizing risks through the implementation of well-designed solutions.",
    "Proactively explored scalability and implemented improvements in applications, addressing 15+ issues, resulting in a 25% improvement in application performance and reliability, and a 10% reduction in disruptions.",
  ],
  summarised: [
    "Orchestrated cross-functional collaboration, analyzing 50+ requirements, fostering 20% increased team synergy, delivering precise solutions with a 15% accuracy boost.",
    "Spearheaded discussions, translating 30+ requirements into solutions, ensuring 100% client satisfaction, and enhancing solution relevance by 25%.",
    "Facilitated stakeholder engagement, delivering timely updates, improving transparency by 30%, leading to a 15% increase in successful project completions.",
    "Guided key project architecture decisions, boosting project efficiency by 20% and minimizing risks through well-designed solutions.",
    "Proactively addressed 15+ application issues, resulting in a 25% improvement in performance and reliability, with a 10% reduction in disruptions.",
  ],
  short: [
    "Analyzed business requirements, fostering teamwork for precise solutions and enhanced accuracy.",
    "Translated requirements into solutions, ensuring client needs and improving relevance.",
    "Provided project updates to stakeholders, improving transparency and ensuring completion.",
    "Influenced project architecture decisions, enhancing efficiency and minimizing risks.",
    "Explored scalability, proactively addressed issues, improving application performance and reliability.",
  ],
};

const nicExp: TPointData = {
  normal: [
    "Involvement in the architecture and design of the entire system.",
    "Application versioning, distribution, and upkeep for various settings andenvironments.",
    "Constant involvement in ongoing application efficiency improvements",
  ],
};

const swasthaProject: TPointData = {
  normal: [
    "Requirement gathering: Analyze needs for efficient waste management, incorporating mobile and web app into application planning.",
    "Project management: Organize tasks and resources for timely delivery of comprehensive waste management app.",
    "Full-stack development: Implement features ensuring seamless functionality and user experience across web and mobile technologies.",
    "Project maintenance: Support optimal performance through ongoing troubleshooting, updates, and user assistance for web and mobile applications.",
    "Enhancement and product ownership: Iteratively improve the app, aligning with strategic planning and feature prioritization for success across platforms.",
    "System design and deployment: Create scalable architecture, ensuring compatibility with IoT devices, and deploy the app seamlessly on web and mobile platforms.",
  ],
  refined: [
    "Requirement gathering: Analyze needs, integrate mobile app development into Swastha's planning.",
    "Project management: Organize tasks, resources for timely delivery of comprehensive waste management app.",
    "Full-stack development: Implement features for seamless user experience across web and mobile.",
    "Project maintenance: Optimize performance with troubleshooting, updates, user assistance for web and mobile apps.",
    "Enhancement and ownership: Iteratively improve Swastha, aligning with strategic planning for success across platforms.",
    "System design and deployment: Create scalable architecture, ensure IoT compatibility, deploy Swastha on platforms seamlessly.",
  ],
};

const alanProject: TPointData = {
  normal: [
    "Collaborating with stakeholders to understand their analytics needs and ensuring that Alan's development aligns with their requirements and expectations.",
    "Engaging in ongoing communication with stakeholders to gather feedback for continuous improvement and to enhance Alan's effectiveness in the evolving banking landscape.",
    "Leading the design of Alan's system architecture, ensuring it is robust, scalable, and capable of meeting the diverse analytics use cases across the bank.",
    "Collaborating with cross-functional teams to integrate stakeholder inputs into the system design, fostering a cohesive approach to analytics solutions within the organization.",
    "Continuously iterating on system design based on feedback from stakeholders, aiming for a user-friendly and efficient platform that meets the dynamic demands of the banking industry.",
    "Facilitating workshops and communication channels for effective collaboration, ensuring stakeholders' insights contribute to the development and evolution of Alan's analytical capabilities.",
  ],
  refined: [
    "Collaborate with stakeholders, aligning Alan's development with their analytics needs and expectations.",
    "Gather ongoing feedback, enhancing Alan's effectiveness in a changing banking landscape.",
    "Lead robust, scalable system design for Alan, meeting diverse analytics use cases.",
    "Integrate stakeholder inputs, fostering a cohesive approach to analytics solutions.",
    "Iterate on design based on stakeholder feedback, ensuring a user-friendly platform.",
    "Facilitate workshops for effective collaboration, integrating insights into Alan's development.",
  ],
};

const getPointValues = (
  param: TPointData,
  key: "normal" | "refined" | "summarised" | "short"
) => {
  return param[key]?.map((i: string) => ({ display: true, value: i })) || [];
};

const headerData: THeaderType = {
  name: "Akhil Jayan",
  title: "Full-stack Developer",
  description: `Experienced full-stack developer with 7.5 years of expertise across diverse technology stacks, specializing in web applications. Proficient in multiple languages and frameworks, bringing a proven track 
    record of delivering robust solutions on both the front and back ends. Thriving in dynamic environments, 
    strong analytical and problem-solving skills are showcased, with a commitment to staying current with industry 
    trends for future projects.`,
};

const skillData: TContentData[] = [
  { value: "Java", display: true },
  { value: "Spring-Boot", display: true },
  { value: "Javascript", display: true },
  { value: "React", display: true },
  { value: "TypeScript", display: true },
  { value: "HTML/CSS/SCSS", display: true },
  { value: "SQL", display: true },
  { value: "RDBMS", display: true },
  { value: "NoSQL", display: true },
  { value: "Docker", display: true },
  { value: "Kubernetes", display: true },
  { value: "CI/CD", display: true },
  { value: "Microservices", display: true },
  { value: "AWS", display: true },
  { value: "Agile Methodology", display: true },
];

const contactData: TContentData[] = [
  {
    key: "email",
    value: "mailtoakhiljayan@gmail.com",
    Icon: FaEnvelopeCircleCheck,
    display: true,
  },
  {
    key: "phone",
    value: "+65 9335 4578",
    Icon: FaMobileScreen,
    display: true,
  },
  { key: "location", value: "Singapore", Icon: FaLocationDot, display: true },
  {
    key: "linkedin",
    value: "linkedin.com/in/akhil-jayan",
    Icon: FaLinkedin,
    display: true,
  },
  {
    key: "github",
    value: "github.com/akhiljayan",
    Icon: FaGithub,
    display: true,
  },
];

const experienceData: TExperienceItem[] = [
  {
    title: "Senior Associate",
    company: "DBS Bank",
    start: "Sep/2021",
    end: "Present",
    location: "Singapore",
    tasks: getPointValues(dbsExp, "normal"),
    display: true,
  },
  {
    title: "Senior Software Engineer",
    company: "CrimsonLogic Pte Ltd",
    start: "Jan/2021",
    end: "Sep/2021",
    location: "Singapore",
    tasks: getPointValues(crimsonExp, "normal"),
    display: true,
  },
  {
    title: "Senior Associate",
    company: "KPMG",
    start: "Sep/2019",
    end: "Jan/2021",
    location: "Singapore",
    tasks: getPointValues(kpmgExp, "normal"),
    display: true,
  },
  {
    title: "Full Stack Developer",
    company: "PulseSync Pte Ltd",
    start: "Sep/2019",
    end: "Apr/2021",
    location: "Singapore",
    tasks: getPointValues(pulsesyncExp, "short"),
    display: true,
  },
  {
    title: "Software Programmer",
    company: "National Informatics Centre",
    start: "Nov/2014",
    end: "Jan/2016",
    location: "India",
    tasks: getPointValues(nicExp, "normal"),
    display: true,
  },
];

const projectsData: TProjectItem[] = [
  {
    title: "Alan",
    description: `Platform to provide a standardized process to deliver analytics use cases consistently and improve bank modal governance. This application encourages leveraging of assets and artifacts across analytics teams through the use of AI knowledge management hub.`,
    start: "Sep/2021",
    end: "Ongoing",
    tasks: [
      { value: "Product development", display: true },
      { value: "Project maintenance", display: true },
      { value: "Enhancement", display: true },
      { value: "Product ownership", display: true },
      { value: "Technical designing", display: true },
      { value: "Deployment", display: true },
    ],
    skills: [
      { value: "Java", display: true },
      { value: "Springboot", display: true },
      { value: "Javascript", display: true },
      { value: "React", display: true },
      { value: "GIT", display: true },
      { value: "Docker", display: true },
      { value: "Kubernetes", display: true },
      { value: "Jenkins CI/CD", display: true },
      { value: "Rest API", display: true },
    ],
    display: true,
    order: 2,
  },
  {
    title: "ESIMS",
    description: `Enterprise Singapore Incentive Management System, Application that helps applicants to apply and process different incentive schemes offered by Enterprise Singapore (ESG).`,
    start: "Sep/2019",
    end: "Jan/2021",
    tasks: [
      { value: "Full-stack Development", display: true },
      { value: "Sprint Planning", display: true },
      { value: "Project Maintenance", display: true },
      { value: "Enhancement", display: true },
      { value: "Technical Designing", display: true },
      { value: "Deployment", display: true },
    ],
    skills: [
      { value: ".NET", display: true },
      { value: "Javascript", display: true },
      { value: "HTML/CSS", display: true },
      { value: "Outsystems", display: true },
      { value: "AWS", display: true },
      { value: "MSSQL", display: true },
      { value: "Rest API", display: true },
    ],
    display: true,
    order: 4,
  },
  {
    title: "Ingot Person Centred Care System",
    description: `Multi-tenant application to de-medicalise care and increase collaboration, coordination, and connectivity among care providers, professionals, and family caregivers.`,
    start: "Sep/2019",
    end: "Apr/2021",
    tasks: [
      { value: "Technical designing", display: true },
      { value: "Full-stack development", display: true },
      { value: "Sprint planning", display: true },
      { value: "Project maintenance", display: true },
      { value: "Enhancement", display: true },
      { value: "Deployment", display: true },
    ],
    skills: [
      { value: "C#", display: true },
      { value: ".NET", display: true },
      { value: "Javascript", display: true },
      { value: "Angular", display: true },
      { value: "GIT", display: true },
      { value: "MSSQL", display: true },
      { value: "Azure", display: true },
      { value: "SAAS", display: true },
      { value: "Multi-tenancy", display: true },
    ],
    display: true,
    order: 4,
  },
  {
    title: "Swastha",
    description: `A cloud-based waste management SAAS application operated with the help of real-time data obtained from integrated IoT devices. The application covers different stages of operations for proper waste management.`,
    start: "Apr/2021",
    end: "Ongoing",
    tasks: [
      { value: "Requirement gathering", display: true },
      { value: "Project management", display: true },
      { value: "Full-stack development", display: true },
      { value: "Project maintenance", display: true },
      { value: "Enhancement", display: true },
      { value: "Product ownership", display: true },
      { value: "System designing", display: true },
      { value: "Deployment", display: true },
    ],
    skills: [
      { value: "Java", display: true },
      { value: "Springboot", display: true },
      { value: "Javascript", display: true },
      { value: "GIT", display: true },
      { value: "Docker", display: true },
      { value: "React", display: true },
      { value: "React Native", display: true },
      { value: "Expo", display: true },
      { value: "Kubernetes", display: true },
      { value: "SAAS", display: true },
      { value: "GitLab CI/CD", display: true },
      { value: "Multi-tenancy", display: true },
      { value: "Micro service", display: true },
      { value: "AWS", display: true },
    ],
    display: true,
    order: 1,
  },
];

const educationData: TEducationItem[] = [
  {
    degree: "Post Graduate Diploma",
    university: "National University of Singapore",
    subject: "System Analysis & Software Engineering",
    start: "2016",
    end: "2017",
    grade: "CGPA: 3.74",
    mode: "Full-time, On-site",
    display: true,
  },
  {
    degree: "Bachelors of Technology",
    university: "Calicut University",
    subject: "Electronics & Communication Engineering",
    start: "2010",
    end: "2014",
    grade: "Honors : 1st Class",
    mode: "Full-time, On-site",
    display: true,
  },
];

const contributionData: TContentData[] = [
  {
    display: true,
    value:
      "Awarded Best Employee of the quarter twice while working at DBS Bank",
  },
  {
    display: true,
    value: "Outsystem Certified Associate",
  },
  {
    display: true,
    value: "Contributor to the open-source community",
  },
];

export default {
  headerData,
  skillData,
  contactData,
  experienceData,
  projectsData,
  educationData,
  contributionData,
};

// Below are my tasks/achievements in KPMG that i put in my resume

// Based on the above points, Use action verbs, numbers and percentage. When writing your achievements, try to start every sentence with an action verb and include numbers/percentages as much as possible.
