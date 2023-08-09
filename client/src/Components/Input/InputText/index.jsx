import React from "react";
import "./InputText.scss";
import { Plus, Enter, Textfield } from "../../../Components";
import PropTypes from "prop-types";

const InputText = (props) => {
  return (
    <div className="div-input-text">
      <div className="div-input-text-item1">
        <Plus />
      </div>
      <div className="div-input-text-item2">
        <Textfield
          width="100%"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          placeholder="Send a message..."
          style="transparent"
        />
      </div>
      <div className="div-input-text-item3">
        <Enter onClick={props.onClick} />
      </div>
    </div>
  );
};

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
};

export default InputText;
