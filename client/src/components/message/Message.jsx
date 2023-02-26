import React from "react";
import "./message.css";

const Message = ({ data, my }) => {
  return (
    <>
      <div className="flex-message">
        {data.from === my ? (
          <div className="main-div-tutor">
            <p>{data.msg}</p>
          </div>
        ) : (
          <div className="main-div-student">{data.msg}</div>
        )}
      </div>
    </>
  );
};

export default Message;
