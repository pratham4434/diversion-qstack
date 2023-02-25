import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./singledoubt.css";

const SingleDoubt = () => {
  const data = useLocation();
  console.log("data of uselocation");
  console.log(data);
  return (
    <>
      <Navbarvc />
      <div className="free-space"></div>
      <div className="cover_rectangle4">
        <div className="left-pic">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "stretch",
              borderRadius: "inherit",
              
            }}
            src={data.state.image}
            alt=""
          />
        </div>
        <div className="right-ques">
        <h4 style={{
              fontSize: "16px", margin: "1%",color: "#FF8A79"}}> Doubt title: </h4>
          <h2
            style={{
              fontSize: "36px",
              margin: "1%",
              wordWrap: "break-word",
              paddingBottom:"10px"
            }}
          >
            {data.state.title}

          </h2>
          <p>Asked by : @{data.state.username}</p>
          <h4 style={{
              fontSize: "16px", margin: "1%",color: "#FF8A79",}}> Description: </h4>

          <h3 style={{ color: "#b4b4b4",wordWrap: "break-word" }}>{data.state.desc}</h3>
          <div className="doubt-btn " style={{ width: "100%" }}>
            <Link to="/doubtpage">
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
                Back
              </button>
            </Link>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <Link to="/videochat">
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
      </div>
      <div className="free-space2"></div>
    </>
  );
};

export default SingleDoubt;
