import React, { useState } from 'react';
import "./Options.scss";
import { RxDotsVertical } from "react-icons/rx";
import { PiCaretDoubleRight } from "react-icons/pi";
import PropTypes from "prop-types";

const Options = (props) => {
  const [isContract, setIsContract] = useState(true);

  const handleClick = () => {
    setIsContract(!isContract);
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className='icon-options' onClick={handleClick}>
      {isContract ? <RxDotsVertical /> : <PiCaretDoubleRight />}
    </button>
  );
};

Options.propTypes = {
  onClick: PropTypes.func,
};

export default Options;
