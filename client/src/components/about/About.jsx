import React from "react";
import ai from "../../assets/blog01.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="gpt3__cta2">
        <div
          className="gpt3__cta-content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <p>A project dedicated to all the learners</p>
          </div>
          <div>
            <h3>Created with ❤️ by </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "row", margin: "1%" }}>
            <div
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            >
              <img
                src={ai}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectFit: "stretch",
                }}
              ></img>
            </div>
            <div style={{ width: "20px" }}></div>
            <div
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            >
              <img
                src={ai}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectFit: "stretch",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
