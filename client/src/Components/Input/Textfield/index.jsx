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
  const [transparent, setTransparent] = useState(visibleCss);
  const [transparentBool, setTransparentBool] = useState(props.transparent || false);
  const [combinedStyle, setCombinedStyle] = useState(transparentCss);

  const onSetCombinedStyle = (style, isTransparent) => {
    isTransparent ? setTransparent(transparentCss) : setTransparent(visibleCss);
    setTransparentBool(isTransparent);
    style = { ...style, ...{ width: inputWidth }}
    setCombinedStyle(style);
  }
  
  useEffect(() => {
    setInputWidth(inputWidth)
    setX(translateX);
    setY(translateY);
    setPlaceholder(placeholder);
    setTextAlign(textAlign);
    setIsPassword(isPassword);
  }, [])

  useEffect(() => {
    setType(type);
  }, [isPassword])

  useEffect(() => {
    onSetCombinedStyle(transparent, transparentBool);
  }, [transparent])

  return (
    <div className='textfield-transparent' style={{ transform: "translate(" + translateX + "," + translateY + ")" }}>
        <input 
          className={`textfield-transparent-input ${textAlign}`}
          type={props.type} 
          placeholder={placeholder}
          style={combinedStyle}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
    </div>
  )
}

const transparentCss = {
  backgroundColor: "transparent",
  border: "none",
  outline: 0,
  color: "white",
}

const visibleCss = {
  border: "solid 1px #ffffff35",
  borderRadius: "6px", 
  color: "white",
  backgroundColor: "#ffffff35",
}

export default Textfield