import { IconType } from "react-icons";

export type TUser = "akjn" | "kej";
export type TTemplate = "modern" | "ats";

const tmplt = ["modern", "ats"] as any;
const usr = ["akjn", "kej"] as any;

export const activeUser: TUser = usr[1];
export const template: TTemplate = tmplt[0];

export type THeaderType = {
  name: string;
  title: string;
  description: string;
};

export type TContentData = {
  key?: string | null | undefined;
  value: string;
  display: boolean;
  Icon?: IconType | string | null | undefined;
  start?: string;
  end?: string;
};

export type TExperienceItem = {
  title: string;
  company: string;
  start: string;
  end: string;
  location: string;
  tasks: TContentData[];
  display: boolean;
};

export type TProjectItem = {
  title: string;
  description: string;
  start: string;
  end: string;
  tasks: TContentData[];
  skills: TContentData[];
  display: boolean;
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
  display: boolean;
};
