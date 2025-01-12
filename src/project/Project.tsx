import { TProjectItem, TContentData } from "../data/dataTypes";
import "./Project.css";

interface IProjectProps {
  data: TProjectItem[];
  hideTitle?: boolean;
  title?: string;
  isFullWidth?: boolean;
}

const Project = ({
  data,
  hideTitle = false,
  title = "Major Projects",
  isFullWidth = false,
}: IProjectProps) => {
  const filtredData = data
    .filter((i) => i.display)
    .sort((a, b) => a.order - b.order);
  const items = filtredData.reduce((result: TProjectItem[][], item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  const renderSkills = (skills: string[], displayTabs: boolean = false) => {
    if (displayTabs) {
      return skills.map((i) => (
        <span key={i} className="skill-pill">
          {i}
        </span>
      ));
    }
    return skills.map((i, index) => (
      <span key={i} className="skill-text">
        {i}
        {index < Number(skills.length) - 1 && ","}
      </span>
    ));
  };

  const renderColumnContent = (i: TProjectItem | string) => {
    if (typeof i === "string") {
      return <div key="EmptyVal" className="project-item"></div>;
    }
    const skillsVal = i.skills.filter((s) => s.display).map((s) => s.value);
    return (
      <div key={i.title} className="project-item">
        <div className="proj-title">{i.title}</div>
        <div className="proj-duration">
          <span>{`${i.start} - ${i.end}`}</span>
        </div>
        <div className="proj-description">{i.description}</div>
        {/* Add `custom-bullet` className for changing bullet style */}
        <ul className="proj-tasks">
          {i.tasks.map((j: TContentData) => {
            if (!j.display) return false;
            return <li key={j.value}>{j.value}</li>;
          })}
        </ul>
        {/* <div className="proj-skills">{`Skills: ${skillsVal.join(", ")}`}</div> */}
        <div className="skill-container">
          {/* <div className="skill-heading">Skills:</div> */}
          <div className="proj-skills">{renderSkills(skillsVal, false)}</div>
        </div>
      </div>
    );
  };

  const renderRows = (projs: TProjectItem[], index: number) => {
    return (
      <div key={`proj_${index}`} className={isFullWidth ? "" : "proj-item-row"}>
        {projs.map((i) => renderColumnContent(i))}
      </div>
    );
  };

  const projItems = items.reduce((r: any, i: TProjectItem[]) => {
    if (i.length === 2) {
      return [...r, i];
    } else {
      return [...r, [...i, "EMPTY_VAL"]];
    }
  }, []);

  return (
    <div className="content-container boundary">
      {!hideTitle && <div className="content-title">{title}</div>}
      <div className="project-container">
        {projItems.map((i, index) => renderRows(i, index))}
      </div>
    </div>
  );
};

export default Project;
