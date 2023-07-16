import React, { useState, useEffect } from 'react';
import './TextfieldLabelled.scss';
import { Textfield } from "../..";

const TextfieldLabelled = (props) => {
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
  }, []);

  useEffect(() => {
    onSetHeight(height);
  }, [hasHelperText])

  return (
    <div className='div-textfield-labelled' style={{ height: height }}>
      <div>
          {label}
      </div>
      <div>
          <Textfield width={props.width} placeholder={props.placeholder} />
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