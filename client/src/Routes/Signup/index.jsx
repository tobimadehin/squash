import React, { useState, useEffect } from "react";
import { TextfieldLabelled, Toggle, Button, Typography, Demarcator } from "../../Components";
import "./Signup.scss";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("text");
    const [isSignupPassword, setIsSignPassword] = useState(true);
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [usernameError, setUsernameError] = useState("error message");
    const [usernameStyle, setUsernameStyle] = useState("visible");

    const setPasswordFalse = () => {
        setShowPassword(false);
        setType("password");
    }

    const setPasswordTrue = () => {
        setShowPassword(true);
        setType("text");
    }    

    const onSetPassword = () => {
        showPassword ? setPasswordFalse() : setPasswordTrue()
    } 

    const onSetIsPassword = (isPasswordToSet) => {
        isPasswordToSet ? setPasswordFalse() : setPasswordTrue()
        setIsSignPassword(isPasswordToSet);
    }

    const onSetIsUsernameError = () => {
        let usernameErrorToSet = "Error code " + Math.round(Math.random() * 200);
        setUsernameError(usernameErrorToSet);
        setUsernameStyle("error");
    }

    const onClick = () => {
        setIsUsernameError(true)
        onSetIsUsernameError();
    }

    useEffect(() => {
        onSetIsPassword(isSignupPassword);
    }, []);

    return (
        <div className="div-signup">
            <div className="div-card-signup">
                <div className="div-card-content">
                    <Typography text="SIGN UP" size="xx-large" weight="bolder" align="center" />
                    <Typography text="Create a squash account" align="center" />
                    <TextfieldLabelled  label="Username" 
                                        placeholder="Enter your username"
                                        hasHelperText={isUsernameError}
                                        helper={usernameError}
                                        style={usernameStyle}
                    />
                    <TextfieldLabelled  label="Email" 
                                        placeholder="Enter your email" 
                                        // hasHelperText={true}
                                        helper="Invalid email!"
                                        style="visible"
                    />
                    <TextfieldLabelled  label="Password" 
                                        placeholder="Enter your password" 
                                        // hasHelperText={true} 
                                        helper="Password does not match requirements!"
                                        style="visible"
                                        isPassword={isSignupPassword}
                                        type={type}
                    />
                    <Typography text="Forgot password?" />
                    <Toggle label="Show password" onClick={onSetPassword} value={showPassword} />
                    <Button onClick={onClick} label="Signup" type={2} />
                    <Demarcator label="Already have an account?" />
                    <Typography text="Click here to login" />
                </div>
            </div>
        </div>
    )}

export default Signup;
