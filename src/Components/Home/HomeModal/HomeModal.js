import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import project1 from '../../../asset/project1.jpg'
import project2 from '../../../asset/project2.jpg'
import project3 from '../../../asset/project3.jpg'
import './HomeModal.css';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
Modal.setAppElement('#root')

const HomeModal = () => {
    const [modalAction,setModalAction]=useState(true)
    return (
        <div>
            <Modal
            style={{
            // overlay: {
            //   position: 'fixed',
            //   top: 20,
            //   left: 10,
            //   right: 10,
            //   bottom: 0,
            //   backgroundColor: 'rgba(255, 255, 255, 0.0) !important',
            //   zIndex:'999'
            // },
            // content: {
            //   position: 'absolute',
            //   border: '1px solid #ccc',
            //   background: '#fff',
            //   overflow: 'auto',
            //   WebkitOverflowScrolling: 'touch',
            //   borderRadius: '4px',
            //   outline: 'none',
         
            // }
          }}
           isOpen={modalAction} >
               <button style={{
                   position:'absolute',
                   right:'10px',
                   top:'10px',
                   border:'none',
                   backgroundColor:'#fff',
                   fontSize:'25px',
                   fontWeight:'700'
                   }} onClick={()=>setModalAction(false)}>X</button>
          <div>
             <Container>   
                      <div align="center" className='pb-2'>
                      <h1
                    style={{color:'#003a71',
                            fontSize:'30px',
                            fontWeight:'800',
                            fontFamily:'sofia pro'
                        }}
                    >DOMICILE </h1>
                    <h5 className='text-dark' style={{fontWeight:'800',fontFamily:'sofia pro'}}>FEATURED PROJECTS
                    </h5>
                      </div>
                      
                     
                  <Row xs={1} md={1} lg={3}  className="modal-three-Card">
                  
                      <Col>
                        <Card style={{overflow:'hidden'}}>
                             <div className="slider-card">
                              <img className="card-img-slider home-modal-img" style={{height:'450px'}} src={project1} alt="" />
                              <div className="img-overlay"></div>
                              <div className="slider-text-div">
                                    <div className="mb-4">
                                        <div className="card-name">
                                          <h1 className="card-heading pb-0 mb-0 fs-2">Edison RoseLand</h1>
                                          <h3  className='pb-md-5 pb-xm-0' >Bashundara RA</h3>
                                        </div>
                                          <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum eos repellat nisi mollitia soluta.
                                        </p>
                                        </div>       
                                    
                              </div>
                              <NavLink to={`/details/${'p1'}`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                              </NavLink>
                              </div>
                        </Card>
                      </Col>

                      <Col >
                        <Card style={{overflow:'hidden'}}>
                        <div className="slider-card">
                              <img className="card-img-slider home-modal-img"  style={{height:'450px'}} src={project1} alt="" />
                              <div className="img-overlay"></div>
                              <div className="slider-text-div">
                                    <div className="mb-4">
                                        <div className="card-name">
                                          <h1 className="card-heading pb-0 mb-0 fs-2">Edison RoseLand</h1>
                                          <h3  className='pb-md-5 pb-xm-0' >Bashundara RA</h3>
                                        </div>
                                          <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum eos repellat nisi mollitia soluta.
                                        </p>
                                        </div>       
                                    
                              </div>
                              <NavLink to={`/details/${'p1'}`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                              </NavLink>
                              </div>
                        </Card>
                      </Col>


                      <Col>
                        <Card style={{overflow:'hidden'}}>
                        <div className="slider-card">
                              <img className="card-img-slider home-modal-img" style={{height:'450px'}} src={project1} alt="" />
                              <div className="img-overlay"></div>
                              <div className="slider-text-div">
                                    <div className="mb-3">
                                        <div className="card-name">
                                          <h1 className="card-heading pb-0 mb-0 fs-2">Edison RoseLand</h1>
                                          <h3 className='pb-md-5 pb-xm-0'>Bashundara RA</h3>
                                        </div>
                                          <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum eos repellat nisi mollitia soluta.
                                        </p>
                                        </div>       
                                    
                              </div>
                              <NavLink to={`/details/${'p1'}`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                              </NavLink>
                              </div>
                        
                        </Card>
                      </Col>
                  </Row>
         </Container>
          <div style={{display:'flex',justifyContent:'center'}}>
            <NavLink to='/projectsParents'>
          <button 
         className='modal-allExplore-btn mb-4 mt-5'
        >Expolre Now
          </button>
          </NavLink>
          </div>
         </div>
     
     </Modal>
</div>
    );
};

export default HomeModal;