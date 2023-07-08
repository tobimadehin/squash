import React from "react";
import "./MessageCard.scss";
import img from "../../door-story.jpg";

const MessageCard = (props) => {
    return (
        <div class="div-message">
            <img src={img} alt="door-story" />
            <div class="div-text">
                <div class="div-message-info">
                    <div class="div-name">{props.name}</div>
                    <div class="div-time">{props.time}</div>
                </div>
                <div class="div-card-message">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default MessageCard;
