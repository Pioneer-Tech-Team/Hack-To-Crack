import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
import Team from "./team";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsor
          <img src="/images/rrr.webp" alt="arrow-logo" />
        </h1>
      <p className="sponsor-tag golden"><span href="#" >General</span></p>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="POLLUTION CONTROL BOARD OF MAHARASHTRA" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://mpcb.gov.in/node" target="_blank">
                  {" "}
                  MAHARASHTRA POLLUTION CONTROL BOARD{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="INDIAN GREEN BUILDING COUNCIL" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://igbc.in/" target="_blank">
                  {" "}
                  INDIAN GREEN BUILDING COUNCIL{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="PREM JAIN MEMORIAL TRUST" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://premjainmemorialtrust.com/" target="_blank">
                  {" "}
                  PREM JAIN MEMORIAL TRUST{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="APTECH-Panvel" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://aptechpanvel.in/" target="_blank">
                  {" "}
                  APTECH-Panvel{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="RKDEMY" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.rkdemy.in/" target="_blank">
                  {" "}
                  RKDEMY{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="APCHEMI" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.apchemi.com/" target="_blank">
                  {" "}
                  APCHEMI{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="SONSVELS SOLUTION" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://sonsvels-solution.business.site/" target="_blank">
                  {" "}
                  SONSVELS SOLUTION{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="DSES PVT LTD" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.dnyandases.com" target="_blank">
                  {" "}
                  DSES PVT LTD{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <p className="sponsor-tag"><span>Website Sponsor</span></p>
            <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="Pioneertech" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://pioneertech.net.in/" target="_blank">
                  {" "}
                  Pioneertech{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
          </div>

          <div>
            <p className="sponsor-tag"><span>T-shirt Sponsor</span></p>
            <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/pioneertech.png" alt="JUSTINKIT" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://" target="_blank">
                  {" "}
                  JUSTINKIT{" "}
                </a>
              </h1>
            </div>{" "}
          </div>
        </div>
          </div>
        </div>
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
        {/* <Team /> */}
      </div>
    </React.Fragment>
  );
};

export default sponsors;
