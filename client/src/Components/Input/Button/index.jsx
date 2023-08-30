import React, { useState, useEffect } from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
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
  }, []);

  return (
    <div className='div-button'>
      <button className="button" onClick={props.onClick} style={typeStyle} disabled={props.isLoading}>
        <div className="div-button-inner">
          {
            props.isLoading ? 
            <>
              <span className="loader"></span>
            </> :
            <>
              <span>{props.icon}</span>
              <span className='div-button-inner-label'>{props.label}</span>
            </>
          }
        </div>
      </button>
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
  backgroundColor: "var(--secondary1)",
  border: "none",
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  type: PropTypes.number,
  typeStyle: PropTypes.object,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default Button