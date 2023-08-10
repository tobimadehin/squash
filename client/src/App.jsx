import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { _404, Main, Auth } from "../src/Routes";

const App = () => {
  const user = true;

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='*' element={ <_404 /> } />
                    <Route path='/' element={ user ? <Main /> : <Auth /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App