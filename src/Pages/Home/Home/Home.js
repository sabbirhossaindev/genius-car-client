import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
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
        </div>
    );
};

export default Home;