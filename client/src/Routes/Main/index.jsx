/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import './Main.scss';
import { InputText, Nav } from '../../Components';

const Main = () => {
    const [renderable, renderMessage] = useState([]);
    const [message, setMessage] = useState("");

    const calculateTime = () => {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        const formattedTime = hours + ":" + minutes + "pm";
        return formattedTime;
    }

    return (
        <div class="div-main">
            <div>
                <Nav /> 
            </div>
            <div className='div-chat-area'>
                <InputText />
            </div>
        </div>
    );
}

export default Main;
