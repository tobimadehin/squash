/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import './App.scss';
import img from "./door-story.jpg";
import MessageCard from './Components/MessageCard';

const App = () => {
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
        <div class="nav">
            <div class="nav-left">
                <div class="div-images">
                    <img src={img} alt="door-story" />
                    <img src={img} alt="door-story" />
                    <img src={img} alt="door-story" />
                    <img src={img} alt="door-story" />
                </div>
            </div>
            <div class="nav-top">
                <div class="nav-top-left">
                    <a href=""><i class="bi bi-arrow-left"></i></a>
                    <img src={img} alt="door-story" />
                    <span>Axton</span>
                </div>
                <div class="nav-top-middle">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search a message" />
                </div>  
                <div class="nav-top-right">
                    <a href=""><i class="bi bi-info-circle"></i></a>
                </div>  
            </div> 
            <div class="div-main">
            <div class="div-text">
                {renderable.map(item => (
                    <MessageCard name="Wesley Fox" time={calculateTime()} message={item.text} />
                ))}
            </div>
                <div class="text-input">
                    <button class="button-message-file"><i class="bi bi-paperclip"></i></button>
                    <input class="text-input-field" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                        type="text" 
                        placeholder="Write something..." />
                    <button class="button-message"
                        onClick={() => {
                            setMessage("");
                            renderMessage([{
                                id: renderable.length,
                                text: message
                            }, ...renderable]);
                        }} >
                        <i class="bi bi-send-fill"></i>
                    </button>
                </div>
            </div>
            <div class="nav-right">
                <div class="div-axton-members">
                <img src={img} alt="door-story" />
                    <span class="span-axton">AXTON</span>
                    <span class="span-members">8 of 20 members</span>
                    <div class="div-icons">
                        <i class="bi bi-box-arrow-right"></i>
                        <i class="bi bi-search"></i>
                        <i class="bi bi-three-dots"></i>
                    </div>

                </div>
                <div class="div-members">
                    <span>MEMBERS</span>
                    <div class="div-story">
                        <span class="span-story"><img src={img} alt="door-story" /></span>
                        <span class="span-name">susan</span>
                    </div>
                    <div class="div-story">
                        <span class="span-story"><img src={img} alt="door-story" /></span>
                        <span class="span-name">zlikovichoner</span>
                    </div>
                    <div class="div-story">
                        <span class="span-story"><img src={img} alt="door-story" /></span>
                        <span class="span-name">olamide</span>
                    </div>
                    <div class="div-story">
                        <span class="span-story"><img src={img} alt="door-story" /></span>
                        <span class="span-name">Ibrahimovic</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
