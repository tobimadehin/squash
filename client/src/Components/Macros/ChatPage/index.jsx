import React from 'react'
import "./ChatPage.scss"
import { MessagePreview, ChatArea } from "../../"

const ChatPage = () => {
  return (
    <>
        <MessagePreview />
        <ChatArea />
    </>
  )
}

export default ChatPage