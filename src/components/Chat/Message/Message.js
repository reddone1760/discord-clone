import React from "react";
import "./Message.css";

//? Icons
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Reddone_1760 <span className="message__timestamp">01.03.2021</span>
        </h4>
        <p>This is the message</p>
      </div>
    </div>
  );
}

export default Message;
