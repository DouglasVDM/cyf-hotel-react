import React from "react";
import { TouristCardInfo } from "./TouristCardInfo";

const TouristInfoCards = () => {
  return (
    <div className="card-deck">
      {TouristCardInfo.map(info => {
        return (
          <div key={info.city} className="card">
            <a href={info.website} target="_blank">
              <img src={info.image} className="card-img-top" />
            </a>
            <div className="card-body">
              <a href={info.website} target="_blank">
                <h2 style={{ color: "black" }}>{info.city}</h2>
              </a>
              <p>{info.summary}</p>
              <a
                href={info.website}
                target="_blank"
                className="btn btn-primary"
              >
                More Information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
