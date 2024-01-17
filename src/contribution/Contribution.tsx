import { TContentData } from "../data/dataTypes";
import "./Contribution.css";

const Contribution = ({ data }: { data: TContentData[] }) => {
  return (
    <div className="content-container boundary">
      <div className="content-title">INVOLVEMENT AND RECOGNITION</div>
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
