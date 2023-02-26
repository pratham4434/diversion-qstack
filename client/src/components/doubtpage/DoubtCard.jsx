import React from "react";
import "./doubtcard.css";
import { Link } from "react-router-dom";
const DoubtCard = ({title,desc,image,username}) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="card-doubt" >
        <div className="card-img">
          <img style={{width:"100%",height:"100%",overflow:"hidden",objectFit:"cover",borderRadius:"16px", borderColor: "#9ecaed",  boxShadow: "0 0 5px #9ecaed"}} src={image} alt=""/>
        </div>
        <div className="card-desc-wrapper">
        <p className="card-desc" style={{ color: "#ffffff" }}>
            {title}
           
            {/* <i class="fa-duotone fa-clipboard-question"></i> */}
          </p>
          <p className="card-desc" style={{ color: "#b4b4b4" }}>
            {desc}
            {/* <i class="fa-duotone fa-clipboard-question"></i> */}
          </p>
        </div>
        <div className="doubt-btn " style={{ width: "100%" , marginBottom:"16px"}}>
          <Link to={{pathname:"/singledoubt",state:{title,desc,image,username}}}>
            <button
              className="btn timer-butt"
              style={{
                backgroundColor: "white",
                border: "3px solid orange",
                color: "#000",
                fontSize: "larger",
                borderRadius: "6px",
                margin: "3%",
                width: "12rem",
              }}
            >
              Open
            </button>
          </Link>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Link to={{pathname:"/videochat",state:{username}}}>
            <button
              className="btn timer-butt"
              style={{
                fontSize: "larger",
                borderRadius: "6px",
                margin: "3%",
                width: "12rem",
              }}
            >
              Solve
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoubtCard;
