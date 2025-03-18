import { TTemplate } from "@data/dataTypes";
import "./Skills.css";

interface ISkills {
  data: string[];
  title: string;
  template: TTemplate;
}

const Skills = (props: ISkills) => {
  const { data, title, template } = props;

  if (template === "ats") {
    return (
      <div className="content-container-ats boundary skill-bottom">
        <div className="content-title-ats">{title}</div>
        <div className="skill-items-ats">
          {data.map((i: string, index: number) => {
            return (
              <span key={`skil-${index}`} className="skill-item-ats">
                <span className="bullet"> • </span>
                {i}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="content-container boundary">
      <div className="content-title">{title}</div>
      <div className="skill-items">
        {data.map((i: string, index) => {
          return (
            <span key={`skil-${index}`} className="skill-item">
              {i}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
