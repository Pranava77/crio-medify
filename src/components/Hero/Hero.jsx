import React from 'react';
//styles
import "./Hero.css"
//assets
import heroImage from "../../assets/heroImage.png";
import blueSheildIcon from "../../assets/sheildBlue.svg";
import Button from '../Button/Button';
import SearchComp from '../SearchComp/SearchComp';
import CommonSubText from '../CommonSubText/CommonSubText';
import { Link } from 'react-router-dom';

const tagLine = "Skip the travel! Find Online";
const subText = "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.";
const Hero = () => {
    return (
        <div className='Hero'>
            <div className='commonContainer heroBody'>
                <div className='heroTexts'>
                    <h4 className='heroTagline'>{tagLine}</h4>
                    <h1 className='heroHeadline'>
                        Medical <span>Centers</span>
                    </h1>
                    <p className='heroSubtext'>{subText}</p>
                    {/* <CommonSubText text={subText} /> */}
                    <Link to="/find"><Button text="find centers" buttonClass="largeButton heroButton"/></Link>
                </div>
                <div className='heroImgDiv'>
                    <Button text="Regular Checkup" buttonClass="largeButton whiteButton heroImgButton" icon={blueSheildIcon} />
                    <img src={heroImage} alt='doctors' className='heroImage'/>
                </div>
                <SearchComp />
            </div>
        </div>
    );
};

export default Hero;