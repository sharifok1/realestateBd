import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Fade } from 'react-reveal';

import './Contact.css'
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
           <Row xs={1} md={2} className="g-4 m-0">
          
            <Col>
            <Fade>
                    <Fade left>
                <Card>
                   
                  <div className='contact-booking-from'>
                      <h1 className='meeting-heading'>SCHEDULE A MEETING</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <div className='home-contack'>
                                <input className='home-contact-input'  {...register("Name")} placeholder="Full Name *" required />
                                <input className='home-contact-input'  {...register("PhoneNum")} placeholder="Phone Number*" required />
                                <input className='home-contact-input'  {...register("email")} placeholder="Email Adress"/>

                                    
                                <select className='home-contact-input'   {...register("time")} placeholder='Select Time'>
                                        <option value="Select Time">Select Time</option>
                                        <option value="10 AM">10 AM</option>
                                        <option value="12 PM">12 PM</option>
                                        <option value="2 PM">2 PM</option>
                                        <option value="4 PM">4 PM</option>
                                        <option value="6 PM">6 PM</option>
                                        
                                </select>
                                <input className='home-contact-button custom-btn-overlay' type="submit" />
                                
                           </div>
                        </form>
                  </div>
                </Card>
                </Fade>
                </Fade>
            </Col>
            <Col>
                   <Fade>
                    <Fade right>
                <Card className='booking-baackground'>
                   {/* <img src="https://edisonrealestatebd.com/themes/cms/assets/images/static/appointment.jpg" alt="" /> */}
                   <div className='counter-wraper'>
                      <div style={{
                          textAlign:'start'
                      }}>
                      <h6 style={{
                          color:'#555',
                          fontWeight:'600',
                          fontSize:'20px',
                         
                      }}>BOOK AN APPOINTMENT</h6>
                       <h1
                       className='text-start'
                        style={{
                            fontSize:'40px',
                            fontWeight:'800',
                            textAlign:'start ! important'
                        }}
                       >AVAILABLE <br /> APARTMENTS <br /> LIST</h1>
                      </div>
                      
                      <div className='count-work'>
                      <div>
                           <h1 style={{fontSize:'50px', fontWeight:'800'}}>8</h1>
                           <h5>Residential</h5>
                       </div>
                       <div>
                           <h1 style={{fontSize:'50px', fontWeight:'800'}}>1</h1>
                           <h5>Commercial</h5>
                       </div>
                       <hr />
                      </div>
                      
                   </div>
                </Card>
                </Fade>
                </Fade>
            </Col>
          
            </Row>
        </div>
    );
};

export default Contact;