import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Slogan.css';
import Map from '../Map/Map';
import Contact from '../Contact/Contact';
import { Fade } from 'react-reveal';

const Slogan = () => {
   
    return (
        <div className='slogan m-0'>
            <Container>
                <Row className='m-0 p-0'>
                    <Col sm={12} md={6}>
                        <Fade>
                        <Fade left>
                        <Container className='text-start  slogan-card m-0'>
                           <div className='slogan-left'>
                           <h4>LANDOWNERS</h4>
                            <h1>BUILD YOUR SANCTUARY</h1>
                            <h1>WITH CREDIBILITY</h1>
                               <hr />
                            <h4>BUYERS</h4>
                            <h1>INVEST FOR A BETTER</h1>
                            <h1>TOMORROW</h1>
                           </div>
                        </Container>
                        </Fade>
                        </Fade>
                    </Col>
                    <Col sm={12} md={6}>
                        
                        <Container>
                       
                           <div className='right-card '>
                           <Fade>
                           <Fade right>
                           <div>
                           <h1 className='text-white text-start'>
                               <span className='coma1'>“</span> 
                                   Not many architects have the luxury to reject significant things.
                               <span className='coma2'>”</span> <br />
                            </h1>
                           <div className='text-start mt-5 pt-3'>
                              <h5>REM KOOLHAAS</h5>
                               <h6>Dutch Architect</h6>
                           </div>
                           </div>
                           </Fade>
                          </Fade>
                           </div>
                          
                        </Container>
                       
                    </Col>
                </Row>
         </Container>

         {/* map// map component */}
         <Map></Map>
         {/* contact component/// */}
        <Container>
        <Contact></Contact>
        </Container>
        </div>
    );
};

export default Slogan;