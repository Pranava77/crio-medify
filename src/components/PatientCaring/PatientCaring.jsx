import React from 'react';
//styles
import "./PatientCaring.css";
//asstes
import pateint1 from "../../assets/pateint1.png";
import pateint2 from "../../assets/pateint2.png";
import blueTick from "../../assets/blueTick.svg";
import phoneIcon from "../../assets/phone.svg";
//components
import Button from '../Button/Button';
import CommonSubText from '../CommonSubText/CommonSubText';
import CommonSuperText from '../CommonSuperText/CommonSuperText';


const superText = "HELPING PATIENTS FROM AROUND THE GLOBE!!";
const subText = "Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.";
const note1 = "Stay Updated About Your Health"
const note2 = "Check Your Results Online"
const note3 = "Manage Your Appointments"
const PatientCaring = () => {
    return (
        <div className='PatientCaring'>
            <div className='commonContainer PatientCaringBody'>
                <div className='patientImgDiv patientCaringImgDiv'>
                    <div className='pateintCareImage pateintCareImage1'></div>
                    <div className='pateintCareImage pateintCareImage2'></div>
                    <Button text="Free Consultation" buttonClass="largeButton whiteButton pateintCareButton heroImgButton" icon={phoneIcon} />
                </div>
                <div className='patientCaringTexts'>
                    {/* <h4 className='heroTagline patientCaringTagline'>{superText}</h4> */}
                    <CommonSuperText text={superText} />
                    <h1 className='heroHeadline patientCaringHeadLine'>
                        Patient <span>Caring</span>
                    </h1>
                    {/* <p className='heroSubtext patientCaringSubtext'>{subText}</p> */}
                    <CommonSubText text={subText} customClass={"patientCaringSubtext"} />
                    <div className='noteList'>
                        <div className='noteListItem'><img src={blueTick} /><span>{note1}</span></div>
                        <div className='noteListItem'><img src={blueTick} /><span>{note2}</span></div>
                        <div className='noteListItem'><img src={blueTick} /><span>{note3}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientCaring;