import React from 'react';
//styles
import "./CommonSuperText.css"

const CommonSuperText = ({text, transform}) => {
    return (
        <div className={`CommonSuperText ${transform}`}>{text}</div>
    );
};

export default CommonSuperText;