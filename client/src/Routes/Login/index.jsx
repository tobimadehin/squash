import React, { useState, useEffect } from "react";
import { TextfieldLabelled, Toggle, Button, ButtonIcon, Typography, Demarcator } from "../../Components";
import "./Login.scss";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("text");
    const [isLoginPassword, setIsLoginPassword] = useState(true);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [passwordStyle, setPasswordStyle] = useState("visible");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = event => {
        const inputUsername = event.target.value;
        setUsername(inputUsername);   
    }
  
    const handlePasswordChange = event => {
        const inputPassword = event.target.value;
        setPassword(inputPassword); 
    };

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

    const login = () => {
        const isInValidate = true;
        const formData = {
            username: username,
            password: password
        }
        setPasswordError(!isInValidate ? "Username or password is invalid!" : null);
        setIsPasswordError(!isInValidate);
        setPasswordStyle(isInValidate ? "visible" : "error");
        console.log(isInValidate ? formData : "Something went wrong!");
    }

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    return (
        <div className="div-login">
            <div className="div-card-login">
                <div className="div-card-content">
                    <Typography text="LOGIN" size="xx-large" weight="bolder" align="center" />
                    <Typography text="Welcome back to squash!" align="center" />
                    <TextfieldLabelled  label="Username" 
                                        width="100%" 
                                        placeholder="Enter your username" 
                                        style="visible"
                                        onChange={handleUsernameChange}
                    />
                    <TextfieldLabelled  label="Password" 
                                        placeholder="Enter your password" 
                                        onChange={handlePasswordChange}
                                        helper={passwordError}
                                        style={passwordStyle}
                                        hasHelperText={isPasswordError}
                                        isPassword={isLoginPassword}
                                        type={type}
                    />
                    <Typography text="Forgot password?" />
                    <Toggle label="Show password" onClick={onSetPassword} value={showPassword} />
                    <Button onClick={login} 
                            label="Login" type={2} />
                    <ButtonIcon onClick={google} 
                            icon={<BsGoogle />} label="Login with Google" type={2} />
                    <Demarcator label="Don't have an account?" />
                    <Typography text="Click here to" link="/signup" linkLabel="signup"/>
                </div>
            </div>
        </div>
    )}

export default Login;
