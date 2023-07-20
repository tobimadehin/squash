import React, { useState, useEffect } from 'react';
import "./Typography.scss";

const Typography = (props) => {
    const [text, setText] = useState(props.text || "Text");
    const [size, setSize] = useState(props.size || "medium");
    const [weight, setWeight] = useState(props.weight || "lighter");
    const [align, setAlign] = useState(props.align, "left");
    const [link, setlink] = useState(props.link || null);
    const [linkLabel, setlinkLabel] = useState(props.linkLabel || null);

    useEffect(() => {
        setSize(size);
        setWeight(weight);
        setAlign(align);
        setText(text);
        setlink(link);
        setlinkLabel(linkLabel);
    }, []);

    return (
        <div className='Typography' style={{ fontSize: size, fontWeight: weight, textAlign: align }}>
            {text} {link !== null && " "}
            <a className='link' href={link}>{linkLabel}</a>
        </div>
    )
}

export default Typography