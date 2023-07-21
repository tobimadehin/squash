import React, { useState, useEffect } from 'react';
import "./Demarcator.scss";
import PropTypes from "prop-types";

const Demarcator = (props) => {
    const [label, setLabel] = useState(props.label || "label");

    useEffect(() => {
        setLabel(label);
    }, []);

    return (
        <div className='div-demarcator'>
            <svg width="540" height="3" viewBox="0 0 5905 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="5905" y2="1.5" stroke="white" strokeWidth="3"/>
            </svg>
            <div className='div-demarcator-label'>{label}</div>
            <svg width="540" height="3" viewBox="0 0 5905 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="5905" y2="1.5" stroke="white" strokeWidth="3"/>
            </svg>
        </div>
    )
}

Demarcator.propTypes = {
    label: PropTypes.string,
}

export default Demarcator