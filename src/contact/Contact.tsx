import { TContentData, TTemplate } from "../data/dataTypes";
import "./Contact.css";

interface IContact {
  data: TContentData[];
  template: TTemplate;
}

const Contact = ({ data, template }: IContact) => {
  const renderModernTemplate = () => {
    return (
      <div className="contact-container boundary">
        {data.map((i: TContentData) => {
          if (!i.display || !i.Icon) return false;
          return (
            <div key={i.key} className="contact-item">
              <i.Icon color="#fff" />
              <span>{i.value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderATSTemplate = () => {
    return (
      <div className="contact-container-ats boundary">
        {data
          .filter((i) => i.display && i.Icon && i.value !== "Singapore")
          .map((i: TContentData, index, arr) => {
            return (
              <>
                <div key={i.key} className="contact-item-ats">
                  {i.Icon && <i.Icon />}
                  <span>{i.value}</span>
                </div>
                {index < arr.length - 1 && <span className="separator">|</span>}
              </>
            );
          })}
      </div>
    );
  };

  return template === "ats" ? renderATSTemplate() : renderModernTemplate();
};

export default Contact;
