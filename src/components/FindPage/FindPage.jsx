import React from 'react';
//components
import SearchResults from '../SearchResults/SearchResults';
import FAQ from '../FAQ/FAQ';
import AppTop from '../AppTop/AppTop';
import Navbar from '../Navbar/Navbar';

const FindPage = () => {
    return (
        <>
            <AppTop />  
            <Navbar atFindPage={true} backColor="whiteBack" />

            <SearchResults />

            <FAQ />
        </>
    );
};

export default FindPage;