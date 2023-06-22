import React from "react";
import "./MessageCard.scss";
import img from "../../door-story.jpg";

const MessageCard = (props) => {
    return (
        <div class="div-message">
            <img src={img} alt="door-story" />
            <div class="div-text">
                <div class="div-message-info">
                    <div>{props.name}</div>
                    <div>{props.time}</div>
                </div>
                <div class="div-card-message">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default MessageCard;
