import React from 'react'
import { MessagePreviewCard, Typography, NewChat, Textfield } from "../../../"
import "../ChatPage.scss"

const MessagePreview = () => {
  return (
    <div className='div-chat-page-col'>
      <div className='div-chat-page-col-row-1'>
        <div className='div-chat-page-col-row-1-row'>
          <Typography size="x-large" text="Chats" />
          <NewChat />
        </div>
        <div className='div-chat-page-col-row-1-row'>
          <Textfield placeholder="Search..." style="black" />
        </div>
      </div>
      <div className='div-chat-page-col-row-2'>
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
  )
}

export default MessagePreview