import React, { useState, useEffect } from 'react';
import './Main.scss';
import { ChatPage, CallPage, CalenderPage, GroupPage, SettingsPage, Nav } from '../../Components';
import { EmailVerification } from "../";
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [page, setPage] = useState("");

    useEffect(() => {
        checkVerificationStatus();
    }, []);

    const checkVerificationStatus = async () => {
        const URL = "http://127.0.0.1:5001/squash-io/us-central1/squash/auth";

        try {
            const email = cookies.get('email');

            const response = await axios.post(`${URL}/checkverificationstatus`, { email });
            const { isEmailVerified } = response.data;
            setIsEmailVerified(isEmailVerified);

            if (!isEmailVerified) await axios.post(`${URL}/sendmail`, { email });
            
            setIsLoading(false);
        } catch (error) {
            console.error('Something went wrong!', error);
        }
    }

    return (
        isLoading ? 
        <div className="div-main">
            <span className="loader"></span>
        </div> :
            isEmailVerified ?
            <div className="div-main">
                <Nav onSetPage={setPage} />
                { page === "chat" && <ChatPage /> }
                { page === "call" && <CallPage /> }
                { page === "calender" && <CalenderPage /> }
                { page === "group" && <GroupPage /> }
                { page === "settings" && <SettingsPage /> }
            </div> :
            <EmailVerification />
    );
}

export default Main;
