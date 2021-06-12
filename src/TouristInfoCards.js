import React from "react";
import { TouristCardInfo } from "./TouristCardInfo";

const TouristInfoCards = () => {
  return (
    <div className="card-deck">
      {TouristCardInfo.map(info => {
        return (
          <div key={info.city} className="card">
            <img src={info.image} className="card-img-top" />
            <div className="card-body">
              <h2>{info.city}</h2>
              <p>{info.summary}</p>
              <a
                href={info.website}
                target="_blank"
                className="btn btn-primary"
              >
                More Information{" "}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
