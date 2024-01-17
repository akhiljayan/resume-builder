import { TEducationItem } from "../data/dataTypes";
import "./Education.css";

const Education = ({ data }: { data: TEducationItem[] }) => {
  return (
    <div className="content-container boundary main-exp-container">
      <div className="content-title">Education</div>
      <div className="education-container">
        {data.map((i: TEducationItem) => {
          if (!i.display) return false;
          return (
            <div key={i.degree} className="edu-item">
              <div className="edu-title">{i.degree}</div>
              <div className="edu-uni">{i.university}</div>
              <div className="edu-subject">{`Subject: ${i.subject}`}</div>
              <div className="edu-duration">{`${i.start} - ${i.end}`}</div>
              {/* <div className="edu-mode">{`Mode: ${i.mode}`}</div> */}
              {/* <div className="edu-grade">{i.grade}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
