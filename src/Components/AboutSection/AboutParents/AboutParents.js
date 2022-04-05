import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutCard from '../AboutCard/AboutCard';
import AboutDetails from '../AboutDetails/AboutDetails';
import ChairmanSpc from '../ChairtmanSpc/ChairmanSpc';
import ManagementTeam from '../ManagmentTeam/ManagementTeam';
import TimeLine from '../TimeLine/TimeLine';

const AboutParents = () => {
    return (
        <div>
            <NavBars/>
            <AboutBanner/>
            <AboutDetails/>
            <AboutCard/>
            <ChairmanSpc/>
            <TimeLine/>
            <ManagementTeam/>
            <Footer/>
        </div>
    );
};

export default AboutParents;