import React, { useState, useEffect } from 'react';
import "./ButtonIcon.scss";

const ButtonIcon = (props) => {
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
    <div className='div-button-icon'>
      <button className="button" onClick={props.onClick} style={ typeStyle } >
        <div className="div-button-inner">
          <div>{props.icon}</div>
          <div className='div-button-inner-label'>{props.label}</div>
        </div>
      </button>
    </div>
  )
}

const style1 = {
  backgroundColor: "var(--grey-main)"
}

const style2 = {
  backgroundColor: "var(--grey-second)"
}

export default ButtonIcon