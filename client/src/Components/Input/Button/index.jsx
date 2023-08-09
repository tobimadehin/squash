import React, { useState, useEffect } from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  // const [label, setLabel] = useState(props.label || "Button");
  const [type, setType] = useState(props.type || 1);
  const [typeStyle, setTypeStyle] = useState(props.typeStyle || style1);

  const onSetType = (typeToSet) => {
    switch (typeToSet) {
      case 1:
        setTypeStyle(style1)
        break;
      case 2:
        setTypeStyle(style2)
        break;
      case 3:
        setTypeStyle(style3)
        break;
      default:
        break;
    }

    setType(typeToSet);
  } 

  useEffect(() => {
    onSetType(type);
    // setLabel(label);
  }, []);

  return (
    <div className='div-button'>
      <button className="button" onClick={props.onClick} style={ typeStyle }>{props.label}</button>
    </div>
  )
}

const style1 = {
  backgroundColor: "var(--grey-main)",
  border: "none",
}

const style2 = {
  backgroundColor: "var(--grey-second)",
  border: "solid 1px #ffffff35",
}

const style3 = {
  backgroundColor: "var(--secondary2)",
  border: "none",
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.number,
  typeStyle: PropTypes.object,
  onClick: PropTypes.func,
}

export default Button