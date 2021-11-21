import React from 'react';
import Counts from '../../Components/Counts/Counts';
import Info from '../../Components/Info/Info';
import WhyUs from '../../Components/Why Us/WhyUs';
import "./Home.css"

const Home = () => {
    return (
        <>
            <Info/>
            <WhyUs/>
            <Counts/>
        </>
    )
}

export default Home
