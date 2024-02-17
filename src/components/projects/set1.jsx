import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set1 = () => {
  useEffect(() => {
    document.title = "Domain - Set 1";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Domain - set 1",
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
        <h1 className="parent-software-title">  Domain 1 - Blockchain and Cybersecurity  </h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">BC001 - Supplychain Management with Blockchain</h1>
            <p className="software-content-description projects-close">
            Participants are tasked with revolutionizing supply chain management through the integration of
             blockchain technology. The objective is to enhance the security and transparency of supply chain
              processes, addressing issues such as counterfeit goods and inefficient tracking. Participants
               are expected to design and implement a blockchain-based solution that ensures tamper-proof and 
               traceable transactions, providing stakeholders with real-time insights into the supply chain
                while maintaining robust cybersecurity measures.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">BC002 - Identity Verification System</h1>
            <p className="software-content-description projects-close">
            In the realm of blockchain and cybersecurity, participants are challenged to create an
             advanced identity verification system. The focus is on leveraging blockchain for secure 
             and decentralized identity management. Participants should incorporate cryptographic
              principles to enhance privacy, resilience against cyber threats, and user-controlled
               identity verification. The goal is to establish a system that is not only technologically
                advanced but also resilient to cybersecurity challenges associated with identity theft and 
                fraudulent activities
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">BC003 - Financial Transaction manage using public ledgers for bank</h1>
            <p className="software-content-description projects-close">
            optimizing financial transaction management in the banking sector through the application of public
             ledgers, emphasizing blockchain technology. Participants are expected to design a secure and 
             transparent platform that enhances transaction speed and integrity while adhering to cybersecurity
              best practices. Key areas of focus include cryptographic protocols for secure transactions, 
              robust auditing mechanisms, and compliance with cybersecurity standards to ensure the 
              confidentiality and integrity of financial data.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
