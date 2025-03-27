import React from 'react';
//styles
import "./Card.css";

const Card = props => {
    //props
    const { image, text, customStyle, cardClass } = props;
    return (
        <div className={`Card ${customStyle} ${cardClass}`}> 
            <img src={image} className='cardImage'/>
            <span className='cardText'>{text}</span>
        </div>
    );
};

export default Card;