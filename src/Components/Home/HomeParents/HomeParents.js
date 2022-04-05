import React from 'react';
import NavBars from '../../Shared/NavBars/NavBars';
import About from '../About/About';
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeModal from '../HomeModal/HomeModal';
import Featured from '../Featured/Featured';
import Slogan from '../Slogan/Slogan';
import Footer from '../../Shared/Footer/Footer';

// import Modal from '../Modal/Modal';

const HomeParents = () => {
    return (
        <div>
             <HomeModal/>
            <NavBars></NavBars>
            <HomeSlider/>
            <About/>
             <Featured/>
             <Slogan/>
           
             <Footer/>
            
        </div>
    );
};

export default HomeParents;