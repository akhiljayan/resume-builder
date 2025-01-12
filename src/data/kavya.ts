/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FaMobileScreen,
  FaEnvelopeCircleCheck,
  FaLocationDot,
  FaIdCard,
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

const synapxe: TPointData = {
  normal: [
    "Orchestrated NGEMR cutover for polyclinics and hospitals,meticulously planning and coordinating activities, including creating a detailed Microsoft Project plan.",
    "Collaborated across teams to gather tasks, define objectives,and identify key milestones for the cutover process.",
    "Conducted dry runs of EPIC, Interface, and Final shakedown activities to preemptively resolve issues and ensure readiness.",
    "Integrated contingency plans and risk mitigation strategies to minimize disruptions during the cutover phase.",
    "Led the execution of the cutover night, ensuring a seamless transition with minimal downtime, while monitoring project  status and communicating updates.",
    "Facilitated meetings, prepared notes, and managed the project SharePoint to support ongoing project coordination and documentation.",
  ],
  refined: [],
  summarised: [],
};

const avanade: TPointData = {
  normal: [
    "Led end-to-end planning, construction, and execution of rigorous test scripts for project lifecycle integrity.",
    "Advised testers and end-users, enhancing team proficiency in testing processes and best practices.",
    "Engaged business partners to align testing strategies with project objectives, providing valuable insights.",
    "Applied extensive business knowledge and rigorous methodologies to achieve project test objectives.",
    "Established a transparent framework for accessible testing results, promoting stakeholder collaboration.",
    "Managed diligent defect tracking and resolution, maintaining an updated repository for effective issue management.",
  ],
  refined: [],
  summarised: [],
};

const getPointValues = (
  param: TPointData,
  key: "normal" | "refined" | "summarised" | "short"
) => {
  return param[key]?.map((i: string) => ({ display: true, value: i })) || [];
};

const headerData: THeaderType = {
  name: "Kavya Elizabeth James",
  title: "Senior Analyst",
  description: `Dedicated Analyst with 6 years of expertise in system testing, UAT, test plan creation, and defect triage. 
  Skilled in requirement gathering, client interactions, data cleaning and report generation.`,
};

const skillData: TContentData[] = [
  { value: "Azure DevOps", display: true },
  { value: "JIRA", display: true },
  { value: "Confluence", display: true },
  { value: "Postman", display: true },
  { value: "API Testing", display: true },
  { value: "Microsoft Project", display: true },
  { value: "Microsoft Excel", display: true },
  { value: "Requirement Gathering", display: true },
  { value: "Test Planning", display: true },
  { value: "User Training", display: true },
  { value: "Figma", display: true },
  { value: "SQL", display: true },
  { value: "Power BI", display: true },
  { value: "Service Now", display: false },
  { value: "Appium", display: true },
];

const contactData: TContentData[] = [
  {
    key: "email",
    value: "mailtokej@gmail.com",
    Icon: FaEnvelopeCircleCheck,
    display: true,
  },
  {
    key: "phone",
    value: "+65 84604049",
    Icon: FaMobileScreen,
    display: true,
  },
  { key: "location", value: "Singapore", Icon: FaLocationDot, display: true },
  {
    key: "linkedin",
    value: "Dependant Pass",
    Icon: FaIdCard,
    display: true,
  },
];

const experienceData: TExperienceItem[] = [
  {
    title: "Associate Project Release Manager",
    company: "Synapxe",
    start: "Sep/2022",
    end: "Sep/2023",
    location: "Singapore",
    tasks: getPointValues(synapxe, "normal"),
    display: true,
  },
  {
    title: "Senior Analyst",
    company: "Avanade Asia Pte. Ltd.",
    start: "Dec/2017",
    end: "Aug/2022",
    location: "Singapore",
    tasks: getPointValues(avanade, "normal"),
    display: true,
  },
];

const projectsData: TProjectItem[] = [
  {
    title: "BIM Consultation & Implementation - LTA",
    description: `As a Functional Lead, facilitated user story creation, conducted UAT sessions, provided training, and involved in user requirements gathering.`,
    start: "Apr/2021",
    end: "Jun/2022",
    tasks: [
      { value: "Requirement gathering", display: true },
      { value: "Test Planning", display: true },
      { value: "User stories", display: true },
      { value: "User training", display: true },
    ],
    skills: [
      { value: "Azure DevOps", display: true },
      { value: "Figma", display: true },
      { value: "Power BI", display: true },
    ],
    display: true,
    order: 2,
  },
  {
    title: "CPF Beacon - CPF",
    description: `As a Techno-Functional Analyst, documented detailed functional requirements from Legacy COBOL code and
    developed test suites.`,
    start: "Dec/2020",
    end: "Mar/2021",
    tasks: [
      { value: "Test Suite development", display: true },
      { value: "Data Mining", display: true },
      { value: "Functional Requirement documentation", display: true },
    ],
    skills: [
      { value: "Microsoft Excel", display: true },
      { value: "MySQL", display: true },
      { value: "COBOL", display: true },
    ],
    display: true,
    order: 3,
  },
  {
    title: "Unified Betting Terminal - Singapore Pools",
    description: `As a Quality Analyst, designed precise test cases, facilitated user gap analysis, supported UAT, managed test
    planning and assisted test automation.`,
    start: "June/2018",
    end: "Dec/2020",
    tasks: [
      { value: "Software Testing", display: true },
      { value: "Automation testing", display: true },
      { value: "Test Data preparation ", display: true },
    ],
    skills: [
      { value: "JIRA", display: true },
      { value: "Postman", display: true },
      { value: "Jenkins", display: true },
      { value: "Appium", display: true },
      { value: "SQL", display: true },
    ],
    display: true,
    order: 4,
  },
  {
    title: "CorPass & myTax Portal - IRAS",
    description: `As a Junior Analyst, developed test scripts, used ETL tools for data migration, conducted debugging, regression,
    and performance testing for CorpPass and myTax portal projects.`,
    start: "Sep/2017",
    end: "May/2018",
    tasks: [
      { value: "Software testing", display: true },
      { value: "Data extraction", display: true },
      { value: "Report generation", display: true },
    ],
    skills: [
      { value: "ETL tool", display: true },
      { value: "Microsoft Excel", display: true },
    ],
    display: true,
    order: 4,
  },
];

const freelanceData: TProjectItem[] = [
  {
    title: "Starbase innovations Pvt. Ltd. (Remote) - Swastha",
    description: `As a Freelancer, responsible for the development of dashboard by analyzing, cleaning data and preparing reports.`,
    start: "Jan/2024",
    end: "Present",
    tasks: [
      { value: "Data Cleaning", display: true },
      { value: "Data Analyzing", display: true },
    ],
    skills: [
      { value: "SQL", display: true },
      { value: "Microsoft Excel", display: true },
    ],
    display: false,
    order: 1,
  },
  {
    title: "Starbase innovations Pvt. Ltd. (Remote) - Swastha",
    description: `As a Freelancer, responsible for gathering requirements and preparing documents on confluence,
    maintaining and generating reports.`,
    start: "Jan/2024",
    end: "Present",
    tasks: [
      { value: "Requirement gathering", display: true },
      { value: "Data Analyzing", display: true },
    ],
    skills: [
      { value: "JIRA", display: true },
      { value: "Confluence", display: true },
      { value: "Microsoft Excel", display: true },
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
    start: "2017",
    end: "2018",
    grade: "CGPA: 3.74",
    mode: "Full-time, On-site",
    display: true,
  },
  {
    degree: "Bachelors of Engineering",
    university: "Anna University",
    subject: "Electrical & Electronics Engineering",
    start: "2012",
    end: "2016",
    grade: "Honors : 1st Class",
    mode: "Full-time, On-site",
    display: true,
  },
];

const contributionData: TContentData[] = [
  {
    display: true,
    value: "AZ-900: Microsoft Azure Fundamentals",
    start: "2021",
    end: "Present",
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
  freelanceData,
};

// Below are my tasks/achievements in KPMG that i put in my resume

// Based on the above points, Use action verbs, numbers and percentage. When writing your achievements, try to start every sentence with an action verb and include numbers/percentages as much as possible.
