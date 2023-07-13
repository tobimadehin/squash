import React from "react";
import "./MessageCard.scss";
import { User } from "../../../Components";

const MessageCard = (props) => {
    return (
        <div class="div-message">
            <div className="div-profile-icon">
                <User />
            </div>
            <div class="div-text">
                <div class="div-message-info">
                    <div class="div-name">My name</div>
                    <div class="div-time">05/20/23 11:45</div>
                </div>
                <div class="div-card-message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce viverra felis ac neque vulputate fringilla. 
                    Sed id mauris nec nibh tincidunt bibendum eu sit amet sem. 
                    Suspendisse id justo id nunc pulvinar ultricies. 
                    Quisque fringilla metus non augue dignissim, vitae blandit velit semper. 
                </div>
            </div>
        </div>
    );
}

export default MessageCard;
