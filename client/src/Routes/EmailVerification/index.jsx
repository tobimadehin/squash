import React, { useState, useEffect, useRef } from 'react';
import "./EmailVerification.scss";
import "../Auth/Auth.scss";
import axios from 'axios';
import { Typography } from '../../Components';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const numInputs = 6;
  const [otpValues, setOtpValues] = useState(Array(numInputs).fill(''));
  const inputRefs = useRef([]);
  const [isOtpValuesComplete, setIsOtpValuesComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [error, setError] = useState("");

  useEffect(() => {
    if (timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeRemaining]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, []);

  useEffect(() => {
    if (isOtpValuesComplete) verify();
  }, [isOtpValuesComplete]);

  useEffect(() => {
    setIsOtpValuesComplete(otpValues.every(value => value !== ""));
  }, [otpValues]);

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

  const sendCode = async () => {
    const URL = "http://127.0.0.1:5001/squash-io/us-central1/squash/auth";

    try {
      setOtpValues(Array(numInputs).fill(''));
      inputRefs.current[0].focus();
      setTimeRemaining(30);
      const email = cookies.get('email');
      await axios.post(`${URL}/sendmail`, { email });
    } catch (error) {
      setError(error.response.data.message);
      console.error('Something went wrong!', error);
    }
  }

  const verify = async () => {
    const URL = "http://127.0.0.1:5001/squash-io/us-central1/squash/auth";

    try {
      const otp = parseInt(otpValues.join(""));
      const userId = cookies.get('userId');
      await axios.post(`${URL}/verify`, { otp, userId });
      
      window.location.reload();
    } catch (error) {
      setError(error.response.data.message);
      console.error('Something went wrong!', error);
    }
  }

  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId"),
    cookies.remove("fullName"),
    cookies.remove("username"),
    cookies.remove("hashedPassword"),
    cookies.remove("email");

    window.location.reload();
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
          <form>
            {
              error !== "" &&
              <div className="div-card-auth-content-error">
                  {error}
              </div>
            }
            <div className="div-verification-input-container">
              {
                otpValues.map((value, index) => (
                  <input  className="div-verification-input"
                          key={index}
                          type="text"
                          maxLength="1"
                          value={value}
                          onChange={(e) => handleChange(index, e.target.value)}
                          ref={(element) => (inputRefs.current[index] = element)}
                  />
                ))
              }
            </div>
          </form>
          <div className="div-verification-line-item">
            {
              timeRemaining === 0 ?
              <Typography text="Didn't get code? " onClick={sendCode} linkLabel="Resend" size="small" weight="bolder" /> :
              <Typography text={`Please wait ${timeRemaining} seconds`} size="small" weight="bolder" />
            }
          </div>
          <Typography text="Not your account? " onClick={logout} linkLabel="Logout" size="small" weight="bolder" />
        </div>
      </div>
    </div>
  )
}

export default EmailVerification