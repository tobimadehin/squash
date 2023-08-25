import React, { useState, useEffect } from 'react'
import "./EmailVerification.scss"
import "../Auth/Auth.scss"
import { Typography, Textfield } from '../../Components'

const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading);
  }, []);

  const handleSubmit = () => {

  }

  const handleChange = () => {

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
              <div className="div-verification-input">
                <Textfield  name="text"
                            placeholder=" "
                            onChange={handleChange}
                            type="email"
                            disabled={isLoading}
                />
              </div>
              <div className="div-verification-input">
                <Textfield  name="text"
                            placeholder=" "
                            onChange={handleChange}
                            type="email"
                            disabled={isLoading}
                />
              </div>
              <div className="div-verification-input">
                <Textfield  name="text"
                            placeholder=" "
                            onChange={handleChange}
                            type="email"
                            disabled={isLoading}
                />
              </div>
              <div className="div-verification-input">
                <Textfield  name="text"
                            placeholder=" "
                            onChange={handleChange}
                            type="email"
                            disabled={isLoading}
                />
              </div>
              <div className="div-verification-input">
                <Textfield  name="text"
                            placeholder=" "
                            onChange={handleChange}
                            type="email"
                            disabled={isLoading}
                />
              </div>
              <div className="div-verification-input">
                <Textfield  name="text"
                            placeholder=" "
                            onChange={handleChange}
                            type="email"
                            disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification