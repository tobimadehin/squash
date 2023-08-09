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
                            placeholder={props.placeholder}
                            onChange={() => props.onChange()}
                            style={props.style}
                            type={props.type}
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
                                    placeholder={props.placeholder1}
                                    onChange={() => props.onChange1()}
                                    style={props.style}
                                />
                            </div>
                        </div>
                        <div className='div-auth-form-field-dual-2'>
                            <div className='div-auth-form-field-row'>
                                <Typography text={props.label2} size="small" weight="bolder" />
                            </div>
                            <div className='div-auth-form-field-row'>
                                <Textfield
                                    placeholder={props.placeholder2}
                                    onChange={() => props.onChange2()}
                                    style={props.style}
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
    label: PropTypes.label,
    helper: PropTypes.helper,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.string,
    formType: PropTypes.string,
    type: PropTypes.string,
    label1: PropTypes.label,
    placeholder1: PropTypes.string,
    onChange1: PropTypes.func,
    label2: PropTypes.label,
    placeholder2: PropTypes.string,
    onChange2: PropTypes.func,
}

export default AuthFormFields