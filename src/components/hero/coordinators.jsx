import React from "react";
import "./convener.css";
import {coordinatorsData} from "../../data.js";

const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container" >
        {
          coordinatorsData.map((data, index) => {
            return (
                <div className="convener-card" key={index}>
                  <img
                    className="convener-card-image"
                    src={data.image}
                    alt={data.name}
                  />
                  <h1 className="convener-name">{data.name }</h1>
                  <h1 className="convener-position">
                    {data.position}
                  </h1>
                </div>
            );
          }
          )
        }
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
