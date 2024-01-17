import { TContentData } from "../data/dataTypes";
import "./Contact.css";

interface IContact {
  data: TContentData[];
}

const Contact = ({ data }: IContact) => {
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

export default Contact;
