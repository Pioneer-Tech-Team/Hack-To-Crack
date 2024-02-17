import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set4 = () => {
  useEffect(() => {
    document.title = "Domain - Set 4";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Domain - set 4",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };

  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Domain 4 - Smart Automation</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            SA001 - CCTV network solution for identifying potential unlawful activities
            </h1>
            <p className="software-content-description projects-close projects-close">
              {" "}
              Participants are challenged to devise a smart automation solution for CCTV networks aimed at identifying
               potential unlawful activities. The goal is to develop an intelligent system that employs advanced video
                analytics and machine learning to automatically detect and alert authorities about suspicious behavior 
                or incidents captured by surveillance cameras. The participants should focus on creating a robust, 
                real-time monitoring system that enhances security and aids in the proactive prevention of criminal 
                activities within the monitored area.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            SA002 - Automatic Train Announcement system
            </h1>
            <p className="software-content-description projects-close">
            participants are tasked with designing an Automatic Train Announcement System. The objective is to 
            create an intelligent system that automates and enhances the quality of train announcements. 
            The solution should leverage sensor data and automation algorithms to provide passengers with 
            accurate, timely, and context-aware announcements, improving the overall efficiency and passenger
             experience in railway transportation.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            SA003 - Large Scale student monitiring for exam
            </h1>
            <p className="software-content-description projects-close">
            The challenge presented to participants involves developing a smart automation solution for
             large-scale student monitoring during exams. The goal is to design an automated system that
              leverages technology, such as AI-driven facial recognition and behavior analysis, to monitor 
              students during exams and ensure a secure and fair testing environment. Participants should 
              focus on scalability, real-time monitoring, and the automation of processes to enable efficient
               large-scale student monitoring, providing a reliable solution for educational institutions.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set4;
