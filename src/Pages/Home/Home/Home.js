import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import Features from '../Features/Features';
import Services from '../Services/Services ';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <BrowseProducts></BrowseProducts>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;