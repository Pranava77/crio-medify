import React from 'react';
//styles
import "./Specialization.css"
//assets
import dentistryImage from "../../assets/dentistry.svg";
import primaryCareImage from "../../assets/primaryCare.svg";
import cardiologyImage from "../../assets/cardiology.svg";
import MRIImage from "../../assets/MRI.svg";
import bloodTestImage from "../../assets/bloodTest.svg";
import piscologistImage from "../../assets/piscologist.svg";
import laboratoryImage from "../../assets/laboratory.svg";
import xrayImage from "../../assets/xray.svg";
//components
import Card from '../Card/Card';
import Button from '../Button/Button';
import CommonHeader from '../CommonHeader/CommonHeader';

const Specialization = () => {
    //varaibles
    const data = [
        {text: "Dentistry", image: dentistryImage},
        {text: "Primary Care", image: primaryCareImage},
        {text: "Cardiology", image: cardiologyImage},
        {text: "MRI Resonance", image: MRIImage},
        {text: "Blood Test", image: bloodTestImage},
        {text: "Piscologist", image: piscologistImage},
        {text: "Laboratory", image: laboratoryImage},
        {text: "X-Ray", image: xrayImage},
    ];
    //functions
    const displayCards = () => data.map(item => <Card cardClass="specializationCard" image={item.image} text={item.text} /> );
    return (
        <div className='Specialization'>
            <div className='commonContainer SpecializationBody'>
                <CommonHeader text={"Find by specialisation"} />
                <div className='specializationCardsBody'>
                    {displayCards()}
                </div>
                <Button buttonClass={"largeButton"} text={"view all"}/>
            </div>
        </div>
    );
};

export default Specialization;