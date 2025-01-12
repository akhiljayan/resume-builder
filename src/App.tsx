import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { activeUser as user, template } from "./data/dataTypes";
import Header from "./header/Header";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Education from "./education/Education";
import Contribution from "./contribution/Contribution";
import akjnData from "./data/akhiljayan";
import kejData from "./data/kavya";
import "./App.css";

interface PrintContentProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
}

const PrintModernContent: React.FC<PrintContentProps> = ({ forwardedRef }) => {
  const showWatermark = false;
  const data = user === "akjn" ? akjnData : kejData;

  const rendeExperience = (page: number) => {
    const { experienceData: expData = [] } = data;
    const items = page === 1 ? expData.slice(0, 3) : expData.slice(3, 10);
    if (items.length > 0) {
      return <Experience data={items} template={template} />;
    }
    return false;
  };

  const renderHeader = () => {
    return (
      <Header
        data={data.headerData}
        user={user}
        template={template}
        descOnly={false}
      />
    );
  };

  const renderContact = () => {
    return <Contact data={data.contactData} template={template} />;
  };

  const renderKejProjects = (page: number | string) => {
    if (page === "akjn_prj") {
      return <Project data={data.projectsData} />;
    }
    const { projectsData: projData = [] } = data;
    const items = page === 1 ? projData.slice(0, 2) : projData.slice(2, 10);
    return <Project hideTitle={page === 2} data={items} />;
  };

  const renderMainContent = () => {
    return (
      <div className="main-content">
        <Skills data={data.skillData} user={user} template={template} />
        {rendeExperience(1)}
        {user === "kej" && renderKejProjects(1)}
      </div>
    );
  };

  return (
    <div ref={forwardedRef} className="print-content">
      <div className="page-one">
        {showWatermark && <div className="top-watermark" />}
        {renderHeader()}
        {renderContact()}
        {renderMainContent()}
        {showWatermark && <div className="bottom-watermark" />}
      </div>

      <div className="page-two">
        <div className="main-content">
          {showWatermark && <div className="top-watermark" />}
          {rendeExperience(2)}
          {renderKejProjects(user === "kej" ? 2 : "akjn_prj")}
          <Project
            title="Freelance Projects"
            data={data.freelanceData}
            isFullWidth
          />
          <Education template={template} data={data.educationData} />
          <Contribution
            template={template}
            data={data.contributionData}
            user={user}
          />
          {showWatermark && <div className="bottom-watermark" />}
        </div>
      </div>
    </div>
  );
};

const PrintATCContent: React.FC<PrintContentProps> = ({ forwardedRef }) => {
  const data = user === "akjn" ? akjnData : kejData;
  const renderHeader = (isDesc: boolean) => {
    return (
      <Header
        data={data.headerData}
        user={user}
        template={template}
        descOnly={isDesc}
      />
    );
  };

  const renderContact = () => {
    return <Contact data={data.contactData} template={template} />;
  };

  const rendeExperience = (page: number) => {
    const { experienceData: expData = [] } = data;
    const items = page === 1 ? expData.slice(0, 3) : expData.slice(3, 10);
    if (items.length > 0) {
      return <Experience data={items} template={template} />;
    }
    return false;
  };

  const renderMainContent = () => {
    return (
      <div className="main-content">
        <Skills data={data.skillData} user={user} template={template} />
        {rendeExperience(1)}
      </div>
    );
  };

  return (
    <div ref={forwardedRef} className="print-content">
      <div className="page-one">
        {renderHeader(false)}
        {renderContact()}
        {renderHeader(true)}
        {renderMainContent()}
      </div>

      <div className="page-two">
        <div className="main-content">
          {rendeExperience(2)}
          <Education data={data.educationData} template={template} />
          <Contribution
            data={data.contributionData}
            user={user}
            template={template}
          />
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
        {template == "ats" ? (
          <PrintATCContent forwardedRef={componentRef} />
        ) : (
          <PrintModernContent forwardedRef={componentRef} />
        )}
      </div>
      <button onClick={handlePrint}>Print A4</button>
    </div>
  );
}

export default App;
