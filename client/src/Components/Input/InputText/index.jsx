import React from "react";
import "./InputText.scss";
import { Plus, Enter, TextfieldTransparent } from "../../../Components";

const InputText = () => {
    return (
        <div class="div-input-text">
            <div class="div-input-text-box">
                <div className="div-input-text-box-item1">
                    <Plus />
                </div>
                <div className="div-input-text-box-item2">
                    <TextfieldTransparent width="100%" />
                </div>
                <div className="div-input-text-box-item3">
                    <Enter />
                </div>
            </div>
        </div>
    )}

export default InputText;