import React, { useState, useEffect, useRef } from 'react'
import "./EmailVerification.scss"
import "../Auth/Auth.scss"
import { Typography } from '../../Components'

const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const numInputs = 6;
  const [otpValues, setOtpValues] = useState(Array(numInputs).fill(''));
  const inputRefs = useRef([]);
  const otpValuesComplete = otpValues.every(value => value !== "");

  useEffect(() => {
    setIsLoading(isLoading);
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [otpValuesComplete, !isLoading]);

  const handleSubmit = () => {
    // e.preventDefault();
    if (otpValuesComplete) {
      console.log('OTP Values as a string:', otpValues.join(''));
    }
  }

  if (otpValuesComplete) {
    console.log("otpValues:", otpValues.join(""));
  }

  const handleChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (index < numInputs - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const sendCode = () => {

  }

  return (
    <div className="div-auth">
      <div className="div-card-auth">
        <div className="div-card-content">
          <div className="div-card-auth-content-top">
            <Typography text="Please Verify Account" size="xx-large" weight="bolder" align="center" />
            <Typography text="Enter the six digit code sent to your email address" 
                        size="small" weight="normal" align="center" 
            />
          </div>
          <form onClick={handleSubmit}>
            <div className="div-verification-input-container">
              {
                otpValues.map((value, index) => (
                  <input  className="div-verification-input"
                          key={index}
                          type="text"
                          maxLength="1"
                          value={value}
                          onChange={(e) => handleChange(index, e.target.value)}
                          ref={(el) => (inputRefs.current[index] = el)} // Save reference to input element
                  />
                ))
              }
            </div>
          </form>
          <div className="div-verification-line-item">
            <Typography text="Didn't get code? " onClick={sendCode} linkLabel="Resend" size="small" weight="bolder" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification