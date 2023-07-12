import React from 'react';
import "./Nav.scss";
import { TextfieldTransparent } from "../../../Components";

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-01'>
            
        </div>
        <div className='nav-02'>
          <TextfieldTransparent width="60%" yTransform="50%" placeholder="Search a message..." />
        </div>
        <div className='nav-03'>
            
        </div>
    </div>
  )
}

export default Nav