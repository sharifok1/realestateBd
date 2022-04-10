import React from "react";
// Import Swiper React components

// import required modules

import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import ProjectSlider from "../../Shared/Slider/ProjectSlider";
import './Featured.css'


const Featured = () => {
    return (
        <div className='featurs'>
           <Container>
              <div className='text-start px-3'>
                <Fade left>
                    <p className="about-sub-title ">FEATURED PROJECTS</p>
                    </Fade>
                      <Fade left>
                      <div>
                      <h1 
                      className="animate__rollIn"
                      style={{color:'#003a71',fontWeight:'800',}}>
                      BESPOKE ENCLAVES WITH FINESSE <br />
                        IN ARCHITECTURE AND DESIGN
                      </h1>
                      </div>
                  </Fade>
             </div>
 
 {/* ===========================Slider//// */}
               <ProjectSlider></ProjectSlider>
           </Container>
        </div>
    );
};

export default Featured;