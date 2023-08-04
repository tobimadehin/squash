import React, { useState } from 'react';
import "./ContractExpand.scss";
import { PiCaretDoubleLeft, PiCaretDoubleRight } from "react-icons/pi";
import PropTypes from "prop-types";

const ContractExpand = (props) => {
  const [isContract, setIsContract] = useState(true);

  const handleClick = () => {
    setIsContract(!isContract);
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button onClick={handleClick} className='icon-contract-expand'>
      { isContract ? <PiCaretDoubleLeft /> : <PiCaretDoubleRight /> }
    </button>
  )
}

ContractExpand.propTypes = {
  onClick: PropTypes.func,
}

export default ContractExpand