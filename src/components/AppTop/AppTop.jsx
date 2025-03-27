import React from 'react';
//styles
import "./AppTop.css";

const text = " The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness."
const AppTop = () => {
    return (
        <div className='AppTop'>
            <marquee direction="left" className='appTopSlide'>{text}  </marquee>  
        </div>
    );
};

export default AppTop;