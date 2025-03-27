import React, { useContext } from 'react';
//styles
import "./SearchResults.css";
//assets
import checkIcon from "../../assets/checkBadge.svg"
//components
import CommonSubText from "../CommonSubText/CommonSubText";
import ResultCard from '../ResultCard/ResultCard';
//contexts
import { FoundHospitalsContext } from '../../contexts/AllContexts';

const headline0 = "Search with State and City name for Hospitals above"
const headline = "medical centers available in";
const subText = "Book appointments with minimum wait-time & verified doctor details";
const SearchResults = () => {
    
    //context
    const [foundHospitals, setFoundHospitals] = useContext(FoundHospitalsContext);
    //functions
    const displayCards = () => {
        if(!foundHospitals) return null;
        if(foundHospitals?.hospitals?.length == 0) return null;

        return foundHospitals.hospitals.map(item => {
            // console.log(item["Hospital Name"])
            // console.log(item["County Name"])
            // console.log(item["City"])
            // console.log(item["Hospital overall rating"])
            return (
                <ResultCard 
                    hospitalName={item["Hospital Name"]}
                    county={item["County Name"]}
                    city={item["City"]}
                    rating={item["Hospital overall rating"]}
                    hospitalType={item["Hospital Type"]}
                />
            )
        });
    }
    return (
        <div className='SearchResults' >
            <div className='commonContainer resultsBody'>
                <div className='resultsHead'>
                    <h5>{foundHospitals.noSearchYet ? headline0 : `${foundHospitals?.hospitals?.length} medical centers available in ${foundHospitals?.stateName}`}</h5>
                    <p>
                        <img src={checkIcon} alt='check icon' className='checkIcon'/>
                        <span>{subText}</span>
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

export default SearchResults;