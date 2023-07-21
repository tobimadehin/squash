import React, { useState, useEffect } from 'react';
import './TextfieldLabelled.scss';
import { Textfield } from "../../../Components";
import PropTypes from "prop-types";

const TextfieldLabelled = (props) => {
  const [type, setType] = useState(props.type || "text");
  const [isPassword, setIsPassword] = useState(props.isPassword || false);
  const [label, setLabel] = useState(props.label || "Label");
  const [hasHelperText, setHasHelperText] = useState(props.hasHelperText || false); 
  const [height, setHeight] = useState("58px");
  const [error, setError] = useState(props.error || false); 

  const onSetHeight = (heightToSet) => {
    hasHelperText ? heightToSet = "78px" : heightToSet = "58px";
    setHeight(heightToSet);
  }

  useEffect(() => {
    setLabel(label);
    setIsPassword(isPassword);
    setError(error);
    setHasHelperText(hasHelperText);
  }, []);

  useEffect(() => {
    setType(type);
  }, [isPassword]);

  useEffect(() => {
    onSetHeight(height);
  }, [hasHelperText]);

  return (
    <div className='div-textfield-labelled' style={{ height: height }}>
      <div>
          {label}
      </div>
      <div>
        <Textfield  width={props.width} 
                    isPassword={isPassword} 
                    value={props.value} 
                    onChange={props.onChange}
                    type={props.type} 
                    placeholder={props.placeholder}
                    style={props.style}
        />
      </div>
      <div className='div-helper'>
        {
          props.hasHelperText && props.helper
        }
      </div>
    </div>
  )
}

TextfieldLabelled.propTypes = {
  type: PropTypes.string,
  isPassword: PropTypes.bool,
  label: PropTypes.string,
  hasHelperText: PropTypes.bool,
  error: PropTypes.bool,
  width: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.string,
  helper: PropTypes.string,
}

export default TextfieldLabelled