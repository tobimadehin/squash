import React, { useState, useEffect } from 'react'
import { Logo, Chat, Call, Calender, Group, Settings, User } from "../../"
import "./Nav.scss";
import PropTypes from "prop-types";

const Nav = (props) => {
  const [page, setPage] = useState("chat");
  const [chatStyle, setChatStyle] = useState("colored");
  const [callStyle, setCallStyle] = useState("transparent");
  const [calenderStyle, setCalenderStyle] = useState("transparent");
  const [groupStyle, setGroupStyle] = useState("transparent");
  const [settingsStyle, setSettingsStyle] = useState("transparent");

  const onSetChat = () => {
      setPage("chat");
      setChatStyle("colored");
      setCallStyle("transparent");
      setCalenderStyle("transparent");
      setGroupStyle("transparent");
      setSettingsStyle("transparent");
  };

  const onSetCall = () => {
      setPage("call");
      setChatStyle("transparent");
      setCallStyle("colored");
      setCalenderStyle("transparent");
      setGroupStyle("transparent");
      setSettingsStyle("transparent");
  };

  const onSetCalender = () => {
      setPage("calender");
      setChatStyle("transparent");
      setCallStyle("transparent");
      setCalenderStyle("colored");
      setGroupStyle("transparent");
      setSettingsStyle("transparent");
  };

  const onSetGroup = () => {
      setPage("group");
      setChatStyle("transparent");
      setCallStyle("transparent");
      setCalenderStyle("transparent");
      setGroupStyle("colored");
      setSettingsStyle("transparent");
  };

  const onSetSettings = () => {
      setPage("settings");
      setChatStyle("transparent");
      setCallStyle("transparent");
      setCalenderStyle("transparent");
      setGroupStyle("transparent");
      setSettingsStyle("colored");
  };

  const onSetPage = () => {
    props.onSetPage(page);
  };

  useEffect(() => {
    onSetPage();
  }, [page]);

  return (
    <div className='div-nav'>
      <div className='div-nav-row-1'>
        <Logo />
      </div>
      <div className='div-nav-row-2'>
          <div className='div-nav-row-2-icon'>
              <Chat onClick={onSetChat} style={chatStyle} />
          </div>
          <div className='div-nav-row-2-icon'>
              <Call onClick={onSetCall} style={callStyle} />
          </div>
          <div className='div-nav-row-2-icon'>
              <Calender onClick={onSetCalender} style={calenderStyle} />
          </div>
          <div className='div-nav-row-2-icon'>
              <Group onClick={onSetGroup} style={groupStyle} />
          </div>
          <div className='div-nav-row-2-icon'>
              <Settings onClick={onSetSettings} style={settingsStyle} />
          </div>
      </div>
      <div className='div-nav-row-3'>
          <User />
      </div>
    </div>
  )
}

Nav.propTypes = {
  onSetPage: PropTypes.func,
}

export default Nav