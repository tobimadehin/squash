/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Button, ButtonIcon, Typography, Demarcator } from "../../Components";
import AuthFormFields from "./AuthFormFields";
import "./Auth.scss";
import { BsGoogle } from "react-icons/bs";

const cookies = new Cookies();

const Auth = () => {
    const [form, setForm] = useState(userData);
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setIsGoogleAuthLoading] = useState(false);

    useEffect(() => {
        onSetIsLoading();
    }, [isAuthLoading, isGoogleAuthLoading]);

    const onSetIsLoading = () => {
        isAuthLoading ? setIsLoading(true) : setIsLoading(false)
    }

    const onSetIsLogin = () => {
        setIsLogin(!isLogin);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const isValidName = /^[A-Za-z]{1,24}$/.test(form.firstName) && /^[A-Za-z]{1,24}$/.test(form.lastName);
        const isValidEmail = /\S+@\S+\.\S+/.test(form.email);
        const isValidPassword = /^(?=.*\d)(?=.*[A-Za-z]).{6,24}$/.test(form.password);

        if (!isLogin) {
            if (!isValidName) { setError("Name has invalid characters!"); return false; }
            if (!isValidEmail) { setError("Email format is invalid!"); return false; }
            if (!isValidPassword) { setError("Password should be at least 6 characters and contain a number!"); return false; }
            if (form.password !== form.confirmPassword) { setError("Passwords mismatch!"); return false; }
        }
        return true;
    }

    const auth = async () => {
        const URL = "http://127.0.0.1:5001/squash-io/us-central1/squash/auth";
        const { email, username, password } = form;
    
        const requestData = isLogin ? 
            { email, password } :
            {
                fullName: `${form.firstName} ${form.lastName}`,
                email,
                password,
            };
    
        try {
            setError("");
            setIsAuthLoading(true);
            const response = await axios.post(`${URL}/${isLogin ? 'login' : 'signup'}`, requestData);
    
            const { token, userId, fullName, email, hashedPassword } = response.data;
    
            cookies.set('token', token);
            cookies.set('userId', userId);
            cookies.set('hashedPassword', hashedPassword);
    
            if (!isLogin) {
                cookies.set('fullName', fullName);
                cookies.set('email', email);
            }

            window.location.reload();
        } catch (error) {
            setError(error.response.data.message);
            console.error('Error during authentication:', error);
            setIsAuthLoading(false);
            setIsGoogleAuthLoading(false);
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validateForm() ?
        auth() :
        console.log("Something went wrong!", error);
    }

    return (
        <div className="div-auth">
            <div className="div-card-auth">
                <div className="div-card-content">
                    <div className="div-card-auth-content-top">
                        <Typography text={ isLogin ? "Log In" : "Sign Up" } size="xx-large" weight="bolder" align="center" />
                        <Typography text={ isLogin ? "Welcome back to squash" : "Create a squash account" } 
                                    size="small" weight="normal" align="center" 
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        {
                            error != "" &&
                            <div className="div-card-auth-content-error">
                                {error}
                            </div>
                        }
                        {
                            !isLogin &&
                            <AuthFormFields name1="firstName"
                                            label1="First name" 
                                            placeholder1="Enter your first name"
                                            onChange1={handleChange}
                                            name2="lastName"
                                            label2="Last name" 
                                            placeholder2="Enter your last name"
                                            onChange2={handleChange}
                                            formType="dual"
                                            disabled={isLoading}
                            />
                        }
                        <AuthFormFields name="email"
                                        label="Email" 
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        type="email"
                                        disabled={isLoading}
                        />
                        <AuthFormFields name="password"
                                        label="Password" 
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        type="password"
                                        helper={ isLogin ? "" : "Forgot password?" }
                                        disabled={isLoading}
                        />
                        {
                            !isLogin &&
                            <AuthFormFields name="confirmPassword"
                                            label="Confirm password" 
                                            placeholder="Confirm your password"
                                            onChange={handleChange}
                                            type="password"
                                            helper=" "
                                            disabled={isLoading}
                            />
                        }
                        <div className="div-card-auth-content-bottom">
                            <Button onClick={handleSubmit} 
                                    isLoading={isAuthLoading} 
                                    label={ isLogin ? "Log In" : "Sign Up" } 
                                    type={3} 
                            />
                            <Demarcator label="OR" />
                            <Button onClick={() => {}} 
                                    icon={<BsGoogle />} 
                                    isLoading={isGoogleAuthLoading} 
                                    label={ isLogin ? "Log In with Google" : "Sign Up with Google" }  
                                    type={2} 
                            />
                            <Typography text={ isLogin ? "New to squash? " : "Already have an account? " } 
                                        onClick={onSetIsLogin} linkLabel={ isLogin ? "Sign Up" : "Log In" }  
                                        size="small" weight="bolder" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )}

    const userData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

export default Auth;
