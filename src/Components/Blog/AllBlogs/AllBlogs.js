import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import FbMsgChat from '../../Shared/FbMessengerChat/FbMsgChat';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import './AllBlogs.css'
const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
    const url = 'https://secure-cove-36711.herokuapp.com/blogData';
      fetch(url)
     .then(res=>res.json())
     .then(data=> setBlogs(data))
    },[])
   
    return (
        <div>
            <NavBars/>
             <div className='blog-banner'>   
                  <p>B L O G</p>          
           </div>
           <Container>
            <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
            {
                blogs.map((blog)=><div
                key={blog.id}
                >
                    { console.log(blog)}
                    <Col className="blog-card">
                        <Fade>
                        <Fade top>
                    <Card className='mt-5 blog-card border-0 '>
                        <Card.Img className='blog-card-img' variant="top" src={blog?.imgOne} />
                        <Card.Body>
                        <Card.Text>
                            <p className='text-dark'>{blog?.date}</p>
                        </Card.Text>
                        <div className='text-dark fs-5' style={{fontWeight:'800'}}> <p>{blog?.blogTitle}</p> </div>

                        <Link to={`/blogDetails/${blog._id}`}> 
                            <button className="blog-explore-btn">
                               Explore
                            </button>
                        </Link>
                        </Card.Body>
                        
                    </Card>           
                    </Fade>
                    </Fade>
                    </Col>
                </div>)}
            </Row>
        </Container>


           <Footer/>
           <FbMsgChat/>
        </div>
    );
};

export default AllBlogs;