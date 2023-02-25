import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/a12.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />

    <div className="gpt3__header section__padding" id="home">
      <div className="free-space"></div>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Get solution for your Coding doubts with 1-on-1 live sessions
        </h1>
        <p>
          A web app to get answers to your doubt instantly! Not only it would
          help you with the clarification regarding the doubt but it will also
          save a ton of time of yours
        </p>
        <div className="gpt3__header-content__input">
          <Link to="/submitquestion">
            <button className="gpt3__header-content__input-ask" type="button">
              ASK NOW
            </button>
          </Link>

          <button className="gpt3__header-content__input-play" type="button">
            {/* drive link */}
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                filter: "brightness(90%)",
              }}
              href="https://drive.google.com/file/d/1Gfcynb6gYaHVWw_Y1iRFpFyrZna84u7_/view?usp=sharing"
            >
              📃
            </a>
          </button>
          <div className="gpt3__header-content__input-text">
            <p>See how it works!</p>
          </div>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>100+ tutors available 24/7 to help</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  </>
);

export default Header;
