import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import './AboutCard.css'
const AboutCard = () => {
    return (
        <div className='about-card' >
          <Container>
                <div className='about-left-right-card-wraper'  >
                   
                    <div className='about-card-pair'>
                    <Fade>
                    <Fade left>
                        <p className='card-small'>PURPOSE</p>
                        <p>
                        TO IMPROVE THE STANDARD OF LIVING OF OUR CUSTOMERS AND MAKE THEM HAPPY. 
                        </p>
                        </Fade>
                       </Fade>
                    </div>
                    
                    <div className='about-card-pair'>
                    <Fade>
                    <Fade right>
                    <p className='card-small'>VISION</p>
                        <p>
                        TO BECOME THE MOST TRUSTED AND RESPECTED REAL ESTATE COMPANY IN BANGLADESH.
                        </p>
                        </Fade>
                       </Fade>
                    </div>

                </div>
                <div className='long-card-wrapper' >
                    <div>
                    <p className='card-small'> <strong>OUR VALUES</strong> </p>
                    <div className='text-list'>
                        <p>Integrity</p>
                        <p>Respectful and Long Term Partnership with Supplier</p>
                        <p>Customer Satisfaction</p>
                        <p>Open and Transparent Culture</p>
                        <p>Engaging and Growing Employee</p>
                    </div>
                    </div>
                </div>
          </Container>
        </div>
    );
};

export default AboutCard;