import React, { useState, useEffect } from 'react';
import "./Typography.scss";
import PropTypes from "prop-types";

const Typography = (props) => {
    const [text, setText] = useState(props.text || "Text");
    const [size, setSize] = useState(props.size || "medium");
    const [weight, setWeight] = useState(props.weight || "lighter");
    const [align, setAlign] = useState(props.align, "left");
    const [link, setlink] = useState(props.link || null);
    const [linkLabel, setlinkLabel] = useState(props.linkLabel || null);
    const [margin, setMargin] = useState(props.margin || "0");

    useEffect(() => {
        setSize(size);
        setWeight(weight);
        setAlign(align);
        setText(text);
        setlink(link);
        setlinkLabel(linkLabel);
        setMargin(margin);
    }, []);

    return (
        <div className='Typography' style={{ fontSize: size, fontWeight: weight, textAlign: align, marginBottom: margin + "px" }}>
            {text} {link !== null && " "}
            <a className='link' href={link}>{linkLabel}</a>
        </div>
    )
}

Typography.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string,
    align: PropTypes.string,
    link: PropTypes.string,
    linkLabel: PropTypes.string,
    margin: PropTypes.number,
}

export default Typography