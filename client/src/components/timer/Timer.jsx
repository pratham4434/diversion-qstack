import React, { useState, useEffect } from "react";
import "./timer.css";
import bro from "../../assets/bro.png";

const Timer = ({timers,setTimers}) => {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
  const [timeUp, setTimeUp] = useState(false);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
     
        setSeconds(seconds - 1);
      
      

      if (seconds === 0 && minutes === 0) {
        setTimeUp(true);
        setTimers(false);
        return;
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      {0? (
        <div className=".cover_rectangle-main">
          <div className="cover_rectangle-ptal">
            <h1 className="timer-heading">
              Whoops! No tutor available at the moment
            </h1>
            <h1 className="timer-timing2 gradient__text">Please try again!</h1>
            <div className="timer-btn">
              <button className="btn timer-butt">Retry</button>
              <button className="btn timer-butt">Cancel</button>
            </div>
          </div>
          <div>
            <img className="bro-img" src={bro} alt="" />
          </div>
        </div>
      ) : (
        <div className=".cover_rectangle-main">
          <div className="cover_rectangle-new">
            <h1 className="timer-heading">Wait for a moment</h1>
            <h1 className="timer-timing">
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
            </h1>
            <div className="timer-btn">
              <button className="btn timer-butt">Retry</button>
              <button className="btn timer-butt">Cancel</button>
            </div>
          </div>
          <div>
            <img className="bro-img" src={bro} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
