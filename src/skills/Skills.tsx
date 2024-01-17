import { TContentData } from "../data/dataTypes";
import "./Skills.css";

interface ISkills {
  data: TContentData[];
}

const Skills = ({ data }: ISkills) => {
  return (
    <div className="content-container boundary">
      <div className="content-title">Areas of Expertise</div>
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
