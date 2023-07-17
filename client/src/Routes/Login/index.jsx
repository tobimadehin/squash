import React, { useState, useEffect } from "react";
import { TextfieldLabelled, Toggle, Button, Typography } from "../../Components";
import "./Login.scss";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("text");
    const [isLoginPassword, setIsLoginPassword] = useState(true);

    const onSetPassword = () => {
        if (showPassword) {
            setShowPassword(false);
            setType("password");
        }

        else {
            setShowPassword(true);
            setType("text");
        }
    } 

    const onSetIsPassword = (isPasswordToSet) => {
        if (isPasswordToSet) {
            setShowPassword(false);
            setType("password");
        }  
        else {
            setShowPassword(true);
            setType("text");
        } 
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
                    <TextfieldLabelled  label="Username" width="100%" placeholder="Enter your username" />
                    <TextfieldLabelled  label="Password" 
                                        width="100%" 
                                        placeholder="Enter your password" 
                                        hasHelperText={true} 
                                        helper="Forgot Password?"
                                        isPassword={isLoginPassword}
                                        type={type}
                    />
                    <Toggle label="Show password" onClick={onSetPassword} value={showPassword} />
                    <Button label="Login" type={2} />
                    <Typography />
                </div>
            </div>
        </div>
    )}

export default Login;
