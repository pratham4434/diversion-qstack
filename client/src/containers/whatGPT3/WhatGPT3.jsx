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
        One app to solve all your doubts Fastly and Coherently.
      </h1>
      <a href="#features">
        <p>See detailed steps</p>
      </a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="ChatGPT API"
        text="We have integrated the optimised chatGPT's support for pure students' work which can directly answer your doubts if any tutor is not available. (current unavailable)"
      />
      <Feature
        title="Blogs Suggestion"
        text="We'll be suggesting you top viewed blogs for the tags of the topics/stacks that you selected while creating your profile"
      />
      <Feature
        title="Screenshare Feature"
        text="If you want to show your code to the tutor and type while he rectifies and dictates, then for that we have our screenshare feature which you can use while on VC."
      />
    </div>
  </div>
);

export default WhatGPT3;
