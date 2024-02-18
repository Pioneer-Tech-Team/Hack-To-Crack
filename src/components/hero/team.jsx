import React, { useEffect } from "react";
import "./judges.css";
import Judge3 from "../judges/Judge3";
import { set1, set2, set3, set4 ,set5 , set6, set7, set8 } from "./Details";
const Team = () => {
  useEffect(() => {
    document.title = "Judge Panel | Hack To Crack";
  },[]);


  return (
    <div className="parent-judges">
      <section className="bg-judges">
        
            <img src="/images/judgeP/bg.png" alt="hjhg" className="bg_img" />
        
        <div className="bg_img-overlay"></div>

      </section>
      <div className="title">
        <h1>judge panel</h1>
      </div>
      <section className="judges">
      <Judge3 mem = {set1} />
      <Judge3 mem = {set2} />
      <Judge3 mem = {set3} />
      <Judge3 mem = {set4} />
      <Judge3 mem = {set5} />
      <Judge3 mem = {set6} />
      <Judge3 mem = {set7} />
      <Judge3 mem = {set8} />
      </section>
    </div>
  );
};

export default Team;
