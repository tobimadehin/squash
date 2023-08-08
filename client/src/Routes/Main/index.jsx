import React, { useState } from 'react';
import './Main.scss';
import { ChatPage, CallPage, CalenderPage, GroupPage, SettingsPage, Nav } from '../../Components';

const Main = () => {
    const [page, setPage] = useState("");

    return (
        <div className="div-main">
            <Nav onSetPage={setPage} />
            { page === "chat" && <ChatPage /> }
            { page === "call" && <CallPage /> }
            { page === "calender" && <CalenderPage /> }
            { page === "group" && <GroupPage /> }
            { page === "settings" && <SettingsPage /> }
        </div>
    );
}

export default Main;
