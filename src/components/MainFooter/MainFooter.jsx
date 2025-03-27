import React from 'react';
//styles
import "./MainFooter.css"
//assets
import facebookImg from "../../assets/facebook.svg";
import twitterImg from "../../assets/twitter.svg";
import youtubeImg from "../../assets/youtube.svg";
import pinterestImg from "../../assets/pinterest.svg";
import rightArrowImg from "../../assets/rightArrow.svg"
//components
import Logo from '../Logo/Logo';

const copyrightText = "Copyright ©2023 Surya Nursing Home.com. All Rights Reserved";

const MainFooter = () => {
    //variables
    const links = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
    
    //components
    const Icon = ({icon}) => <img src={icon} alt={`${icon} icon`} className='footerIcon' />

    //functions
    const displayLinks = () => {
        return links.map(item => {
            return (
                <a className='footerLink' href='#'>
                    <img src={rightArrowImg} alt='right arrow'/>
                    <span>{item}</span>
                </a>
            )
        })
    }
    return (
        <div className='MainFooter'>
            <div className='mainFooterBody'>
                <div className='footerIconsAndLogo'>
                    <Logo />
                    <div className='footerIconWrapper'>
                        <Icon icon={facebookImg} />
                        <Icon icon={twitterImg} />
                        <Icon icon={youtubeImg} />
                        <Icon icon={pinterestImg} />
                    </div>
                </div>
                <div className='footerLinkWrapper'>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                </div>
            </div>
            <div className='copyright'>
                {copyrightText}
            </div>
        </div>
    );
};

export default MainFooter;