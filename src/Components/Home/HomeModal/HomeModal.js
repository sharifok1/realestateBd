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
            overlay: {
              position: 'fixed',
              top: 20,
              left: 10,
              right: 10,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.0) !important',
              zIndex:'999'
            },
            content: {
              position: 'absolute',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
            //   padding: '-20px !important'
            }
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
                    >DOMICILEDBL DB</h1>
                    <h5 className='text-dark' style={{fontWeight:'800',fontFamily:'sofia pro'}}>FEATURED PROJECTS
                    </h5>
                      </div>
                      
                     
                  <Row xs={1} md={1} lg={3}  className="g-4">
                  
                      <Col className='modal-card-col'>
                        <Card style={{overflow:'hidden'}}>
                          <Card.Img 
                          className='modal-image'
                          variant="top" src={project1} />
                           <div className="img-overlay"></div>
                            <div className='modal-text'>
                              <h1>Lorem ipsum dolor</h1> 
                              <p>Lorem ipsum dolor</p>
                            </div>
                            <NavLink to={`/details/p1`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                            </NavLink>
                        </Card>
                      </Col>
                      <Col className='modal-card-col'>
                        <Card style={{overflow:'hidden'}}>
                          <Card.Img 
                          className='modal-image'
                          variant="top" src={project2} />
                            <div className='modal-text'>
                              <h1>Lorem ipsum dolor</h1> 
                              <p>Lorem ipsum dolor</p>
                            </div>
                            <NavLink to={`/details/p2`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                            </NavLink>
                        </Card>
                      </Col>
                      <Col className='modal-card-col'>
                        <Card style={{overflow:'hidden'}}>
                          <Card.Img 
                          className='modal-image'
                          variant="top" src={project3} />
                          
                            <div className='modal-text'>
                              <h1>Lorem ipsum dolor</h1> 
                              <p>Lorem ipsum dolor</p>
                            </div>
                            <NavLink to={`/details/p3`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                            </NavLink>
                        
                        </Card>
                      </Col>
                  </Row>
         </Container>
          <div style={{display:'flex',justifyContent:'center'}}>
          <button 
         className='btn-primary btn btn-primary'
          style={{marginTop:'20px'}}>Expolre Now
          </button>
          </div>
         </div>
     
     </Modal>
</div>
    );
};

export default HomeModal;