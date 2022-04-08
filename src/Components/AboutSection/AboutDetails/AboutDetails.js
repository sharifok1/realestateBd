import React from 'react';
import { Card, CardGroup, Container, Modal } from 'react-bootstrap';
import './AboutDetails.css';
import videoBeg from '../../../asset/video-beg.png'
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
const AboutDetails = () => {
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
      
        return (
          <Modal  
            {...props}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className='p-0'>
            {/* <video className='bg-transparent' 
              style={{width:'100%', height:'100%'}}
                autoPlay
                controls
             >
            <source src="https://youtu.be/oodStbP77Qk" 
            />
          </video> */}
         <iframe width="560" height="315" src="https://www.youtube.com/embed/uySn1BZiWWs?start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
            </Modal.Body>
          </Modal>
        );
      }

    return (
        <div style={{backgroundColor:'#eee',padding:'40px 0'}}>
           <Container >
           <CardGroup >
                <Card className='border-0 pt-5' style={{backgroundColor:'#eee'}}>
                    <Card.Body>
                    <Card.Title>
                      <Fade>
                        <Fade left>
                        <h1
                        style={{
                            color:'#003a71',
                            fontWeight:'800',
                            textAlign:'left'
                        }}
                        >WHO <br /> WE ARE</h1>
                        </Fade>
                        </Fade>
                    </Card.Title>
                    <Card.Text className='text-dark fs-6 pe-2 pt-5'>
                   <strong>Domiciled EBL BD </strong> <br /> 
                   DomiciledEBL BD was founded in 2009 with the aim of touching and enhancing all angles of life for the consumers with influential brands, reliable products and consistent services. 
                   <br />
                   <br />

                   <strong>Domiciled EBL BD Real state</strong> <br />
                   DomiciledEBL BD ventured into the real estate sector in 2015 with its “dream team” dedicated to merge value and innovation in the budding real estate sector of Bangladesh. With the primary aim to fulfill client satisfaction through total quality control, design excellence and experience, Edison Real Estate provides state-of-the art modern technology and latest building practices as compared to global standards.
                    </Card.Text>
                    <Link to='/'> <button className="about-more-btn"> Know More </button></Link>
                    </Card.Body>
                    
                </Card>
                <Card className='border-0 pt-5' style={{backgroundColor:'#eee'}}>
                    <Card.Body >
                        <div>
                            <img
                            className='img-fluid py-md-5 bg-dark'
                            style={{
                                height:'500px',
                                position:'relative'
                            }}
                             src={videoBeg} alt="" />
                             <button className='play-btn'
                             onClick={() => setModalShow(true)}
                             ><i class="fa-solid fa-play"></i></button>
                           
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </Card.Body>
                </Card>
                
             </CardGroup>
           </Container>
        </div>
    );
};

export default AboutDetails;