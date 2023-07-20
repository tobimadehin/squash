import React, { useState, useEffect } from "react";
import { TextfieldLabelled, Toggle, Button, ButtonIcon, Typography, Demarcator } from "../../Components";
import "./Signup.scss";
import { BsGoogle } from "react-icons/bs";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("text");
    const [isSignupPassword, setIsSignPassword] = useState(true);
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameStyle, setUsernameStyle] = useState("visible");
    const [emailStyle, setEmailStyle] = useState("visible");
    const [passwordStyle, setPasswordStyle] = useState("visible");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = event => {
      const inputUsername = event.target.value;
      const isValidUsername = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(inputUsername) && 
                              inputUsername.length >= 2 && 
                              inputUsername.length <= 18;
    
      setUsernameError(!isValidUsername ? "Username can only be 2-18 alpha-numeric characters!" : null);
      setIsUsernameError(!isValidUsername);
      setUsernameStyle(isValidUsername ? "visible" : "error");
      setUsername(inputUsername);   
    }

    const handleEmailChange = event => {
      const inputEmail = event.target.value;
      const isValidEmail = /\S+@\S+\.\S+/.test(inputEmail);

      setEmailError(!isValidEmail ? "Email is invalid" : null);
      setIsEmailError(!isValidEmail);
      setEmailStyle(isValidEmail ? "visible" : "error");
      setEmail(inputEmail);
    };

    const handlePasswordChange = event => {
      const inputPassword = event.target.value;
      const isValidPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,24}$/.test(inputPassword);

      setPasswordError(!isValidPassword ? "Password format is invalid!" : null);
      setIsPasswordError(!isValidPassword);
      setPasswordStyle(isValidPassword ? "visible" : "error");
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
        setIsSignPassword(isPasswordToSet);
    }

    const signUp = () => {
      const isInValidate =
        usernameError ||
        emailError ||
        passwordError ||
        username !== '' ||
        email !== '' ||
        password !== '';
      
      const formData = {
        username: username,
        email: email,
        password: password
      }
      console.log(isInValidate ? formData : "Something went wrong!");
    };

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
                                        onChange={handleUsernameChange}
                                        helper={usernameError}
                                        style={usernameStyle}
                                        hasHelperText={isUsernameError}
                    />
                    <TextfieldLabelled  label="Email" 
                                        placeholder="Enter your email" 
                                        onChange={handleEmailChange}
                                        helper={emailError}
                                        style={emailStyle}
                                        hasHelperText={isEmailError}
                    />
                    <TextfieldLabelled  label="Password" 
                                        placeholder="Enter your password" 
                                        onChange={handlePasswordChange}
                                        helper={passwordError}
                                        style={passwordStyle}
                                        hasHelperText={isPasswordError}
                                        isPassword={isSignupPassword}
                                        type={type}
                    />
                    <Typography text="Forgot password?" />
                    <Toggle label="Show password" onClick={onSetPassword} value={showPassword} />
                    <Button onClick={signUp} 
                            label="Signup" type={2} />
                    <ButtonIcon onClick={signUp} 
                            icon={<BsGoogle />} label="Signup with Google" type={2} />
                    <Demarcator label="Already have an account?" />
                    <Typography text="Click here to" link="/" linkLabel="login" />
                </div>
            </div>
        </div>
    )}

export default Signup;
