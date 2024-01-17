import { TExperienceItem, TContentData } from "../data/dataTypes";
import "./Experience.css";

const Experience = ({ data }: { data: TExperienceItem[] }) => {
  return (
    <div className="content-container boundary">
      <div className="content-title">Professional Experience</div>
      <div className="experience-container">
        {data.map((i: TExperienceItem) => {
          if (!i.display) return false;
          return (
            <div key={i.company} className="experience-item">
              <div className="exp-title">{i.title}</div>
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
