
import React from 'react';
//components
import ResultCard from '../ResultCard/ResultCard';
import Button from '../Button/Button';

const SearchPop = props => {
    //props
    const { locations, clickFunction, hospitals, atBookingsPage } = props;
    //functions
    const displayStates = () => {
        if(atBookingsPage){
            if(!hospitals || !hospitals?.length) return null;

            return hospitals.map(item => {
                const { hospitalName, county, city, rating, hospitalType } = item.data;
                const { time, date } = item.dateTime;
                return (
                    <span className='SearchPopItem SearchPopItem-bookings'>
                        <span>{hospitalName}</span>
                        <span className='resultContent-right resultContent-top'>
                            <Button text={time} buttonClass={`smallButton blueButton-outlined`}/>
                            <Button text={date} buttonClass={`smallButton greenButton-outlined`}/>
                        </span>
                    </span>
                )
            });
        }

        if(!locations || !locations?.length) return null;

        return locations.map(item => <span onClick={() =>  clickFunction(item)} className='SearchPopItem'>{item}</span>)
    }
    return (
        <span className='SearchPop'>
            {displayStates()}    
        </span>
    );
};

export default SearchPop;