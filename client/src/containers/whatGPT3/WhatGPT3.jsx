import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is QStack?"
        text="Sometimes written documented codes are not enough to explain everything related to 
        your doubt. So here we have our application QStack, which is a web app that will provide 
        the students a chance to get a video chat explanation  from a tutor for every doubt they have. All that
        the student has to do is to click a picture of his/her doubt and upload it on our website 
        along with his/her query. He/she will get a reply by our fellow teachers in 90 seconds. "
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        One app to solve all your doubts Faster and Coherently.
      </h1>
      <a href="#features">
      <p>See detailed steps</p>

      </a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Knowledgebase"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  </div>
);

export default WhatGPT3;
