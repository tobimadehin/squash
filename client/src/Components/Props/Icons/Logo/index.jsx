import React from 'react';
import "./Logo.scss";
import icon from "../../../../Static/icon.svg"

const Logo = () => {
  return (
    <div className='div-icon'>
        <img src={icon} alt='icon' /> 
    </div>
  )
}

export default Logo