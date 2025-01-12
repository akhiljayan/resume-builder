import { TContentData, TUser, TTemplate } from "../data/dataTypes";
import "./Skills.css";

interface ISkills {
  data: TContentData[];
  user: TUser;
  template: TTemplate;
}

const Skills = ({ data, user, template }: ISkills) => {
  let title =
    user === "akjn" ? "AREAS OF EXPERTISE" : "SKILLS AND COMPETENCIES";
  if (template === "ats") {
    return (
      <div className="content-container-ats boundary">
        <div className="content-title-ats">{title}</div>
        <div className="skill-items-ats">
          {data.map((i: TContentData, index: number) => {
            if (!i.display) return false;
            return (
              <span key={i.value} className="skill-item-ats">
                {i.value}
                {index !== data.length - 1 && (
                  <span className="bullet"> • </span>
                )}
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
        {data.map((i: TContentData) => {
          if (!i.display) return false;
          return (
            <span key={i.value} className="skill-item">
              {i.value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
