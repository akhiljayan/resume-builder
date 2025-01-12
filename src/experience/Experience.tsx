import classNames from "classnames";
import { TExperienceItem, TContentData, TTemplate } from "../data/dataTypes";
import "./Experience.css";

interface IExperienceProps {
  data: TExperienceItem[];
  template: TTemplate;
  title?: string;
}

const Experience = ({
  data,
  template,
  title = "Professional Experience",
}: IExperienceProps) => {
  const isAts = template === "ats";
  const titleClass = isAts ? "content-title-ats" : "content-title";
  const headingClass = classNames(isAts ? "exp-title-ats" : "exp-title");
  const contentClass = classNames(
    isAts ? "content-container-ats" : "content-container",
    "boundary"
  );
  return (
    <div className={contentClass}>
      <div className={titleClass}>{title}</div>
      <div className={classNames(!isAts && "experience-container")}>
        {data.map((i: TExperienceItem) => {
          if (!i.display) return false;
          return (
            <div key={i.company} className="experience-item">
              <div className={headingClass}>{i.title}</div>
              <div className="exp-company">{`${i.company}, ${i.location}`}</div>
              <div className="exp-duration-location">
                <span>{`${i.start} - ${i.end}`}</span>
                {/* <span>{i.location}</span> */}
              </div>
              {/* <div className="muted-text">Achievements</div> */}
              <ul className="exp-tasks">
                {i.tasks.map((j: TContentData) => {
                  if (!j.display) return false;
                  return <li key={j.value}>{j.value}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
