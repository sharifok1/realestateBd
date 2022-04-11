import { Route, Routes } from "react-router-dom";
import AboutParents from "./Components/AboutSection/AboutParents/AboutParents";
import OurTeam from "./Components/AboutSection/OurTeam/OurTeam";
import AllBlogs from "./Components/Blog/AllBlogs/AllBlogs";
import BlogDetails from "./Components/Blog/BlogDetails/BlogDetails";
import CaareerParents from "./Components/Career/CareerParents/CaareerParents";
import JobDetails from "./Components/Career/JobDetails/JobDetails";
import ContactBuyer from "./Components/ContactSection/ContactBuyer/ContactBuyer";
import ContactLandowoner from "./Components/ContactSection/ContactLandowner/ContactLandowoner";
import ContactMain from "./Components/ContactSection/ContactMain/ContactMain";
import AddBlogData from "./Components/Dashboard/AddBlogData/AddBlogData";
import AddJobPost from "./Components/Dashboard/AddJobPost/AddJobPost";
import AddProjects from "./Components/Dashboard/AddProjects/AddProjects";
import ApponitmentReq from "./Components/Dashboard/AppointmentReq/ApponitmentReq";
// import './App.css';
import BlogData from "./Components/Dashboard/BlogData/BlogData";
import Buyer from "./Components/Dashboard/Buyer/Buyer";
import ContactRequest from "./Components/Dashboard/ContactRequest/ContactRequest";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import JobApplication from "./Components/Dashboard/JobApplication/JobApplication";
import JobPost from "./Components/Dashboard/JobPost/JobPost";
import LandOwner from "./Components/Dashboard/LandOwner/LandOwner";
import Projects from "./Components/Dashboard/Projects/Projects";
// import ApponitmentReq from "./Components/Dashboard/AppointmentReq/ApponitmentReq";

import HomeParents from "./Components/Home/HomeParents/HomeParents";
import Completed from "./Components/Projects/Completed/Completed";
import Ongoing from "./Components/Projects/Ongoing/Ongoing";
import ProjectDetails from "./Components/Projects/ProjectDetails/ProjectDetails";

import ProjectsParents from "./Components/Projects/ProjectsParents/ProjectsParents";
import UpComing from "./Components/Projects/UpComing/UpComing";
import JointVenture from "./Components/Services/JointVenture/JointVenture";
import OwnedLand from "./Components/Services/OwnedLand/OwnedLand";
import FbMsgChat from "./Components/Shared/FbMessengerChat/FbMsgChat";

function App() {
  return (
    <div className="App">
      {/* <Routes>
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
     <Route path="/customerChat" element={<FbMsgChat/>}/>

    </Routes> */}

      <Routes>
        <Route path="/" element={<HomeParents />} />
        <Route path="/home" element={<HomeParents />} />
        <Route path="/projectsParents" element={<ProjectsParents />} />
        <Route path="/details/:detailsId" element={<ProjectDetails />} />
        <Route path="/aboutParents" element={<AboutParents />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/ownedLand" element={<OwnedLand />} />
        <Route path="/jointVenture" element={<JointVenture />} />
        <Route path="/blog" element={<AllBlogs />} />
        <Route path="/blogDetails/:blogId" element={<BlogDetails />} />
        <Route path="/career" element={<CaareerParents />} />
        <Route path="/jobDetails/:jobId" element={<JobDetails />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/customerChat" element={<FbMsgChat />} />
        <Route path="/contactLandowoner" element={<ContactLandowoner />} />
        <Route path="/contactBuyer" element={<ContactBuyer />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<JobPost />} />
          <Route path="jobPost" element={<JobPost />} />
          <Route path="blogData" element={<BlogData />} />
          <Route path="projects" element={<Projects />} />
          <Route path="addBlogData" element={<AddBlogData />} />
          <Route path="addJobPost" element={<AddJobPost />} />
          <Route path="addProjects" element={<AddProjects />} />
          <Route path="apponitmentReq" element={<ApponitmentReq/>}/>
          <Route path="contactRequest" element={<ContactRequest/>}/>
          <Route path="landOwner" element={<LandOwner/>}/>
          <Route path="buyer" element={<Buyer/>}/>
          <Route path="jobApplication" element={<JobApplication/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
