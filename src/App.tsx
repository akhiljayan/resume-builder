import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./header/Header";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Education from "./education/Education";
import Contribution from "./contribution/Contribution";
import data from "./data/akhiljayan";
import "./App.css";

interface PrintContentProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
}

const PrintContent: React.FC<PrintContentProps> = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="print-content">
      <div className="page-one">
        {/* <div className="top-watermark" /> */}
        <Header data={data.headerData} />
        <Contact data={data.contactData} />
        <div className="main-content">
          <Skills data={data.skillData} />
          <Experience
            data={[
              data.experienceData[0],
              data.experienceData[1],
              data.experienceData[2],
            ]}
          />
        </div>
        {/* <div className="bottom-watermark" /> */}
      </div>
      <div className="page-two">
        <div className="main-content">
          {/* <div className="top-watermark" /> */}
          <Experience data={[data.experienceData[3], data.experienceData[4]]} />
          <Project data={data.projectsData} />
          <Education data={data.educationData} />
          <Contribution data={data.contributionData} />
          {/* <div className="bottom-watermark" /> */}
        </div>
      </div>
    </div>
  );
};

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="main-container">
      <div className="resume-container">
        <PrintContent forwardedRef={componentRef} />
      </div>
      <button onClick={handlePrint}>Print A4</button>
    </div>
  );
}

export default App;
