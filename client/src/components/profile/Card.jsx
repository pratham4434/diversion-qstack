import React from "react";
import "./card.css";
import Stack from "./Stack";
const Card = () => {
  return (
    <div className="card">
      <div className="card_img"></div>
      <div className="card_desc">
        <div className="card_time">10hrs ago</div>
        <h4 style={{margin:"2px"}}>Unresolved Doubt 404</h4>
        
      {/* <Stack/> */}

      </div>
    </div>
  );
};

export default Card;
