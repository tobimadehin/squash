import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { _404, Main, Login, Signup } from "../src/Routes";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
          fetch("http://localhost:5000/auth/login/success", {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          })
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
              setUser(resObject.user);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getUser();
      }, []);

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='*' element={ <_404 /> } />
                    <Route path='/' element={ user ? <Main /> : <Login /> } />
                    <Route path='/login' element={ user ? <Navigate to='/'/> : <Login /> } />
                    <Route path='/signup' element={ <Signup /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App