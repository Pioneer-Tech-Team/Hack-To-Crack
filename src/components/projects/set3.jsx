import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set3 = () => {
  useEffect(() => {
    document.title = "Domain - Set 3";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Domain - set 3",
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
        <h1 className="parent-software-title">Domain 3 - Application of AI</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            AI001 - Geo Tagging based Land Allocation(plots) to prevent land grabling
            </h1>
            <p className="software-content-description projects-close projects-close">
              {" "}
              Participants are tasked with developing an AI-powered solution to address land grabbing through a Geo 
              Tagging based Land Allocation system. The objective is to leverage AI algorithms to analyze geographical
               data and allocate land plots efficiently. The system should prevent unauthorized land acquisitions by 
               utilizing geo-tagging techniques to verify and validate land ownership. Participants are expected to 
               design a reliable, transparent, and automated platform that ensures fair land distribution while
                mitigating the risk of fraudulent land grabbing activities.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            AI002 - Plant disease & crop yield estimatur
            </h1>
            <p className="software-content-description projects-close">
            In the realm of AI applications for agriculture, participants are challenged to create a solution 
            that integrates AI algorithms for plant disease identification and crop yield estimation. The goal 
            is to empower farmers with a tool that can analyze images of crops, identify diseases accurately,
             and estimate potential yields. Participants should focus on implementing machine learning models
              trained on diverse datasets to enhance the precision of disease detection and yield prediction. 
              The resulting application should be user-friendly and accessible to farmers, contributing to 
              improved crop management and increased agricultural productivity.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            AI003 - Anomaly detection using deep encoder model.
            </h1>
            <p className="software-content-description projects-close">
            Develop an innovative anomaly detection system using a deep encoder model. The focus is on leveraging 
            advanced neural network architectures to detect irregular patterns or anomalies in complex datasets. 
            The participants are expected to design and implement a deep learning model, such as a deep encoder,
             capable of learning normal patterns and identifying deviations. The application areas could range from
              cybersecurity to industrial monitoring, where the system provides real-time alerts on anomalous behavior,
               enhancing security and operational efficiency.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            AI004 - Fast & Reliable alert  system in poorly connected area
            </h1>
            <p className="software-content-description projects-close">
            The challenge presented to participants involves creating an AI-driven alert system tailored for 
            poorly connected areas. The aim is to design a system that operates efficiently even in low-bandwidth
             or unreliable network conditions. Participants should focus on utilizing AI algorithms for quick and
              reliable communication of alerts, considering potential disruptions in connectivity. The resulting 
              system should provide timely alerts for various scenarios, such as emergencies or critical events, 
              ensuring the safety and well-being of individuals in areas with limited connectivity.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set3;
