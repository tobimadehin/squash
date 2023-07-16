import React from "react";
import { TextfieldLabelled, Toggle, Button, Typography } from "../../Components";
import "./Login.scss";

const Login = () => {
    return (
        <div className="div-login">
            <div className="div-card-login">
                <div className="div-card-content">
                    <Typography text="LOGIN" size="xx-large" weight="bolder" align="center" />
                    <Typography text="Welcome back to squash!" align="center" />
                    <TextfieldLabelled label="Username" width="100%" placeholder="Enter your username" />
                    <TextfieldLabelled  label="Password" 
                                        width="100%" 
                                        placeholder="Enter your password" 
                                        hasHelperText={true} 
                                        helper="Forgot Password?" 
                    />
                    <Toggle />
                    <Button label="Login" type={2} />
                </div>
            </div>
        </div>
    )}

export default Login;
