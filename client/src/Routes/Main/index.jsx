import React from 'react';
import './Main.scss';
import { ChatPage, Nav } from '../../Components';

const Main = () => {
    return (
        <div className="div-main">
            <Nav />
            <ChatPage />
        </div>
    );
}

export default Main;
