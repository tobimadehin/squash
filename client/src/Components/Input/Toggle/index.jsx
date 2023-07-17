import React, { useState, useEffect } from 'react';
import "./Toggle.scss";
import { IoCheckmark } from "react-icons/io5";

const Toggle = (props) => {
  const [label, setLabel] = useState(props.label || "Label");

  useEffect(() => {
    setLabel(label);
  }, []);

  return (
    <div className='div-toggle'>
      <div className='icon-toggle'
              onClick={props.onClick}
      >
        { props.value && <IoCheckmark /> }
      </div>
      <div className='div-toggle-label'>{props.label}</div>
    </div>
  )
}

export default Toggle