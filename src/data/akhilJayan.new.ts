export type TJobTypes = "FULLSTACK" | "FRONTEND" | "BACKEND" | "ANY";
export const jobTypes: Record<TJobTypes, string> = {
  FULLSTACK: "Fullstack",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  ANY: "Any",
};

const dbsFullstack: string[] = [
  "Managed the overall development lifecycle of the in-built banking applications to increase the efficiency of information processing and data secutity and governance activities of the business.",
  "Developed and deployed sets of enterprise applications to increase the effectiveness of asset servicing, model stewardship, and system operations as a whole.",
  "Developed and deployed a User friently Gen AI Tool used for automating marketing's content production processes and boosted productivity across teams.",
  "Created and sustained consistent deployment pipelines for both front end and back end releases to ensure maximum system uptime and resource utilization.",
  "Managed the entire lifespan of development processes, improved UI/UX design, backend architecture, and code performance, and improved system scalability.",
  "Collaborated with other disciplines to produce a complete, integrated set of solutions that met the organization's objectives and major initiatives.",
  "Developed and deployed a feature to track user statistics, allowing for evidence-based reporting on feature effectiveness and system usage, enabling ongoing improvement.",
];

const dbsFrontend: string[] = [
  "Created and refined responsive frontend designs for various banking internal tools, improving the overall experience and efficiency of data.",
  "Developed and supported multiple frontend enterprise applications to further enhance the set of buildings, models, and overall system metrics.",
  "Created and embedded a User Guided Gen AI tool at the business Intuition to fully automate the marketing text generation process and enable advanced editing through easy to use front-end interfaces.",
  "Designed and developed reusable UI components and universalized front-end processes to enhane application experience across various applications.",
  "Conducted UI/UX optimizations to solve for speed, usability, accessibilty, engagement and efficinecy of the scalable frontend systems.",
  "Worked with the backend teams on API implementation to ensure proper flow of data and needed context for the application to work effectively.",
  "Designed a user impact monitoring system to track feature usage, user activity, and system value metrics.",
];

const chrimsonLogicExperience: string[] = [
  "Analyzed enhancement requests and executed all stages of the Software Development Life Cycle (SDLC) for successful implementation.",
  "Designed and documented system architecture, proposing optimal technologies and tools to ensure scalable and efficient solutions.",
  "Led system deployments to SIT and production environments, ensuring smooth releases and providing post-implementation support.",
  "Proactively maintained and optimized system performance, identifying and resolving issues to enhance reliability and efficiency.",
];

const kpmgExperience: string[] = [
  "Developed the app called 'Incentive Management' System for Enterprise Singapore, streamlining public grant applications and improving accessibility for businesses and stakeholders.",
  "Collaborated with business analysts to translate requirements into well-structured APIs, ensuring seamless integration and efficient backend operations.",
  "Partnered with UI designers to develop intuitive and user-friendly interfaces, enhancing the overall user experience.",
  "Created standardized UI components and design systems, enhancing development efficiency, code maintainability, and ensuring a consistent user experience across applications.",
  "Collaborated with cross-functional teams to improve application quality, ensuring reliability, usability, and seamless user interactions through rigorous testing and feedback loops.",
  "Contributed to system architecture and design implementations, optimizing performance, scalability, and maintainability to enhance overall system effectiveness and long-term sustainability.",
  "Played a key role in the deployment process, ensuring smooth releases and system stability.",
];

const pulseSyncExperience: string[] = [
  "Collaborated with cross-functional teams to analyze business requirements, ensuring precise and effective solutions while enhancing team synergy.",
  "Translated business requirements into technical solutions, actively participating in discussions to align deliverables with client needs, improving overall satisfaction.",
  "Engaged with stakeholders, providing regular project updates to enhance transparency, coordination, and successful project execution.",
  "Contributed to architectural decisions, optimizing system design for efficiency, scalability, and risk mitigation.",
  "Identified and implemented scalability improvements, proactively addressing performance issues to enhance application reliability and minimize disruptions.",
];

const nicExperience: string[] = [
  "Developed and maintained both frontend and backend components as a full-stack developer for major state government applications used by the general public and government officials.",
  "Actively participated in continuous application performance optimizations, enhancing efficiency and user experience.",
  "Contributed to the architecture and design of the entire system, ensuring scalability, performance, and maintainability.",
  "Managed application versioning, distribution, and maintenance across multiple environments, ensuring stability and seamless updates.",
];

/** Contact */
export const name = "Akhil Jayan";
export const email = "mailtoakhiljayan@gmail.com";
export const phone = "+65 9335 4578";
export const location = "Singapore";
export const linkedin = "linkedin.com/in/akhil-jayan";
export const github = "github.com/akhiljayan";

/** Title */
export const jobTitle: string = "Fullstack Developer";

/** Summary */
export const summary: string = `Experienced full-stack developer with 8.5 years of expertise across diverse technology stacks, 
specializing in web applications. Proficient in multiple languages and frameworks, bringing a proven track 
record of delivering robust solutions on both the front and back ends. Thriving in dynamic environments, 
strong analytical and problem-solving skills are showcased, with a commitment to staying current with industry trends for future projects.`;

/** Skills */
export const skills: string[] = [
  "Java",
  "Spring-Boot",
  "Javascript",
  "React",
  "TypeScript",
  "HTML/CSS/SCSS",
  "SQL",
  "RDBMS",
  "NoSQL",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Microservices",
  "AWS",
  "Agile Methodology",
];

/** Experience */
export const experience = [
  {
    title: "Senior Associate",
    company: "DBS Bank",
    start: "Sep/2021",
    end: "Present",
    location: "Singapore",
    active: true,
    tasks: [
      { type: jobTypes.FULLSTACK, data: dbsFullstack },
      { type: jobTypes.FRONTEND, data: dbsFrontend },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "CrimsonLogic Pte Ltd",
    start: "Jan/2021",
    end: "Sep/2021",
    location: "Singapore",
    active: true,
    tasks: [{ type: jobTypes.ANY, data: chrimsonLogicExperience }],
  },
  {
    title: "Senior Associate",
    company: "KPMG",
    start: "Sep/2019",
    end: "Jan/2021",
    location: "Singapore",
    active: true,
    tasks: [{ type: jobTypes.ANY, data: kpmgExperience }],
  },
  {
    title: "Full Stack Developer",
    company: "PulseSync Pte Ltd",
    start: "Sep/2017",
    end: "Sep/2019",
    location: "Singapore",
    active: true,
    tasks: [{ type: jobTypes.ANY, order: 4, data: pulseSyncExperience }],
  },
  {
    title: "Software Programmer",
    company: "National Informatics Centre",
    start: "Nov/2014",
    end: "Jan/2016",
    location: "India",
    active: true,
    tasks: [{ type: jobTypes.ANY, order: 5, data: nicExperience }],
  },
];

/** Projects */
export const projects = [
  {
    title: "Alan",
    start: "Sep/2021",
    end: "Ongoing",
    tech: [
      "Java",
      "Springboot",
      "Javascript",
      "React",
      "GIT",
      "Docker",
      "Kubernetes",
      "Jenkins CI/CD",
      "Rest API",
    ],
    role: [
      "Product development",
      "Project maintenance",
      "Enhancement",
      "Product ownership",
      "Technical designing",
      "Deployment",
    ],
    active: true,
    order: 1,
  },
  {
    title: "ESIMS",
    start: "Sep/2019",
    end: "Jan/2021",
    tech: [
      ".NET",
      "Javascript",
      "HTML/CSS",
      "Outsystems",
      "AWS",
      "MSSQL",
      "Rest API",
    ],
    role: [
      "Full-stack Development",
      "Sprint Planning",
      "Project Maintenance",
      "Enhancement",
      "Technical Designing",
      "Deployment",
    ],
    active: true,
    order: 2,
  },
  {
    title: "Ingot Person Centred Care System",
    start: "Sep/2019",
    end: "Apr/2021",
    tech: [
      "C#",
      ".NET",
      "Javascript",
      "Angular",
      "GIT",
      "MSSQL",
      "Azure",
      "SAAS",
      "Multi-tenancy",
    ],
    role: [
      "Technical designing",
      "Full-stack development",
      "Sprint planning",
      "Project maintenance",
      "Enhancement",
      "Deployment",
    ],
    active: true,
    order: 3,
  },
  {
    title: "Swastha",
    start: "Apr/2021",
    end: "Ongoing",
    tech: [
      "Java",
      "Springboot",
      "Javascript",
      "GIT",
      "Docker",
      "React",
      "React Native",
      "Expo",
      "Kubernetes",
      "SAAS",
      "GitLab CI/CD",
      "Multi-tenancy",
      "Micro service",
      "AWS",
    ],
    role: [
      "Requirement gathering",
      "Project management",
      "Full-stack development",
      "Project maintenance",
      "Enhancement",
      "Product ownership",
      "System designing",
      "Deployment",
    ],
    active: true,
    order: 4,
  },
];

/** Education */
export const education = [
  {
    degree: "Post Graduate Diploma",
    university: "National University of Singapore",
    subject: "System Analysis & Software Engineering",
    start: "2016",
    end: "2017",
    grade: "CGPA: 3.74",
    mode: "Full-time, On-site",
    active: true,
  },
  {
    degree: "Bachelors of Technology",
    university: "Calicut University",
    subject: "Electronics & Communication Engineering",
    start: "2010",
    end: "2014",
    grade: "Honors : 1st Class",
    mode: "Full-time, On-site",
    active: true,
  },
];

/** Contribution */
export const contribution = [
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
  name,
  email,
  phone,
  location,
  linkedin,
  github,
  jobTitle,
  summary,
  skills,
  experience,
  projects,
  education,
};
