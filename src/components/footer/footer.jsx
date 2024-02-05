import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          {currentYear} - <span style={{opacity:"0.5"}}> Build upon <a href="https://github.com/shadowctrl/HackATank-Website" target="_blank" rel="noopener noreferrer"> GitHub</a></span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
