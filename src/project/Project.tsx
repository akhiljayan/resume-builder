import { TProjectItem, TContentData } from "../data/dataTypes";
import "./Project.css";

const Project = ({ data }: { data: TProjectItem[] }) => {
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

  const renderColumnContent = (i: TProjectItem) => {
    const skillsVal = i.skills.filter((s) => s.display).map((s) => s.value);
    return (
      <div key={i.title} className="project-item">
        <div className="proj-title">{i.title}</div>
        <div className="proj-duration">
          <span>{`${i.start} - ${i.end}`}</span>
        </div>
        <div className="proj-description">{i.description}</div>
        <ul className="proj-tasks custom-bullet">
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
      <div key={`proj_${index}`} className="proj-item-row">
        {projs.map((i) => renderColumnContent(i))}
      </div>
    );
  };

  return (
    <div className="content-container boundary">
      <div className="content-title">Major Projects</div>
      <div className="project-container">
        {items.map((i, index) => renderRows(i, index))}
      </div>
    </div>
  );
};

export default Project;
