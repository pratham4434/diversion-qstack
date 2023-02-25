import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "S1: Signup and then login",
    text: "You would have to first Sign up to our server and then log in to use our features",
  },
  {
    title: "S2: Complete your profile",
    text: "A completed profile with your name and the topics that you're interested in would allow you to experience all the benefits of our application",
  },
  {
    title: "S3: Submit A Doubt",
    text: "Take a picture of your doubt and submit it with detailed explanation, from the Ask a Doubt button. ",
  },
  {
    title: "S4: Video Chat Initiation",
    text: "Wait for 90 seconds, a tutor experienced in your tech stack would be joining you to rectify you doubt",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <br></br>
      {/* <iframe
        title="youtubevid"
        width="90%"
        height="320em"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe> */}
      <iframe
        width="90%"
        height="330em"
        src="https://www.youtube.com/embed/Oe421EPjeBE"
        title="Node.js and Express.js - Full Course"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/* <h1 className="gradient__text">
       Everyday tech video suggestion
      </h1> */}
      <p>Everyday Tech video suggestion</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
