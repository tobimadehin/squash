import React, { useState, useEffect } from "react";
import "./MessageCard.scss";
import { User } from "../..";
import PropTypes from "prop-types";

const MessageCard = (props) => {
    const [showProfile, setShowProfile] = useState(false);
    const [align, setAlign] = useState(props.align || "start");

    useEffect(() => {
        setShowProfile(showProfile);
        setAlign(align);
    }, []);

    return (
        <div className={"div-message-container " + "justify-message-container-" + `${align}`}>
            <div className={"div-message " + "justify-message-" + `${align}`}>
                {
                    showProfile && 
                    <div className="div-profile-icon">
                        <User />
                    </div>
                }
                <div className={"div-text " + "message-card-" + `${align}`}>
                    <div className="div-message-info">
                        <div className="div-name">{props.name}</div>
                        <div className="div-time">{props.time}</div>
                    </div>
                    <div className="div-card-message">
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    );
}

MessageCard.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
    message: PropTypes.string,
    align: PropTypes.string, 
}

export default MessageCard;
