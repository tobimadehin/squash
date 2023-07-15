/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import './Main.scss';
import { InputText, Nav, MessageCard } from '../../Components';

const Main = () => {
    const [renderable, renderMessage] = useState([]);
    const [message, setMessage] = useState("");
    
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };
    
    return (
        <div class="div-main">
            <div>
                <Nav /> 
            </div>
            <div className='div-chat-area'>
                {renderable.map(item => (
                    <MessageCard name="Wesley Fox" time={calculateTime()} message={item.text} />
                ))}
                <InputText  onChange={handleInputChange}
                            value={message}
                            onClick={() => {
                                if (message != "") {
                                    setMessage("");
                                    renderMessage([...renderable, {
                                        id: renderable.length,
                                        text: message
                                    }]);
                                }
                            }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' && message != "") {
                                    setMessage("");
                                    renderMessage([...renderable, {
                                        id: renderable.length,
                                        text: message
                                    }]);
                                }
                            }} 
                        />
            </div>
        </div>
    );
}

const calculateTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    const formattedTime = hours + ":" + minutes;
    return formattedTime;
}

export default Main;
