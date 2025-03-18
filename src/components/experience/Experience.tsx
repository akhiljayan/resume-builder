import classNames from "classnames";
import { TExperienceItem, TTemplate } from "@data/dataTypes";
import "./Experience.css";

interface IExperienceProps {
  data: TExperienceItem[];
  template: TTemplate;
  title?: string;
  hideTitle?: boolean;
}

const Experience = (props: IExperienceProps) => {
  const { data, template, title, hideTitle = false } = props;
  const mainTitle = title || "Professional Experience";
  const isAts = template === "ats";
  const titleClass = isAts ? "content-title-ats" : "content-title";
  const headingClass = classNames(isAts ? "exp-title-ats" : "exp-title");
  const contentClass = classNames(
    isAts ? "content-container-ats" : "content-container",
    "boundary"
  );
  const durLocClass = classNames(
    !isAts ? "exp-duration-location exp-loc-mdn" : "exp-duration-location"
  );

  const headContCss = isAts ? "exp-head-container-ats" : "exp-head-container";
  return (
    <div className={contentClass}>
      {!hideTitle && <div className={titleClass}>{mainTitle}</div>}
      <div className={classNames(!isAts && "experience-container")}>
        {data.map((i: TExperienceItem) => {
          if (!i.active) return false;
          return (
            <div key={i.company} className="experience-item">
              <div className={headContCss}>
                <div className="exp-head-main">
                  <div className={headingClass}>{i.title}</div>
                  <div className="exp-company">{`${i.company}, ${i.location}`}</div>
                </div>
                <div className={durLocClass}>
                  <span>{`${i.start} - ${i.end}`}</span>
                </div>
              </div>

              <ul className="exp-tasks">
                {i.tasks.map((j: string, index: number) => {
                  return <li key={`tsk-${index}`}>{j}</li>;
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
