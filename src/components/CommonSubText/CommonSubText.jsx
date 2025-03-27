import React from 'react';
//assets
import "./CommonSubText.css";

const CommonSubText = ({text, customClass}) => {
    return (
        <p className={`CommonSubText ${customClass}`}>{text}</p>
    );
};

export default CommonSubText;