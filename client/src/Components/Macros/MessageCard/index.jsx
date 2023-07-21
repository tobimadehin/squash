import React from "react";
import "./MessageCard.scss";
import { User } from "../../../Components";
import PropTypes from "prop-types";

const MessageCard = (props) => {
    return (
        <div className="div-message">
            <div className="div-profile-icon">
                <User />
            </div>
            <div className="div-text">
                <div className="div-message-info">
                    <div className="div-name">{props.name}</div>
                    <div className="div-time">{props.time}</div>
                </div>
                <div className="div-card-message">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

MessageCard.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
    message: PropTypes.string,
}

export default MessageCard;
