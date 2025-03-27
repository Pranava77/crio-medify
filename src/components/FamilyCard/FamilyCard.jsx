import React from 'react';
//styles
import "./FamilyCard.css";
//components
import CommonHeader from '../CommonHeader/CommonHeader';
import CommonSubText from '../CommonSubText/CommonSubText';

const FamilyCard = ({icon, cardNo, text}) => {
    return (
        <div className='FamilyCard'>
            <img src={icon} alt=""/>
            <CommonHeader text={cardNo} />
            <CommonSubText text={text} />
        </div>
    );
};

export default FamilyCard;