import { Route, Routes } from 'react-router-dom';
import AboutParents from './Components/AboutSection/AboutParents/AboutParents';
import OurTeam from './Components/AboutSection/OurTeam/OurTeam';
import AllBlogs from './Components/Blog/AllBlogs/AllBlogs';
import BlogDetails from './Components/Blog/BlogDetails/BlogDetails';
import CaareerParents from './Components/Career/CareerParents/CaareerParents';
import JobDetails from './Components/Career/JobDetails/JobDetails';
import ContactBuyer from './Components/ContactSection/ContactBuyer/ContactBuyer';
import ContactLandowoner from './Components/ContactSection/ContactLandowner/ContactLandowoner';
import ContactMain from './Components/ContactSection/ContactMain/ContactMain';
// import './App.css';

import HomeParents from './Components/Home/HomeParents/HomeParents';
import ProjectDetails from './Components/Projects/ProjectDetails/ProjectDetails';

import ProjectsParents from './Components/Projects/ProjectsParents/ProjectsParents';
import JointVenture from './Components/Services/JointVenture/JointVenture';
import OwnedLand from './Components/Services/OwnedLand/OwnedLand';


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<HomeParents/>}/>
     <Route path="/projectsParents" element={<ProjectsParents/>}/>
     <Route path="/details/:detailsId" element={<ProjectDetails/>}/>
     <Route path="/aboutParents" element={<AboutParents/>}/>
     <Route path="/ourTeam" element={<OurTeam/>}/>
     <Route path="/ownedLand" element={<OwnedLand/>}/>
     <Route path="/jointVenture" element={<JointVenture/>}/>
     <Route path="/blog" element={<AllBlogs/>}/>
     <Route path="/blogDetails/:blogId" element={<BlogDetails/>}/>
     <Route path="/career" element={<CaareerParents/>}/>
     <Route path="/jobDetails/:jobId" element={<JobDetails/>}/>
     <Route path="/contact" element={<ContactMain/>}/>
     <Route path="/contactLandowoner" element={<ContactLandowoner/>}/>
     <Route path="/contactBuyer" element={<ContactBuyer/>}/>
    </Routes>
    </div>
  );
}

export default App;
