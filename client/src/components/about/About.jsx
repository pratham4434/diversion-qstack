import React from "react";
import Pratham from "../../assets/pratham.jpg";
import Navneet from "../../assets/navneet.jpg";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div style={{ marginTop: "0",paddingTop: "0"}}className="gpt3__cta2" id="about">
        <div
          className="gpt3__cta-content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "380px",
          }}
        >
          <div style={{ height: "20px", color: "#b4b4b4" }}>
            <p>A project dedicated to all the learners</p>
          </div>
          <div>
            <h3>Created with ❤️ by </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "row", margin: "1%" }}>
            <div
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            >
              <a
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                }}
                href="https://www.linkedin.com/in/pratham-sharma-abcabcabc/"
              >
                <img
                  src={Pratham}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    objectFit: "cover",
                    border: "4px solid #fff",
                    marginTop: "0",
                    cursor: "pointer",
                  }}
                ></img>
              </a>
              <h4
                style={{
                  display: "Flex",
                  justifyContent: "center",
                  margin: "0.5rem",
                }}
              >
                Pratham Sharma
              </h4>
              <h5
                style={{
                  display: "Flex",
                  justifyContent: "center",
                  margin: "0.5rem",
                }}
              >
                Full-Stack Developer
              </h5>
            </div>
            <div style={{ width: "20px" }}></div>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            >
            <a
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                }}
                href="https://www.linkedin.com/in/navneet-nishchal-ab8b38224/"
              >
              <img
                src={Navneet}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectFit: "cover",
                  border: "4px solid #fff",
                  marginTop: "0",
                  cursor: "pointer",
                }}
              ></img></a>
              <h4
                style={{
                  display: "Flex",
                  justifyContent: "center",
                  margin: "0.5rem",
                }}
              >
                Navneet Nischal
              </h4>
              <h5
                style={{
                  display: "Flex",
                  justifyContent: "center",
                  margin: "0.5rem",
                }}
              >
                Full-Stack Developer
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
