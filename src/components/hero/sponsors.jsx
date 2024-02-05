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
      <p className="sponsor-tag golden"><span href="#" >Golden</span></p>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/hebesec.webp" alt="Hebesec Technologies" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
      <p className="sponsor-tag silver"><span href="#" >Silver</span></p>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/hebesec.webp" alt="Hebesec Technologies" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
      <p className="sponsor-tag bronze"><span href="#" >Bronze</span></p>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/hebesec.webp" alt="Hebesec Technologies" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
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
              <img src="/images/hebesec.webp" alt="Hebesec Technologies" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
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
              <img src="/images/hebesec.webp" alt="Hebesec Technologies" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
          </div>
        </div>
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
        <Team />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
