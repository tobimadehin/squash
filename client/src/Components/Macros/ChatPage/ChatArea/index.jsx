import React, { useState } from 'react'
import "../ChatPage.scss"
import { User, Typography, Options, MessageCard, InputText, ProfileDiv } from "../../../"

const ChatArea = () => {
    const [renderable, renderMessage] = useState([]);
    const [message, setMessage] = useState("");
    const [profileDiv, setProfileDiv] = useState(false);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const onSetProfileDiv = () => {
        setProfileDiv(!profileDiv);
    };

    return (
        <>
            <div className='div-chat-area-col-3'>
                <div className='div-chat-area-col-3-nav'>
                    <div className='div-chat-area-col-3-nav-1'>
                        <User />
                    </div>
                    <div className='div-chat-area-col-3-nav-2'>
                        <div className='div-chat-area-col-3-nav-2-row'>
                            <Typography text="Andy Smith" />
                        </div>
                        <div className='div-chat-area-col-3-nav-2-row'>
                            <Typography text="Coolin' and booted!🖖" size="12px" />
                        </div>
                    </div>
                    <div className='div-chat-area-col-3-nav-1'>
                        <Options onClick={onSetProfileDiv} />
                    </div>
                </div>
                <div className='div-chat-area'>
                    {renderable.map(item => (
                        <MessageCard key={item.id} name="Wesley Fox" time={calculateTime()} message={item.text} align="end" />
                    ))}
                </div>
                <div className='div-input-box'>
                    <div className='div-input-box-padding'>  
                    </div>
                    <div className='div-input-box-ui'>
                        <InputText  onChange={handleInputChange}
                                    value={message}
                                    onClick={() => {
                                        if (message !== "") {
                                            setMessage("");
                                            renderMessage([...renderable, {
                                                id: renderable.length,
                                                text: message
                                            }]);
                                        }
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' && message !== "") {
                                            setMessage("");
                                            renderMessage([...renderable, {
                                                id: renderable.length,
                                                text: message
                                            }]);
                                        }
                                    }} 
                        />
                    </div>
                    <div className='div-input-box-padding'>  
                    </div>
                </div>
            </div>
            { profileDiv && <ProfileDiv /> }
        </>
    )
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

export default ChatArea