import React from 'react';
//styles
import "./RadioButtons.css"

const RadioButtons = () => {
    return (
        <div className='RadioButtons'>
            {/* <form> */}
                <input className='radioButton' type="radio" id="radioButton1" name="radioButton" /> 
                <input className='radioButton' type="radio" id="radioButton2" name="radioButton" />
                <input className='radioButton' type="radio" id="radioButton3" name="radioButton" />
            {/* </form> */}
        </div>
    );
};

export default RadioButtons;