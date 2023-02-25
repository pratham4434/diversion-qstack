import React from 'react';
import { typescript, react, nodejs, express, mongodb } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img style={{ height: "100px" }} src={typescript} alt="" />
    </div>
    <div>
      <img style={{ height: "40px" }} src={react} alt="" />
    </div>
    <div>
      <img style={{ height: "120px" }} src={nodejs} alt="" />
    </div>
    <div>
      <img style={{ height: "90px" }} src={express} alt="" />
    </div>
    <div>
      <img  style={{ height: "100px" ,paddingBottom:"14px"}} src={mongodb} alt="" />
    </div>
  </div>
);

export default Brand;