import React from "react";
import { activeUser as user, template } from "../../data/dataTypes";
import Header from "@component/header";
import Contact from "@component/contact";
import Skills from "@component/skills";
import Experience from "@component/experience";
import Project from "@component/project/Project";
import Education from "@component/education";
import Contribution from "@component/contribution";

import "./PrintModernContent.css";

interface PrintContentProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  data: any;
  meta: any;
}

const PrintModernContent: React.FC<PrintContentProps> = (props) => {
  const showWatermark = false;
  const { forwardedRef, data, meta } = props;

  const renderHeader = (isDesc: boolean) => {
    const headerData = {
      name: data.name,
      title: data.jobTitle,
      description: data.summary,
      location: data.location,
      email: data.email,
      phone: data.phone,
      linkedin: data.linkedin,
      github: data.github,
    };
    return (
      <Header
        data={headerData}
        showImage={meta.user === "akjn"}
        template={meta.template}
        descOnly={isDesc}
      />
    );
  };

  const renderContact = () => {
    const contactData = {
      email: data.email,
      phone: data.phone,
      location: data.location,
      linkedin: data.linkedin,
      github: data.github,
    };
    return <Contact data={contactData} template={meta.template} />;
  };

  const renderSlills = () => {
    const isAkjn = meta.user === "akjn";
    const title = isAkjn ? "AREAS OF EXPERTISE" : "SKILLS AND COMPETENCIES";
    return <Skills data={data.skills} title={title} template={meta.template} />;
  };

  const rendeExperience = (page: number, hideTitle = false) => {
    const { experience: expData = [] } = data;
    const items = page === 1 ? expData.slice(0, 3) : expData.slice(3, 10);
    if (items.length > 0) {
      return (
        <Experience
          data={items}
          template={meta.template}
          hideTitle={hideTitle}
        />
      );
    }
    return false;
  };

  const renderProject = () => {
    const isAkjn = meta.user === "akjn";
    const title = isAkjn ? "Major Projects" : "Freelance Projects";
    return (
      <Project
        title={title}
        data={data.projects}
        template={meta.template}
        isFullWidth
      />
    );
  };

  const renderEducation = () => {
    return <Education template={meta.template} data={data.education} />;
  };

  const renderContribution = (show = false) => {
    if (!show) return false;
    return (
      <Contribution
        template={template}
        data={data.contributionData}
        user={user}
      />
    );
  };

  return (
    <div ref={forwardedRef} className="print-content">
      <div className="page-one">
        {showWatermark && <div className="top-watermark" />}
        {renderHeader(meta.template === "ats" ? false : true)}
        {meta.template !== "ats" && renderContact()}
        {meta.template === "ats" && renderHeader(true)}
        {renderSlills()}
        {rendeExperience(1)}
        {showWatermark && <div className="bottom-watermark" />}
      </div>

      <div className="page-two">
        <div className="main-content">
          {showWatermark && <div className="top-watermark" />}
          {rendeExperience(2, true)}
          {renderProject()}
          {renderEducation()}
          {renderContribution(false)}
          {showWatermark && <div className="bottom-watermark" />}
        </div>
      </div>
    </div>
  );
};

export default PrintModernContent;
