import React from 'react';
//styles
import "./CommonHeader.css";

const CommonHeader = ({text}) => {
    return (
        <h3 className='CommonHeader'>{text}</h3>
    );
};

export default CommonHeader;