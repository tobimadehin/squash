import React from 'react'
import "./Calender.scss"
import { BsCalendar2Plus } from "react-icons/bs"
import PropTypes from "prop-types"

const Calender = (props) => {
  return (
    <button className={`icon-chat ` + `icon-` + `${props.style}`} onClick={props.onClick}>
      <BsCalendar2Plus />
    </button>
  )
}

Calender.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
}

export default Calender