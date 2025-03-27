import React from 'react';
//styles of this component are in Navbar.css
//asstes
import sheildIcon from "../../assets/sheildWhite.svg";
import LogoImage from "../../assets/Logo.svg"
//components
import Button from '../Button/Button';

const Logo = ({width}) => {
    return (
        <div className='logo'>
            <img src={LogoImage} width={width} alt='logo image' className='appLogo'/>
            {/* <Button icon={sheildIcon} buttonClass="logoButton"/> */}
            <span className='logoText'>medify</span>
        </div>
    );
};

export default Logo;