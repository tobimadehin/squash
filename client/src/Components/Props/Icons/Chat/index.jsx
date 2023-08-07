import React from 'react'
import "./Chat.scss"
import { BsChatSquareDots } from "react-icons/bs"
import PropTypes from "prop-types"

const Chat = (props) => {
    return (
        <button className={`icon-chat ` + `icon-` + `${props.style}`} onClick={props.onClick}>
            <BsChatSquareDots />
        </button>
    )
}

Chat.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.string,
}

export default Chat