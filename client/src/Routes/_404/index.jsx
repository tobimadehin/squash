import React from 'react';
import "./_404.scss";
// import { Nav } from '../../Components';

const _404 = () => {
  return (
    <div className="div-main-404">
      <div className='div-fixed'>
        {/* <Nav />  */}
      </div>
      <div className='div-main-404-content'>
        <div className="div-404">404</div>
        <div className="div-page-not-found">Page not found!</div>
      </div>
    </div>
  )
};

export default _404;
