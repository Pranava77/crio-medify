
import React, { useContext, useEffect } from 'react';
//styles
import "./Bookings.css";
//contexts
import { BookingsContext } from '../../contexts/AllContexts';
//components
import ResultCard from '../ResultCard/ResultCard';

const Bookings = () => {
    //contexts
    const [bookings, setBookings] = useContext(BookingsContext);
    //functions
    const displayCards = () => {
        if(bookings?.length == 0) return null;

        return bookings.map(item => {
            const { hospitalName, county, city, rating, hospitalType } = item.data;
            return (
                <ResultCard 
                    hospitalName={hospitalName}
                    county={county}
                    city={city}
                    rating={rating}
                    hospitalType={hospitalType}
                    atBookingsPage={true}
                    bookedDate={item.dateTime.date}
                    bookedTime={item.dateTime.time}
                />
            )
        });
    }

    //get bookings from local
    useEffect(() => {
        console.log("initial load...")
        const localBookings = localStorage.getItem("bookings");
        if(localBookings){
            setBookings(JSON.parse(localBookings));
        }
    }, []);
    
    return (
        <div className='SearchResults' >
            <div className='commonContainer resultsBody'>
                <div className='resultsHead'>
                    <h5></h5>
                    <p>
                        {/* <img src={checkIcon} alt='check icon' className='checkIcon'/>
                        <span>{subText}</span> */}
                    </p>
                </div>
                <div className='cardAndSensodyne'>
                    <aside className='resultCardsArray'>
                        {/* <ResultCard /> */}
                        {displayCards()}
                    </aside>
                    <aside className='sensodyne'></aside>
                </div>
            </div>
        </div>
    );
};

export default Bookings;