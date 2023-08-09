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
    const [linkLabel, setlinkLabel] = useState(props.linkLabel || null);
    const [margin, setMargin] = useState(props.margin || "0");

    useEffect(() => {
        setSize(size);
        setColor(color);
        setWeight(weight);
        setAlign(align);
        // setText(() => text==="" ? "Text" : props.text);
        setlink(link);
        setlinkLabel(linkLabel);
        setMargin(margin);
    }, []);

    // useEffect(() => {
    //     setText(props.text);
    // }, [props.textState])

    return (
        <div className={`Typography ${color}`} style={{ fontSize: size, fontWeight: weight, textAlign: align, marginBottom: margin + "px" }}>
            {props.text} {link !== null && " "}
            <a className='link' href={link} onClick={() => { props.onClick(); return false; }}>{linkLabel}</a>
        </div>
    )
}

Typography.propTypes = {
    text: PropTypes.string,
    textState: PropTypes.any,
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