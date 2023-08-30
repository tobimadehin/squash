import React from 'react'
import "./SettingsPage.scss"
import Cookies from 'universal-cookie';
import { Typography, User, Button, SettingsProfileOptions } from "../../"

const cookies = new Cookies();

const SettingsPage = () => {
  const toggleDarkMode = () => {
    
  }

  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId"),
    cookies.remove("fullName"),
    cookies.remove("username"),
    cookies.remove("hashedPassword"),
    cookies.remove("email");

    window.location.reload();
  }

  return (
    <div className='div-settings'>
      <div className='div-settings-col'>
        <div className='div-settings-row-1'>
          <div className='div-settings-user'>
            <User />
          </div>
          <div className='div-settings-profile'>
            <Typography text="Andy47" size="x-large" weight="bolder" />
            <Typography text="Andy Smith" size="small" weight="bolder" />
            <Typography text="Coolin' and booted!🖖" size="small" />
          </div>
          <div className='div-settings-button'>
            <Button label="Edit profile" type={3} />
          </div>
        </div>
        <div className='div-settings-row-2'>
          <div className='div-settings-row-2-row'>
            <Typography text="Profile settings" size="medium" weight="bolder" />
          </div>
          <SettingsProfileOptions label="USERNAME" value="andy47" placeholder="Edit username" />
          <SettingsProfileOptions label="FULL NAME" value="Andy Smith" editType="dual" placeholder1="Edit firstname" placeholder2="Edit lastname" />
          <SettingsProfileOptions label="EMAIL" value="name@email.com" placeholder="Edit email" />
          <SettingsProfileOptions label="PHONE" value="+234 (987) 654-3210" placeholder="Edit phone" />
          <div className='div-settings-row-2-row'>
            <Typography text="Security Settings" size="medium" weight="bolder" />
          </div>
          <SettingsProfileOptions label="PASSWORD" type="no-value" />
          <SettingsProfileOptions label="SMS 2FA" type="no-value" controller="toggle" onToggle={() => {}} />
          <div className='div-settings-row-2-row'>
            <Typography text="Personalization Settings" size="medium" weight="bolder" />
          </div>
          <SettingsProfileOptions label="DARK MODE" type="no-value" controller="toggle" onToggle={toggleDarkMode} />
          <div className='div-settings-button-col'>
            <div className='div-settings-button'>
              <Button label="Logout" type={1} onClick={logout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage