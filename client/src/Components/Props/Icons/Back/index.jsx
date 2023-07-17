import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Back.scss";
import { IoIosArrowBack } from "react-icons/io";

const Back = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='icon-back'><IoIosArrowBack /></button>
  )
}

export default Back