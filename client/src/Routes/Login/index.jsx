import React, { useState, useEffect } from "react";
import { TextfieldLabelled, Toggle, Button, Typography, Demarcator } from "../../Components";
import "./Login.scss";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("text");
    const [isLoginPassword, setIsLoginPassword] = useState(true);

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
        setIsLoginPassword(isPasswordToSet);
    }

    useEffect(() => {
        onSetIsPassword(isLoginPassword);
    }, [])

    return (
        <div className="div-login">
            <div className="div-card-login">
                <div className="div-card-content">
                    <Typography text="LOGIN" size="xx-large" weight="bolder" align="center" />
                    <Typography text="Welcome back to squash!" align="center" />
                    <TextfieldLabelled  label="Username" width="100%" placeholder="Enter your username" style="visible" />
                    <TextfieldLabelled  label="Password" 
                                        width="100%" 
                                        placeholder="Enter your password" 
                                        hasHelperText={true}
                                        style="visible" 
                                        helper="Forgot Password?"
                                        isPassword={isLoginPassword}
                                        type={type}
                    />
                    <Typography text="Forgot password?" />
                    <Toggle label="Show password" onClick={onSetPassword} value={showPassword} />
                    <Button label="Login" type={2} />
                    <Demarcator label="Don't have an account?" />
                    <Typography text="Click here to signup" />
                </div>
            </div>
        </div>
    )}

export default Login;
