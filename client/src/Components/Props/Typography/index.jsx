import React, { useState, useEffect } from 'react';
import "./Typography.scss";
import PropTypes from "prop-types";

const Typography = (props) => {
    // const [text, setText] = useState(props.text || "");
    const [size, setSize] = useState(props.size || "medium");
    const [color, setColor] = useState(props.color || "white")
    const [weight, setWeight] = useState(props.weight || "lighter");
    const [align, setAlign] = useState(props.align, "left");
    const [link, setlink] = useState(props.link || "#");
    const [margin, setMargin] = useState(props.margin || "0");

    useEffect(() => {
        setSize(size);
        setColor(color);
        setWeight(weight);
        setAlign(align);
        // setText(() => text==="" ? "Text" : props.text);
        setlink(link);
        setMargin(margin);
    }, []);

    // useEffect(() => {
    //     setText(props.text);
    // }, [props.textState])

    return (
        <div className={`Typography ${color}`} style={{ fontSize: size, fontWeight: weight, textAlign: align, marginBottom: margin + "px" }}>
            {props.text}
            <a className='link' href={link} onClick={() => { props.onClick(); return false; }}>{props.linkLabel}</a>
        </div>
    )
}

Typography.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    weight: PropTypes.string,
    align: PropTypes.string,
    link: PropTypes.string,
    linkLabel: PropTypes.string,
    margin: PropTypes.number,
    onClick: PropTypes.func,
}

export default Typography