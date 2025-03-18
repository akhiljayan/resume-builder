import { TMainContact, TTemplate, icons } from "../../data/dataTypes";
import "./Contact.css";

interface IContact {
  data: TMainContact;
  template: TTemplate;
}

const Contact = (props: IContact) => {
  const { data, template } = props;
  const renderModernTemplate = () => {
    return (
      <div className="contact-container boundary">
        {Object.entries(data).map(([k, v]: [string, any]) => {
          if (!icons[k]) return false;
          const Icon = icons[k];
          return (
            <div key={k} className="contact-item">
              <Icon color="#fff" />
              <span>{v}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderATSTemplate = () => {
    return (
      <div className="contact-container-ats boundary">
        {Object.entries(data)
          .filter(([k]: [string, any]) => k !== "location")
          .map(([k, v]: [string, any], index: number, arr) => {
            const Icon = icons[k];
            return (
              <>
                <div key={k} className="contact-item-ats">
                  {!!icons[k] && <Icon />}
                  <span>{v}</span>
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
