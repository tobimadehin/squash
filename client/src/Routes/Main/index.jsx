import React, { useState } from 'react';
import './Main.scss';
import { InputText, MessageCard } from '../../Components';
import { 
    Logo, 
    Chat, 
    Call, 
    Calender, 
    Group,
    Settings, 
    User,
    Options,
    Typography,
    Textfield,
    NewChat,
    MessagePreviewCard
} from '../../Components';

const Main = () => {
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
        <div className="div-main">
            <div className='div-main-col-1'>
                <div className='div-main-col-1-row-1'>
                    <Logo />
                </div>
                <div className='div-main-col-1-row-2'>
                    <div className='div-main-col-1-row-2-icon'>
                        <Chat />
                    </div>
                    <div className='div-main-col-1-row-2-icon'>
                        <Call />
                    </div>
                    <div className='div-main-col-1-row-2-icon'>
                        <Calender />
                    </div>
                    <div className='div-main-col-1-row-2-icon'>
                        <Group />
                    </div>
                    <div className='div-main-col-1-row-2-icon'>
                        <Settings />
                    </div>
                </div>
                <div className='div-main-col-1-row-3'>
                    <User />
                </div>
            </div>
            <div className='div-main-col-2'>
                <div className='div-main-col-2-row-1'>
                    <div className='div-main-col-2-row-1-row'>
                        <Typography size="x-large" text="Chats" />
                        <NewChat />
                    </div>
                    <div className='div-main-col-2-row-1-row'>
                        <Textfield placeholder="Search..." style="black" />
                    </div>
                </div>
                <div className='div-main-col-2-row-2'>
                    <MessagePreviewCard name="Andy Smith" 
                                        message="This is the message preview" 
                                        time="09:00" 
                                        unread="5" 
                    />
                    <MessagePreviewCard name="Andy Smith" 
                                        message="This is the message preview" 
                                        time="09:00" 
                                        unread="5" 
                    />
                    <MessagePreviewCard name="Andy Smith" 
                                        message="This is the message preview" 
                                        time="09:00" 
                                        unread="5" 
                    />
                    <MessagePreviewCard name="Andy Smith" 
                                        message="This is the message preview" 
                                        time="09:00" 
                                        unread="5" 
                    />
                </div>
            </div>
            <div className='div-main-col-3'>
                <div className='div-main-col-3-nav'>
                    <div className='div-main-col-3-nav-1'>
                        <User />
                    </div>
                    <div className='div-main-col-3-nav-2'>
                        <div className='div-main-col-3-nav-2-row'>
                            <Typography text="Andy Smith" />
                        </div>
                        <div className='div-main-col-3-nav-2-row'>
                            <Typography text="Coolin' and booted!🖖" size="12px" />
                        </div>
                    </div>
                    <div className='div-main-col-3-nav-1'>
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
                                        if (message != "") {
                                            setMessage("");
                                            renderMessage([...renderable, {
                                                id: renderable.length,
                                                text: message
                                            }]);
                                        }
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key == 'Enter' && message != "") {
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
            {
                profileDiv &&
                <div className='div-main-col-4'>
                    <div className='div-main-col-4-profile'>
                        <div className='div-main-col-4-profile-photo'>
                            <User />
                        </div>
                        <Typography text="Andy Smith" size="18px" />
                        <Typography text="Coolin' and booted!🖖" size="12px" />
                    </div>
                    <div className='div-main-col-4-profile-info'>
                        <div className='div-profile-info'>
                            
                        </div>
                    </div>
                </div>
            }
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
