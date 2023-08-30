import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { _404, Main, Auth } from "../src/Routes";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const api_key = process.env.REACT_APP_STREAM_API_KEY;
const authToken = cookies.get("token");
const client = StreamChat.getInstance(api_key);

if (authToken) {
    client.connectUser({
        id: cookies.get("userId"),
        fullName: cookies.get("fullName"),
        name: cookies.get("username"),
        hashedPassword: cookies.get("hashedPassword"),
    }, authToken)
}

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='*' element={ <_404 /> } />
                    <Route path='/' element={ authToken ? <Main /> : <Auth /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App