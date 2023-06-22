import React from "react";
import "./MessageCard.scss";
import img from "../../door-story.jpg";

const MessageCard = () => {
    return (
        <div class="div-message">
            <img src={img} alt="door-story" />
            <div class="div-text">
                <div class="div-message-info">
                    <div>Wesley Fox</div>
                    <div>02:32pm</div>
                </div>
                <div class="div-card-message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

        </div>

    );
}

export default MessageCard;
