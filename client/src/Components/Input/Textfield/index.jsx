import React from 'react'
import "./Textfield.scss"
import { useState, useEffect } from 'react'
import PropTypes from "prop-types";

const Textfield = (props) => {
  const [type, setType] = useState(props.type || "text");
  const [isPassword, setIsPassword] = useState(props.isPassword || false);
  // const [inputWidth, setInputWidth] = useState(props.width); 
  const [translateX, setX] = useState(props.xTransform || "0%");
  const [translateY, setY] = useState(props.yTransform || "0%");
  const [placeholder, setPlaceholder] = useState(props.placeholder || "Input");
  const [textAlign, setTextAlign] = useState(props.textAlign || "left");
  const [style, setStyle] = useState(props.style || "visible");

  useEffect(() => {
    // setInputWidth(inputWidth)
    setX(translateX);
    setY(translateY);
    setPlaceholder(placeholder);
    setTextAlign(textAlign);
    setIsPassword(isPassword);
    setStyle(style);
  }, []);

  useEffect(() => {
    setType(type);
  }, [isPassword]);

  return (
    <div className='textfield' style={{ transform: "translate(" + translateX + "," + translateY + ")" }}>
        <input 
          className={`textfield-input-${style}` + " " + `${props.textAlign}`}
          name={props.name}
          type={props.type}
          value={props.value}
          placeholder={placeholder}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          required
        />
    </div>
  )
}

Textfield.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  isPassword: PropTypes.bool,
  xTransform: PropTypes.string,
  yTransform: PropTypes.string,
  placeholder: PropTypes.string,
  textAlign: PropTypes.string,
  style: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
}

export default Textfield