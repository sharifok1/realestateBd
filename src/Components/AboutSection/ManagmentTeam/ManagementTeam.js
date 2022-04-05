import React from 'react';
import { Container } from 'react-bootstrap';
import chairman from '../../../asset/chairman.jpg'
import operationOff from '../../../asset/operationOfficer.jpg'
import businessOff from '../../../asset/businessOfficer.jpg'
import './ManagementTeam.css'
import { Link } from 'react-router-dom';
const ManagementTeam = () => {
    return (
        <div className='management-team'>
          <Container>
                <div>
                    <p
                    className='pb-2 text-secondary'
                    >T E A M</p>
                    <p
                    style={{
                        color:'#0055a4',
                        fontSize:'25px',
                        fontWeight:'800',
                        paddingBottom:'50px'
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
                <Link to='/ourTeam'> <button className="about-more-btn mt-5"> More About Our Team </button></Link>
          </Container>
        </div>
    );
};

export default ManagementTeam;