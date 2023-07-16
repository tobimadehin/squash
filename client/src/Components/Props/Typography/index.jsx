import React, { useState, useEffect } from 'react';
import "./Typography.scss";

const Typography = (props) => {
    const [text, setText] = useState(props.text || "Text");
    const [size, setSize] = useState(props.size || "medium");
    const [weight, setWeight] = useState(props.weight || "lighter");
    const [align, setAlign] = useState(props.align, "left");

    useEffect(() => {
        setSize(size);
        setWeight(weight);
        setAlign(align);
        setText(text);
    }, []);

    return (
        <div className='Typography' style={{ fontSize: size, fontWeight: weight, textAlign: align }}>{text}</div>
    )
}

export default Typography