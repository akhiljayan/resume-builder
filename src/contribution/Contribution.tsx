import { TContentData, TUser, TTemplate } from "../data/dataTypes";
import "./Contribution.css";

interface IContribution {
  data: TContentData[];
  user: TUser;
  template: TTemplate;
}

const Contribution = ({ data, user, template }: IContribution) => {
  const titleCss = template === "ats" ? "content-title-ats" : "content-title";
  const title =
    user === "akjn" ? "INVOLVEMENT AND RECOGNITION" : "CERTIFICATIONS";
  return (
    <div className="content-container boundary">
      <div className={titleCss}>{title}</div>
      <div className="contribution-container">
        <ul className="cont-tasks">
          {data.map((i: TContentData) => {
            if (!i.display) return false;
            return <li key={i.value}>{i.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contribution;
