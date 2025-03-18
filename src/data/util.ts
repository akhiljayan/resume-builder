import { TJobTypes, jobTypes } from "./akhilJayan.new";

export const formatJobTask = (experience: any[], type: TJobTypes) => {
  return experience.map((i) => {
    const tasks = i.tasks
      .filter((j: any) => j.type === type || j.type === jobTypes.ANY)
      .reduce((r: any, j: any) => [...r, ...j.data], []);
    return { ...i, tasks };
  });
};
