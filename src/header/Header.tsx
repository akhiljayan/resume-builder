import { FaLocationDot } from "react-icons/fa6";
import { THeaderType, TUser, TTemplate } from "../data/dataTypes";
import EndePadam from "../assets/images/EndePadam.jpeg";
import "./Header.css";

interface IHeaderProps {
  data: THeaderType;
  user: TUser;
  template: TTemplate;
  descOnly: boolean;
}

const Header = ({ data, user, template, descOnly = false }: IHeaderProps) => {
  const renderGorilaTemplate = () => {
    return (
      <div className="header-container boundary">
        <div className="title-container">
          {user === "akjn" && <img src={EndePadam} className="ende-photo" />}
          <div className="main-header-modern">
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

  const renderAtsTemplate = () => {
    if (descOnly) {
      return (
        <div className="header-main-container-ats boundary">
          <div className="content-title-ats">Professional Summary</div>
          <div className="header-description">
            <span>{data.description}</span>
          </div>
        </div>
      );
    }
    return (
      <div className="header-container-ats boundary">
        <div className="title-container-ats">
          <div className="main-header-ats">
            <span className="header-title-ats">{data.name}</span>
            <span className="header-sub-title">{data.title}</span>
            <span className="header-location-ats">
              <FaLocationDot />
              <span>SINGAPORE</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>{template === "ats" ? renderAtsTemplate() : renderGorilaTemplate()}</>
  );
};

export default Header;
