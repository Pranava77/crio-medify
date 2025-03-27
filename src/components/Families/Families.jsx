import React from 'react';
//styles
import "./Families.css";
//assets
import familyHeartIcon from "../../assets/familyHeart.svg";
import familyHospitalIcon from "../../assets/familyHospital.svg";
import familyMedicalIcon from "../../assets/familyMedical.svg";
import familyDoctorIcon from "../../assets/familyDoctor.svg";
//components
import CommonSuperText from '../CommonSuperText/CommonSuperText';
import CommonHeader from '../CommonHeader/CommonHeader';
import CommonSubText from '../CommonSubText/CommonSubText';
import FamilyCard from '../FamilyCard/FamilyCard';

const superText = "CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.";
const header = "Our Families";
const subText = "We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.";


const Families = () => {
    
    return (
        <div className='Families'>
            <div className='commonContainer FamiliesBody'>
                <div className='familiesTexts'>
                    <CommonSuperText text={superText} transform="uppercase" />
                    <CommonHeader text={header} />
                    <CommonSubText text={subText} />
                </div>
                <div className='familesCardsWrapper'>
                    <div className='familyCardLeft familyCardHalf'>
                        <FamilyCard icon={familyHeartIcon} cardNo={"5000+"} text={"Happy Patients"} />
                        <FamilyCard icon={familyHospitalIcon} cardNo={"200+"} text={"Hospitals"} />
                    </div>
                    <div className='familyCardRight familyCardHalf'>
                        <FamilyCard icon={familyMedicalIcon} cardNo={"1000+"} text={"Laboratories"} />
                        <FamilyCard icon={familyDoctorIcon} cardNo={"700+"} text={"Expert Doctors"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Families;