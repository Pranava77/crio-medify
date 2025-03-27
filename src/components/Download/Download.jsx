import React from 'react';
//styles
import "./Download.css";
//assetes
import mobileImg from "../../assets/mobiles.svg";
import arrowImg from "../../assets/curvedArrow.svg";
import googlePlayImg from "../../assets/googlePlay.svg";
import appStoreImg from "../../assets/appStore.svg";
import CommonHeader from '../CommonHeader/CommonHeader';
import CommonSubText from '../CommonSubText/CommonSubText';
import Button from '../Button/Button';


const Download = () => {
    //functions
    const handleSubmit = event => {
        event.preventDefault();
    }
    
    return (
        <div className='Download'>
            <div className='DownloadBody'>
                <div className='mobilesWrapper'>
                    <img src={mobileImg} alt='mobile Image' />
                </div>
                <div className='downloadTexts'>
                    <CommonHeader text={"Download the Medify App"} />
                    <CommonSubText text="Get the link to download the app" />
                    <form onSubmit={handleSubmit} className='downloadForm'>
                        <img src={arrowImg} alt='curved arrow' className='curvedArrow' />
                        <div className='downloadFormInput'>
                            <span >+91</span>
                            <input placeholder='Enter phone number' />
                        </div>
                        <Button clickFuntion={handleSubmit} text={"Send SMS"} buttonClass={"largeButton"} />
                    </form>
                    <div className='downloadButtons'>
                        <img src={googlePlayImg} alt={'google Play Image'} />
                        <img src={appStoreImg} alt={'app Store Image'} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Download;