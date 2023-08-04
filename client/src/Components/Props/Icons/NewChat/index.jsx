import React from 'react';
import "./NewChat.scss";
import { BsPencilSquare } from "react-icons/bs"
import PropTypes from "prop-types";

const NewChat = (props) => {
  return (
    <button className='icon-new-chat' onClick={props.onClick}><BsPencilSquare /></button>
  )
}

NewChat.propTypes = {
  onClick: PropTypes.func,
}

export default NewChat