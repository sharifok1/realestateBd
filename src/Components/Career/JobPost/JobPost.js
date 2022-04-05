import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './JobPost.css'
const JobPost = () => {

    const [jobPost, setJobPost] = useState([]);
    useEffect(()=>{
    const url = 'jobPost.json';
      fetch(url)
     .then(res=>res.json())
     .then(data=> setJobPost(data))
    },[])
console.log(jobPost)
    return (
        <div>
            <div className='careerBanner'>   
                  <p> JOIN <br />
                  WITH US</p>          
           </div>
            <div 
            className='py-5 '
            style={{
                backgroundColor:'rgb(240,240,240)'
            }}>
                <Container className='pt-5'>
                    <div className='pe-md-5 me-md-5'>
                    <h1 style={{
                        color:'#003a71',
                        fontSize:'40px',
                        marginBottom:'40px',
                        fontWeight:'800'
                    }}>WHY JOIN US</h1>

                    <p className='text-dark'>
                    We want to serve the purpose of living a luxurious and comfortable life, offering impeccable housing facilities that connotes magnificence, elegance and comfort. We believe, we would not be able to achieve this without a dynamic and collaborative workforce. Hence, we strongly promote a healthy work environment and aim to attract and select a diverse team of individuals; establishing equal opportunity for all, irrespective of race, age, gender, class, ethnicity, disability, location and religion.

                    Therefore at Edison, you will not only be able to discover a career of your passion, but also be able to collaborate and learn with and from a team of diverse and proficient individuals.
                    </p>
                    </div>
                </Container>
            </div>
            

            {/*------------------------------- job post card */}
            <div className='job-card-section py-5'>
              <Container>
              <div>
                <h1 style={{
                        color:'#003a71',
                        fontSize:'40px',
                        fontWeight:'800'
                    }}>AVAILABLE JOBS</h1>
                </div>
                <div>
                <Row xs={1} md={2} lg={3} className="g-5 m-0 mb-5 mt-md-5">
                      {
                jobPost.map((post)=><div
                key={post.id}
                >
                       <Col>
                        <div className='text-dark job-card'>
                               <h4>{post?.jobTitle}</h4>
                               <h6>Vacancy : {post?.vacancy}</h6>
                               <h6>Employment Status:{post?.employmentStatus}</h6>
                               <h6>Experience: {post?.exp}</h6>
                               <Link to={`/jobDetails/${post.id}`}> 
                               <button className='job-details-btn'>Details</button>
                               </Link>
                        </div>
                        </Col>
                    </div>)}
                 </Row>
                </div>
              </Container>

            </div>
         
        </div>
    );
};

export default JobPost;