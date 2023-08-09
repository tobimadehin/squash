import React from 'react'
import "./Call.scss"
import { PiPhoneCall } from "react-icons/pi"
import PropTypes from "prop-types"

const Call = (props) => {
  return (
    <button className={`icon-chat ` + `icon-` + `${props.style}`} onClick={props.onClick}>
      <PiPhoneCall />
    </button>
  )
}

Call.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
}

export default Call