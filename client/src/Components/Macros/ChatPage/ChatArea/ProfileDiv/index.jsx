import React from 'react'
import { User, Typography } from "../../../../"
import "../../ChatPage.scss"

const ProfileDiv = () => {
  return (
    <div className='div-profile-col-4'>
        <div className='div-profile-col-4-profile'>
            <div className='div-profile-col-4-profile-photo'>
                <User />
            </div>
            <Typography text="Andy Smith" size="18px" />
            <Typography text="Coolin' and booted!🖖" size="12px" />
        </div>
        <div className='div-profile-col-4-profile-info'>
            <div className='div-profile-info'>
                
            </div>
        </div>
    </div>
  )
}

export default ProfileDiv