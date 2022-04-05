import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import NavBars from '../../Shared/NavBars/NavBars';
import './jobDetails.css'
const JobDetails = () => {

    const [details, setDetails] = useState([]);
    useEffect(()=>{
    const url = '../jobPost.json';
      fetch(url)
     .then(res=>res.json())
     .then(data=> setDetails(data))
    },[])
    const {jobId} = useParams()
   
       const fullJob = details?.find((jobDetails)=>jobDetails.id === jobId);
      console.log(fullJob);

    return (
        <div>
            <NavBars/>
            <Container className='py-5 my-5 job-description pe-md-5'>
                <div>
                    <h1>{fullJob?.jobTitle}</h1>
                </div>
                <div className='text-dark pe-md-5 me-md-5'>
                    <h6> Vacancy <br /> {fullJob?.vacancy}</h6> <br /> <br />
                  
                    <h6>Job Context</h6>
                    <p>{fullJob?.jobContext}</p> <br />
                    <h6>Job Responsibilities:</h6>
                    <p>{fullJob?.jobResponsibilities}</p> <br />
                    <h6>Requirments</h6> 
                    <p>{fullJob?.requirments}</p> <br /><br />

                    <div><p>Employment Status : {fullJob?.employmentStatus}</p></div>
                    <div><p>Workplace : {fullJob?.WorkPlace}</p></div>
                    <div><p>Salary : {fullJob?.salary} </p></div> <br />

                    <h6>Compensation & Other benefits :</h6>
                    <p>{fullJob?.benifits}</p> <br /> <br />
                    <h6>Deadline : {fullJob?.deadline} </h6>
                    <Link to='/career'> <button className="about-more-btn">Apply Now</button></Link>
                </div>
            </Container>
        </div>
    );
};

export default JobDetails;