import React from 'react'
import "./Group.scss"
import { HiOutlineUserGroup } from "react-icons/hi"
import PropTypes from "prop-types"

const Group = (props) => {
  return (
    <button className={`icon-chat ` + `icon-` + `${props.style}`} onClick={props.onClick}>
      <HiOutlineUserGroup />
    </button>
  )
}

Group.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
}

export default Group