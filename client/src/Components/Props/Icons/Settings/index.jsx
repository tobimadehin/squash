import React from 'react'
import "./Settings.scss"
import { IoSettingsOutline } from "react-icons/io5"
import PropTypes from "prop-types"

const Settings = (props) => {
  return (
    <button className={`icon-chat ` + `icon-` + `${props.style}`} onClick={props.onClick}>
      <IoSettingsOutline />
    </button>
  )
}

Settings.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
}

export default Settings