import React, { useState, useEffect } from 'react';
import './TextfieldLabelled.scss';
import { Textfield } from "../../../Components";

const TextfieldLabelled = (props) => {
  const [type, setType] = useState(props.type || "text");
  const [isPassword, setIsPassword] = useState(props.isPassword || false);
  const [label, setLabel] = useState(props.label || "Label");
  const [helper, setHelper] = useState(props.helper || "Helper");
  const [hasHelperText, setHasHelperText] = useState(props.hasHelperText || false); 
  const [height, setHeight] = useState("58px"); 

  const onSetHeight = (heightToSet) => {
    hasHelperText ? heightToSet = "78px" : heightToSet = "58px";
    setHeight(heightToSet);
  }

  useEffect(() => {
    setLabel(label);
    setHelper(helper);
    setHasHelperText(hasHelperText);
    setIsPassword(isPassword);
  }, []);

  useEffect(() => {
    setType(type);
  }, [isPassword])

  useEffect(() => {
    onSetHeight(height);
  }, [hasHelperText]);

  return (
    <div className='div-textfield-labelled' style={{ height: height }}>
      <div>
          {label}
      </div>
      <div>
          <Textfield width={props.width} isPassword={isPassword} type={props.type} placeholder={props.placeholder} />
      </div>
      <div className='div-helper'>
        {
          hasHelperText && helper
        }
      </div>
    </div>
  )
}

export default TextfieldLabelled