import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/vimeet.png"
              alt="srm logo"
              className="about-srm-logo"
            />
            1st year of National Level Hackthon
            <img
              src="/images/saam.png"
              alt="srmvec logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
          Vishwaniketan will provide quality engineering education to create
          ‘Design Engineers’. Our engineers will positively impact their own
          lives and also business and society at large. They will do so by
          implementing the Project-Based Learning (PBL) approach
          to solve human and technology problems. We aim to create
          socially aware entrepreneurs who will empower society with
          relevant technology and business solution.
.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.srmvalliammai.ac.in")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/saam.png"
              alt="srmvec logo"
            />
            About ViMEET
          </div>
          <div className="about-srmvec-description" id="about-right">
              At ViMEET, we focus on the overall development of our students.
               A brief curriculum concerning the University of Mumbai prevails,
              however, we try to develop more innovative and interactive teaching-learning methods.
              One of these methods which have a deep impact on VISHWANIKETAN
              is Project-Based Learning (PBL).
              We aim to help our students become aware and ready to work in the industry
              as soon as they graduate.
              The PBL method has been proved to be very supportive to achieve this goal.
               Furthermore, we believe in giving the best exposure that undergraduates
                can have through Project-Based Learning, international programs, and
                tie-ups with various global institutions. Research and development
                also play an important role at ViMEET.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.csi-kancheepuram.org/")}
          >
            <img
              className="about-csi-logo"
              src="/images/csi1.webp"
              alt="csi logo"
            />
            About CSE AIML
          </div>
          <div className="about-csi-description" id="about-left">
            Computer Society of India is a body of computer professionals in
            India. It was started on 6 March 1965 by a few computer
            professionals and has now grown to be the national body representing
            computer professionals. It has 72 chapters across India, 511 student
            branches, and 100,000 members. The society promotes knowledge
            sharing,and professional development in the field of computer
            science.
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.whitehatians.tech")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/whitehatians.webp"
              alt="whitehatians logo"
            />
            About SAAM
          </div>
          <div className="about-whitehatians-description" id="about-right">
            WhiteHatians Cyber Security club. The main goal of this club is to
            provide a technical opportunity for students to broaden their
            knowledge in the area of Cyber Security and to interact with other
            students who have a shared interest in cyber security. Through the
            club’s activities, members can also network with professionals in
            the field, gain hands-on experience, and prepare for careers in
            cyber security.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
