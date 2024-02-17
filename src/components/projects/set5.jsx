import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set5 = () => {
  useEffect(() => {
    document.title = "Domain - Set 5";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Domain - set 5",
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
        <h1 className="parent-software-title">Domain 5 - Health Care</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            HC001 - Medicine Viability Checking, taking patient Records
            </h1>
            <p className="software-content-description projects-close projects-close">
              {" "}
              Participants are challenged to develop a solution for Medicine Viability Checking, integrating
               patient records. The goal is to create a system that leverages health records to check the
                viability and compatibility of prescribed medications for individual patients. The participants
                 should focus on implementing algorithms that analyze patient health records, considering 
                 factors such as medical history and current conditions, to ensure the safety and effectiveness
                  of prescribed medications. The resulting solution aims to enhance patient care by providing
                   personalized medication recommendations based on individual health profiles.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            HC002 - Doctor Availabilty & Appointment Management
            </h1>
            <p className="software-content-description projects-close">
            In the realm of healthcare, participants are tasked with designing a Doctor Availability and
             Appointment Management system. The objective is to create an efficient platform that automates and
              optimizes the scheduling of doctor appointments. Participants should focus on developing a user-friendly
               interface for both healthcare providers and patients, incorporating features such as real-time
                availability updates, appointment scheduling, and reminders. The solution aims to streamline the 
                appointment process, reduce waiting times, and improve overall patient experience.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
            HC003 - Patient Health record management
            </h1>
            <p className="software-content-description projects-close">
            Participants are invited to develop an innovative solution for Patient Health Record Management. 
            The challenge involves creating a comprehensive system that efficiently manages and organizes 
            patient health records in a secure and accessible manner. Participants should focus on features
             such as electronic health record (EHR) integration, data security, and interoperability to
              facilitate seamless information exchange among healthcare providers. The resulting solution 
              aims to enhance healthcare delivery by providing a centralized and standardized platform for 
              managing patient health records, ensuring data accuracy, and supporting collaborative care.
            </p>
          </div>

  
        </div>
      </div>
    </React.Fragment>
  );
};

export default set5;
