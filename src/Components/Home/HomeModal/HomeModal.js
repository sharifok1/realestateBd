import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import project1 from '../../../asset/project1.jpg';
import './HomeModal.css';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
Modal.setAppElement('#root')


const HomeModal = () => {
    const [modalAction,setModalAction]=useState(true)
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
    const url = 'https://secure-cove-36711.herokuapp.com/projects';
      fetch(url)
     .then(res=>res.json())
     .then(data=>setProjects(data))
    },[]);
    console.log(projects)
    
    return (
        <div>
            <Modal
            
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
                  {
                    projects?.slice(0,3).map((project)=><div
                    key={project._id}
                    >
                     <Col>
                        <Card style={{overflow:'hidden'}}>
                             <div className="slider-card">
                              <img className="card-img-slider home-modal-img" style={{height:'450px'}} src={project?.projectImage} alt="" />
                              <div className="img-overlay"></div>
                              <div className="slider-text-div">
                                    <div className="mb-4">
                                        <div className="card-name">
                                          <h1 className="card-heading pb-0 mb-0 fs-2">{project?.projectName}</h1>
                                          <h3  className='pb-md-0 pb-xm-0' >{project?.location}</h3>
                                        </div>
                                          <p>
                                            {project?.description.slice(0,120)}...
                                        </p>
                                        </div>       
                                    
                              </div>
                              <NavLink to={`/details/${project._id}`}>
                              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
                              </NavLink>
                              </div>
                        </Card>
                      </Col>

                    </div>)}
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