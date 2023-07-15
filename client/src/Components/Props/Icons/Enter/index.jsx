import React from 'react';
import "./Enter.scss";
import { BsArrowReturnLeft } from "react-icons/bs"

const Enter = (props) => {
  return (
    <button className='icon-enter' onClick={props.onClick}><BsArrowReturnLeft /></button>
  )
}

export default Enter