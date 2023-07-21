import React, { useState, useEffect } from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const [label, setLabel] = useState(props.label || "Button");
  const [type, setType] = useState(props.type || 1);
  const [typeStyle, setTypeStyle] = useState(props.typeStyle || style1);

  const onSetType = (typeToSet) => {
    typeToSet == 1 ? setTypeStyle(style1) : setTypeStyle(style2);
    setType(typeToSet);
  } 

  useEffect(() => {
    setLabel(label);
    onSetType(type);
  }, []);

  return (
    <div className='div-button'>
      <button className="button" onClick={props.onClick} style={ typeStyle } >{props.label}</button>
    </div>
  )
}

const style1 = {
  backgroundColor: "var(--grey-main)"
}

const style2 = {
  backgroundColor: "var(--grey-second)"
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.number,
  typeStyle: PropTypes.object,
  onClick: PropTypes.func,
}

export default Button