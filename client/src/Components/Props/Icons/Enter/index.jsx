import React from 'react';
import "./Enter.scss";
import { BsArrowReturnLeft } from "react-icons/bs"
import PropTypes from "prop-types";

const Enter = (props) => {
  return (
    <button className='icon-enter' onClick={props.onClick}><BsArrowReturnLeft /></button>
  )
}

Enter.propTypes = {
  onClick: PropTypes.func,
}

export default Enter