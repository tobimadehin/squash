import React, { useState } from "react";
import { Button, ButtonIcon, Typography, Demarcator } from "../../Components";
import AuthFormFields from "./AuthFormFields";
import "./Auth.scss";
import { BsGoogle } from "react-icons/bs";

const Auth = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const onSetIsLogin = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="div-auth">
            <div className="div-card-auth">
                <div className="div-card-content">
                    <div className="div-card-auth-content-top">
                      <Typography text={ isLogin ? "Log In" : "Sign Up" } size="xx-large" weight="bolder" align="center" />
                      <Typography text={ isLogin ? "Welcome back to squash" : "Create a squash account" }  size="small" weight="normal" align="center" />
                    </div>
                    {
                        !isLogin &&
                        <AuthFormFields label1="First name" 
                                    placeholder1="Enter your first name"
                                    onChange1={() => {}}
                                    label2="Last name" 
                                    placeholder2="Enter your last name"
                                    onChange2={() => {}}
                                    formType="dual"
                        />
                    }
                    <AuthFormFields label="Username" 
                                    placeholder="Enter your username"
                                    onChange={() => {}}
                    />
                    <AuthFormFields label="Password" 
                                    placeholder="Enter your password"
                                    onChange={() => {}}
                                    type="password"
                                    helper={ isLogin ? "" : "Forgot password?" }
                    />
                    {
                        !isLogin &&
                        <AuthFormFields label="Confirm password" 
                                    placeholder="Confirm your password"
                                    onChange={() => {}}
                                    helper=" "
                                    type="password"
                        />
                    }
                    <div className="div-card-auth-content-bottom">
                      <Button onClick={() => {}} label={ isLogin ? "Log In" : "Sign Up" }  type={3} />
                      <Demarcator label="OR" />
                      <ButtonIcon onClick={() => {}} icon={<BsGoogle />} label={ isLogin ? "Log In with Google" : "Sign Up with Google" }  type={2} />
                      <Typography text={ isLogin ? "New to squash?" : "Already have an account?" } textState={isLogin} link="#" onClick={onSetIsLogin} linkLabel={ isLogin ? "Sign Up" : "Log In" }  size="small" weight="bolder" />
                    </div>
                </div>
            </div>
        </div>
    )}

export default Auth;
