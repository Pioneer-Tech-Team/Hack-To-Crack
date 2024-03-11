import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set2 = () => {
  useEffect(() => {
    document.title = "Domain - Set 2";
  });

  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Domain - set 2",
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
        <h1 className="parent-software-title">Domain 2 - Smart Education</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              SE001 - Improvement System for education low bandwidth area
            </h1>
            <p className="software-content-description projects-close">
              develop an innovative solution for improving education delivery in low bandwidth areas.
              The goal is to address the challenges faced by students and educators in regions with
              limited internet connectivity. Participants should create a system that optimizes the
              use of available bandwidth, offering seamless access to educational content, interactive
              learning resources, and collaboration tools. The solution should prioritize efficiency
              and effectiveness in delivering educational materials to enhance the learning experience
              in areas with constrained network connectivity.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              SE002 - Student achievement tracking system for credit of course and other award in school & college (NEP 2022)
            </h1>
            <p className="software-content-description projects-close">
              In alignment with the National Education Policy (NEP) 2022, participants are tasked with building a comprehensive
              student achievement tracking system. The objective is to design a platform that facilitates efficient
              monitoring of student progress, achievement of credits, and receipt of awards within schools and colleges.
              Participants should focus on implementing features that align with the new education policy guidelines,
              including credit-based systems and recognition of diverse achievements. The system should provide
              real-time insights into student performance, enabling educators and administrators to make informed
              decisions and support the holistic development of students.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              SE003 - AR-VR based solution for teaching
            </h1>
            <p className="software-content-description projects-close">
              create an innovative Augmented Reality (AR) and Virtual Reality (VR) solution to enhance the teaching and learning experience.
              The aim is to leverage immersive technologies to create interactive and engaging educational content.
              Participants should develop a platform that allows educators to integrate AR and VR elements into their
              lessons, making complex concepts more tangible and fostering a dynamic learning environment.
              The solution should cater to various subjects and educational levels, promoting active participation
              and understanding through immersive and interactive educational experiences.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              SE004 - Develop a comprehensive Alumni Tracking System
            </h1>
            <p className="software-content-description projects-close">
            Develop a comprehensive Alumni Tracking System to enhance engagement and connections between 
            current students and alumni in the educational institution. The system should offer real-time 
            insights into alumni activities, career paths, and profiles. It should include an intelligent 
            networking feature that suggests connections based on academic backgrounds and shared interests.
             Additionally, the system should analyze and visualize alumni career trajectories for inspiration
              and mentorship opportunities for their juniors, promoting ongoing collaboration and knowledge
               sharing within the educational community.
               (Higher Educational institutions nurture, close to 20
                lack professionals every year. These institutions could not track the progress made by their 
                allumni after graduation, thus creating multiple issues for Allumni engagement, and data, to
                 get benefits of Alumni and also preparation for accreditation.)
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set2;
