import { TEducationItem, TTemplate } from "@data/dataTypes";
import "./Education.css";

interface IEducationProps {
  data: TEducationItem[];
  template: TTemplate;
}

const Education = ({ data, template }: IEducationProps) => {
  const titleCss = template === "ats" ? "content-title-ats" : "content-title";
  const degreeCss = template === "ats" ? "edu-title-ats" : "edu-title";
  return (
    <div className="content-container boundary main-exp-container">
      <div className={titleCss}>Education</div>
      <div className="education-container">
        {data.map((i: TEducationItem) => {
          if (!i.active) return false;
          return (
            <div key={i.degree} className="edu-item">
              <div className={degreeCss}>{i.degree}</div>
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
