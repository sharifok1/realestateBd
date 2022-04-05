import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import wonlanded from '../../../asset/serviceLand.JPG'
import wonlandedGrap from '../../../asset/wonlandGrap.jpg'
import './OwnedLand.css'
import { Container } from 'react-bootstrap';
const OwnedLand = () => {
    return (
        <div>
             <NavBars/>
             <div className='team-banner'>   
                   <img style={{width:'100%',height:'100%'}} src={wonlanded} alt="" />
                  <p>OWNED LAND</p>          
           </div>
           <div className='wonland-section'>
           <Container>
                <div className='wonland-wraper'>
                    <div className='left'>
                        <img className='img-fluid' src={wonlandedGrap} alt="" />
                    </div>
                    <div className='right'>
                        <p style={{color:'#111'}}>
                        Enjoy living in the sheltered warmth of architectural beauty, that transcends simple luxury, aesthetically built with expertise and elegance in Edison’s own land. Here, you get to experience a comfortable and relaxed living environment which you have dreamed of for all your life. <br />

                        We offer you residential and commercial spaces at premium price points on our own properties which makes way for a safe environment for investment. With Edison, you do not have to worry about your investment going in vain as we ensure optimum security and maintain confidentiality. 
                        </p>
                    </div>
                </div>
           </Container>
           </div>
            <Footer/>
        </div>
    );
};

export default OwnedLand;