import React from "react";
import "./convener.css";
const Team = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Team</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/giridharan.webp"
              alt="Giridharan -  professor"
            />
            <h1 className="convener-name">___</h1>
            <h1 className="convener-position">
               Professor - CSE AIML
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/nandhashree.webp"
              alt="Sneha - professor"
            />
            <h1 className="convener-name"> Mrs. Sneha Nimbare-Bamane</h1>
            <h1 className="convener-position">
               Professor - CSE AIML
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Team;
