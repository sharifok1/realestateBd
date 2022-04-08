import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import teamBanner from '../../../asset/ourTeam.jpg'
import chairman from '../../../asset/chairman.jpg'
import operationOff from '../../../asset/operationOfficer.jpg'
import businessOff from '../../../asset/businessOfficer.jpg'
import fullTeam from '../../../asset/fullTeam.jpg'
import './OurTeam.css'
import NavBars from '../../Shared/NavBars/NavBars';
import FbMsgChat from '../../Shared/FbMessengerChat/FbMsgChat';
const OurTeam = () => {
    return (
        <div>
            <NavBars/>
           <div className='team-banner'>   
                   <img style={{width:'100%',height:'100%'}} src={teamBanner} alt="" />
                  <p>TEAM</p>          
           </div>

          <Container>
                <div className='py-5'>
                <div className='p-2'>
                    <p
                    style={{
                        color:'#0055a4',
                        fontSize:'25px',
                        fontWeight:'800',
                        paddingTop:'50px'
                    }}
                    >MANAGEMENT TEAM</p>
                </div>
                <div className='managing-team-profile'>
                        <div className='porfile-card'>
                            <img className='img-fluid profile-img' src={chairman} alt="" />
                           <div className='designation'>
                           <h3>AMINUR RASHID</h3>
                            <p>Chairman</p>
                           </div>
                        </div>
                        <div className='porfile-card'>
                            <img className='img-fluid profile-img' src={operationOff} alt="" />
                           <div  className='designation'>
                           <h3>SHAEDUL Islam</h3>
                            <p>Chif Operating Officer</p>
                           </div>
                        </div>
                        <div className='porfile-card'>
                            <img className='img-fluid profile-img' src={businessOff} alt="" />
                           <div  className='designation'>
                           <h3>AHMED PASHA</h3>
                            <p>Chief Business Officer</p>
                           </div>
                        </div>
                </div>
                </div>
                <div>
                <div className='p-2'>
                    <p
                    style={{
                        color:'#0055a4',
                        fontSize:'25px',
                        fontWeight:'800',
                        paddingTop:'50px'
                    }}
                    >DREAM TEAM</p>
                </div>
                <img className='img-fluid pb-5' src={fullTeam} alt="" />
                </div>
          </Container>
           <Footer></Footer>
           <FbMsgChat/>
        </div>
    );
};

export default OurTeam;