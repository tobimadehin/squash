import React from "react";
import "./InputText.scss";
import { Plus, Enter, Textfield } from "../../../Components";

const InputText = (props) => {
    return (
        <div className="div-input-text">
            <div className="div-input-text-box">
                <div className="div-input-text-box-item1">
                    <Plus />
                </div>
                <div className="div-input-text-box-item2">
                    <Textfield  width="100%" 
                                value={props.value} 
                                onChange={props.onChange} 
                                onKeyDown={props.onKeyDown} 
                                placeholder="Send a message..." 
                                transparent={true} 
                    />
                </div>
                <div className="div-input-text-box-item3">
                    <Enter onClick={props.onClick} />
                </div>
            </div>
        </div>
    )}

export default InputText;