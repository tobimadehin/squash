import React, { useState, useEffect } from 'react';
import "./Toggle.scss";
import { IoCheckmark } from "react-icons/io5";
import PropTypes from "prop-types";

const Toggle = (props) => {
  const [value, setValue] = useState(false);

  const onClick = () => {
    setValue(!value);
    props.onToggle();
  }

  useEffect(() => {
    setValue(value);
  }, []);

  return (
    <div className='div-toggle'>
      <div className='icon-toggle' onClick={onClick}
      >
        { value && <IoCheckmark /> }
      </div>
    </div>
  )
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
}

export default Toggle