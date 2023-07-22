import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { _404, Main, Login, Signup } from "../src/Routes";

const App = () => {
    const user = false;

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='*' element={ <_404 /> } />
                    <Route path='/' element={ <Main /> } />
                    <Route path='/login' element={ user ? <Navigate to='/'/> : <Login /> } />
                    <Route path='/signup' element={ <Signup /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App