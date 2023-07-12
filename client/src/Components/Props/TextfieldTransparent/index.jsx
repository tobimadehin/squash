import React from 'react'
import "./TextfieldTransparent.scss"
import { useState, useEffect } from 'react'

const TextfieldTransparent = (props) => {
  const [inputWidth, setInputWidth] = useState(props.width);
  const [translateX, setX] = useState(props.xTransform || "0%");
  const [translateY, setY] = useState(props.yTransform || "0%");
  const [placeholder, setPlaceholder] = useState(props.placeholder || 'Send a message...');

  const handleInputChange = (event) => {
    setInputWidth(event.target.value);
    setX(event.target.value);
    setY(event.target.value);
  };

  useEffect(() => {
    setPlaceholder(placeholder);
  }, [])

  return (
    <div className='textfield-transparent' style={{ transform: "translate(" + translateX + "," + translateY + ")" }}>
        <input 
          className='textfield-transparent-input' 
          type='input' 
          placeholder={placeholder}
          style={{ width: inputWidth }}
          onChange={handleInputChange}
        />
    </div>
  )
}

export default TextfieldTransparent