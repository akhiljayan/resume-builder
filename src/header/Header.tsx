import { THeaderType } from "../data/dataTypes";
import EndePadam from "../assets/images/EndePadam.jpeg";
import "./Header.css";

const Header = ({ data }: { data: THeaderType }) => {
  return (
    <div className="header-container boundary">
      <div className="title-container">
        <img src={EndePadam} className="ende-photo" />
        <div className="main-header">
          <span className="header-title">{data.name}</span>
          <span className="header-sub-title">{data.title}</span>
          <div className="header-description">
            <span>{data.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
