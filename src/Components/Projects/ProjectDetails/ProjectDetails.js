import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

import { Link, NavLink, useParams } from 'react-router-dom';
import FbMsgChat from '../../Shared/FbMessengerChat/FbMsgChat';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import ProjectSlider from '../../Shared/Slider/ProjectSlider';
import MapSection from '../MapSection/MapSection';
import SingleProjectsSlider from '../SingleProjectsSlider/SingleProjectsSlider';
import './ProjectDetails.css'

const ProjectDetails = () => {
 const [details, setDetails] = useState([]);
 useEffect(()=>{
 const url = '../projects.json';
   fetch(url)
  .then(res=>res.json())
  .then(data=> setDetails(data))
 },[])
 

    const {detailsId} = useParams()

    const projectId = details?.find((projectDetals)=>projectDetals.id === detailsId);
   console.log(projectId);
  


    return (
        <div>
           <NavBars></NavBars>
           <div className='details-wraper'>
                <div className='details-left'>
                <SingleProjectsSlider details={projectId}/>
                </div>
                <div className='details-right'>
                    <div className='project-overView'>
                        <p><Link to='/projectsParents'>Projects</Link> <i class="fa-solid fa-caret-right"></i> Ongoing </p>
                        <h1>{projectId?.projectName}</h1>
                        <h6>{projectId?.subTitle}</h6> <br />
                        <hr /> <br />
                        <p> <i class="fa-solid fa-location-dot"></i> {projectId?.fullLocation}</p> <br />
                        <hr />
                        <h3>Overview</h3>
                        <p>
                            {projectId?.description}
                        </p> <br />
                        <p>For Apartment Tour- <NavLink to="/projectsParents">click here</NavLink> </p>
                    </div>
                    <div className='progress-wraper'>
                        <h1>PROJECT PROGRESSES</h1>
                        <div className='progress-point'>
                            <span>
                                    <i className="fa-solid fa-circle text-success"></i>  Start 
                            </span>
                            <span> 
                                    <i className="fa-solid fa-circle text-success"></i>   Completed
                             </span>
                        </div>
                        <ProgressBar striped variant="success" now={projectId?.projectProgress} label={`${projectId?.projectProgress}%`} />
                    </div>
                    <div className='project-overView'>
                        <h1 className='pb-4'>SPECIFICATION</h1>
                        <table>
                            <tr>
                                <th className='pe-5'>Orientation:</th>
                                <td className='ps-5'>{projectId?.orientation}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>Front Road:</th>
                                <td className='ps-5 py-2'>{projectId?.FrontRoad}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>Land Size:</th>
                                <td className='ps-5 py-2'>{projectId?.landSize}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>Apartment Size:</th>
                                <td className='ps-5 py-2'>{projectId?.apartmentSize}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>Number of Apartment:</th>
                                <td className='ps-5 py-2'>{projectId?.numberofAppartments}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>Number of Parking:</th>
                                <td className='ps-5 py-2'>{projectId?.numberofParking}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>HandOver Date</th>
                                <td className='ps-5 py-2'>{projectId?.handoverDate}</td>
                            </tr>
                            <tr>
                                <th className='pe-5 py-2'>Number of Floors</th>
                                <td className='ps-5 py-2'>{projectId?.numberofFloors}</td>
                            </tr>
                        </table>
                        <Link to={'#google.com'}> 
                         <button className='btn-primary btn btn-primary mt-5'>
                        <i class="fa-solid fa-download"></i> Download Brochure
                        </button>
                    </Link>
                    </div>
                   
                </div>
           </div>
           <MapSection  address={projectId?.fullLocation} locationUrl={projectId?.locationUrl}/>
            <div>
                <h1
                    style={{
                        color:' #003a71',
                        fontWeight:'800',
                        marginTop:'20px',
                        padding:'15px'
                    }}
                    >RELATED PROJECTS
                    </h1>
            <ProjectSlider project={projectId}></ProjectSlider>
            </div>
           <Footer></Footer>
           <FbMsgChat/>
        </div>
    );
};

export default ProjectDetails;