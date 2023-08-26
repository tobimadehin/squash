import React, { useState, useRef } from 'react';

function OtpForm() {
  const numInputs = 6; // Number of OTP digits
  const [otpValues, setOtpValues] = useState(Array(numInputs).fill(''));
  const inputRefs = useRef([]); // To hold references to input elements

  // Function to handle input change
  const handleInputChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move focus to the next input
      if (index < numInputs - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <div>
      <h2>Enter OTP:</h2>
      <div>
        {otpValues.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={(el) => (inputRefs.current[index] = el)} // Save reference to input element
          />
        ))}
      </div>
    </div>
  );
}

export default OtpForm;
