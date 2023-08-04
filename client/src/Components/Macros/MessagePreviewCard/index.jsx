import React from "react";
import "./MessagePreviewCard.scss";
import { User, Typography } from "../../../Components";
import PropTypes from "prop-types";

const MessagePreviewCard = (props) => {
    return (
        <div className="div-preview-message">
            <div className="div-preview-profile-icon">
                <User />
            </div>
            <div className="div-preview-text">
                <div className="div-preview-text-row">
                    <Typography text={props.name} margin={0} />
                </div>
                <div className="div-preview-text-row">
                    <Typography text={props.message} size="12px" margin={0} />
                </div>
            </div>
            <div className="div-preview-col-end">
                <div className="div-preview-text-row">
                    <Typography text={props.time} size="12px" />
                </div>
                <div className="div-preview-text-row">
                    <div className="div-preview-text-row-unread">
                        <Typography text={props.unread} size="small" />
                    </div>    
                </div>
            </div>
        </div>
    );
}

MessagePreviewCard.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string,
    unread: PropTypes.string,
}

export default MessagePreviewCard;
