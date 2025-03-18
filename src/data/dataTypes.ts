import { IconType } from "react-icons";
import {
  FaMobileScreen,
  FaEnvelopeCircleCheck,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
} from "react-icons/fa6";

export type TUser = "akjn" | "kej";
export type TTemplate = "modern" | "ats";

const tmplt = ["modern", "ats"] as any;
const usr = ["akjn", "kej"] as any;

export const activeUser: TUser = process?.env?.USER || usr[0];
export const template: TTemplate = process?.env?.TYPE || tmplt[0];

export type THeaderType = {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type TContentData = {
  key?: string | null | undefined;
  value: string;
  active: boolean;
  Icon?: IconType | string | null | undefined;
  start?: string;
  end?: string;
};

export type TMainContact = {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
};

export type TExperienceItem = {
  title: string;
  company: string;
  start: string;
  end: string;
  location: string;
  tasks: string[];
  active: boolean;
};

export type TProjectItem = {
  title: string;
  description?: string;
  start: string;
  end: string;
  tasks?: TContentData[];
  tech?: string[];
  role?: string[];
  skills?: TContentData[];
  display?: boolean;
  active?: boolean;
  order: number;
};

export type TEducationItem = {
  degree: string;
  university: string;
  subject: string;
  start: string;
  end: string;
  grade: string;
  mode: string;
  display?: boolean;
  active?: boolean;
};

export const icons: { [k: string]: IconType } = {
  email: FaEnvelopeCircleCheck,
  phone: FaMobileScreen,
  location: FaLocationDot,
  linkedin: FaLinkedin,
  github: FaGithub,
};
