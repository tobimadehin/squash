import React from 'react'
import "./Textfield.scss"
import { useState, useEffect } from 'react'

const Textfield = (props) => {
  const [type, setType] = useState(props.type || "text");
  const [isPassword, setIsPassword] = useState(props.isPassword || false);
  const [inputWidth, setInputWidth] = useState(props.width);
  const [translateX, setX] = useState(props.xTransform || "0%");
  const [translateY, setY] = useState(props.yTransform || "0%");
  const [placeholder, setPlaceholder] = useState(props.placeholder || "Input");
  const [textAlign, setTextAlign] = useState(props.textAlign || "left");

  useEffect(() => {
    setInputWidth(inputWidth)
    setX(translateX);
    setY(translateY);
    setPlaceholder(placeholder);
    setTextAlign(textAlign);
    setIsPassword(isPassword);
  }, []);

  useEffect(() => {
    setType(type);
  }, [isPassword]);

  return (
    <div className='textfield' style={{ transform: "translate(" + translateX + "," + translateY + ")" }}>
        <input 
          className={`textfield-input-${props.style}` + " " + `${props.textAlign}`}
          type={props.type}
          value={props.value}
          placeholder={placeholder}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
    </div>
  )
}

export default Textfield