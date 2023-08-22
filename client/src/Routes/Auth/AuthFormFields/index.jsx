import React, { useState, useEffect } from 'react'
import { Textfield, Typography } from '../../../Components'
import PropTypes from "prop-types"

const AuthFormFields = (props) => {
    const [formType, setTypeType] = useState(props.formType || "single");
    const [type, setType] = useState(props.type || "text");
    
    useEffect(() => {
        setTypeType(formType);
        setType(type);
    }, []);

    return (
        <div className='div-auth-form-field'>
            {
                formType === "single" &&
                <>
                    <div className='div-auth-form-field-row'>
                        <Typography text={props.label} size="small" weight="bolder" />
                        { type === "password" && <Typography text=" " linkLabel={props.helper} size="small" weight="bolder" /> }
                    </div>
                    <div className='div-auth-form-field-row'>
                        <Textfield
                            name={props.name}
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                            style={props.style}
                            type={props.type}
                            value={props.value}
                        />
                    </div>
                </>
            }
            {
                formType === "dual" &&
                <>
                    <div className='div-auth-form-field-dual'>
                        <div className='div-auth-form-field-dual-1'>
                            <div className='div-auth-form-field-row'>
                                <Typography text={props.label1} size="small" weight="bolder" />
                            </div>
                            <div className='div-auth-form-field-row'>
                                <Textfield
                                    name={props.name1}
                                    placeholder={props.placeholder1}
                                    onChange={props.onChange1}
                                    style={props.style}
                                    value1={props.value1}
                                />
                            </div>
                        </div>
                        <div className='div-auth-form-field-dual-2'>
                            <div className='div-auth-form-field-row'>
                                <Typography text={props.label2} size="small" weight="bolder" />
                            </div>
                            <div className='div-auth-form-field-row'>
                                <Textfield
                                    name={props.name2}
                                    placeholder={props.placeholder2}
                                    onChange={props.onChange2}
                                    style={props.style}
                                    value2={props.value2}
                                />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

AuthFormFields.propTypes = {
    label: PropTypes.string,
    helper: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.string,
    formType: PropTypes.string,
    type: PropTypes.string,
    label1: PropTypes.string,
    placeholder1: PropTypes.string,
    onChange1: PropTypes.func,
    label2: PropTypes.string,
    placeholder2: PropTypes.string,
    onChange2: PropTypes.func,
    value: PropTypes.string,
    value1: PropTypes.string,
    value2: PropTypes.string,
    name: PropTypes.string,
    name1: PropTypes.string,
    name2: PropTypes.string,
}

export default AuthFormFields