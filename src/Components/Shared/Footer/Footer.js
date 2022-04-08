import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
       
        <div className='footer'>
           <div className='footer-1st-part'>
               <div>
                   <img src='https://edisonrealestatebd.com/themes/cms/assets/images/static/logo.svg' alt="" />
               </div>
               <div>
                   <ul>
                       <li> <NavLink to="/" className='footer-nav'> HOME</NavLink></li>
                       <li> <NavLink to="/aboutParents" className='footer-nav'> ABOUT</NavLink></li>
                       <li> <NavLink to="/blog" className='footer-nav'> BLOG</NavLink></li>
                       <li> <NavLink to="/career" className='footer-nav'> CAREER</NavLink></li>
                   </ul>
               </div>
           </div>

           <div>
               <div className='footer-btn-wraper'>
                   <NavLink to='/projectsParents'><button className='footer-button'>Our Projects</button></NavLink>
                   <NavLink to='/contact'><button className='footer-button'>CONTACT</button></NavLink>
               </div>
           </div>
           <div className='footer-last-part'>
               <div>
                   <p>We Serve Quality of Works</p>
               </div>
               <div>
               © 2022 DOMICILEBD, LLC. ALL RIGHTS RESERVED
               </div>
           </div>
        </div>
        
    );
};

export default Footer;