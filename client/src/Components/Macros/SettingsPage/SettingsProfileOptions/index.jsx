import React, { useState, useEffect } from 'react'
import { Typography, Button, Toggle, Textfield } from "../../../"
import "../SettingsPage.scss"
import PropTypes from "prop-types"

const SettingsProfileOptions = (props) => {
    const [label, setLabel] = useState(props.label || "label");
    const [value, setValue] = useState(props.value || "value");
    const [controller, setController] = useState(props.controller || "button");
    const [type, setType] = useState(props.type || "value");
    const [editType, setEditType] = useState(props.editType || "single");
    
    const [editMode, setEditMode] = useState(false);
    const [buttonLabel, setButtonlabel] = useState("Edit");

    const editValue = () => {
        setEditMode(!editMode);
        console.log(editMode);
        editMode ? setButtonlabel("Edit") : setButtonlabel("Save");
    }

    useEffect(() => {
        setLabel(label);
        setValue(value);
        setController(controller);
        setEditMode(editMode);
        setType(type);
        setEditType(editType);
    }, []);

    return (
        <div className='div-settings-row-2-row'>
            <div className={`div-settings-row-2-row-col div-settings-row-2-row-col-${type}`}>
                {
                    editMode ?
                    <>
                        { editType === "single" && <Textfield placeholder={props.placeholder} /> }
                        { editType === "dual" && 
                            <div className='div-settings-dual'>
                                <div className='div-settings-dual-input-1'>
                                    <Textfield placeholder={props.placeholder1} />
                                </div> 
                                <div className='div-settings-dual-input-2'>
                                    <Textfield placeholder={props.placeholder2} />
                                </div> 
                            </div> 
                        }
                    </> :
                    <>
                        <Typography text={label} size="small" weight="bolder" />
                        { type === "value" && <Typography text={value} size="small" weight="lighter" /> }
                    </>
                }
            </div>
            <div className='div-settings-button'>
                { controller === "button" && <Button onClick={editValue} label={buttonLabel} labelChange={editMode} type={3} /> }
                { controller === "toggle" && <Toggle onToggle={() => props.onToggle()}/> }
            </div>
        </div>
    )
}

SettingsProfileOptions.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    controller: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    placeholder1: PropTypes.string,
    placeholder2: PropTypes.string,
    editType: PropTypes.string,
    onToggle: PropTypes.func,
}

export default SettingsProfileOptions