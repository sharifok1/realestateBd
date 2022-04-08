import React, { useEffect, useState } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";
import FbMsgChat from "../../Shared/FbMessengerChat/FbMsgChat";
import Footer from "../../Shared/Footer/Footer";
import './AllProjects.css'

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
    const url = 'projects.json';
      fetch(url)
     .then(res=>res.json())
     .then(data=> setProjects(data))
    },[])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
       <div>
            <div className="project-search-field">
           <Container>
           <form onChange={handleSubmit(onSubmit)}>
               <div className="field-wraper">
               <select className="allProjects-search-field" {...register("category")}>
                    <option value="All">All</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                </select>
                <select className="allProjects-search-field" {...register("type")}>
                    <option value="All">Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Comemercial">Comemercial</option>
                    
                </select>
                <select className="allProjects-search-field" {...register("location")}>
                    <option value="All">location</option>
                    <option value="Bashundhara R/A">Bashundhara R/A</option>
                    <option value="Tejgaon">Tejgaon</option>
                    <option value="Khilgaon">Khilgaon</option>
                    <option value="Bashundhara">Bashundhara</option>
                </select>
               </div>
            </form>
           </Container>
        </div>

        {/* Projects//// */}

        <div
        style={{
            backgroundColor:'#eee',
            padding:'100px 0px'
        }}
        >
        <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
        {
            projects.map((project)=><div
            key={project.id}
           
            >
                 <Col className="slider-card" >
                            <img
                             className="slider-card-img img-fluid" 
                             src={project.projectImage} alt="" />
                            <div className="allproject-img-overlay"></div>
                                <div className="slider-text-div">
                                    <div className="mb-4">
                                    <div className="card-name">
                                            <h1 className="card-heading">{project.projectName}</h1>
                                            <h3 >{project.location}</h3>
                                            </div>
                                            <p
                                            style={{color:'#eee'}}
                                            >{project.description.slice(0,150)} . . .</p>
                                    </div>                          
                                </div>   
                     <Link to={`/details/${project.id}`}> <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary">Explore</button></Link>
                </Col>
            </div>)}
            </Row>
        </Container>
        </div>
        <Footer></Footer>
        <FbMsgChat/>
       </div>
    );
};

export default AllProjects;