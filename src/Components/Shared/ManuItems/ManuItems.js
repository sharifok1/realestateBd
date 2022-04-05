import React from 'react';
import { NavLink } from 'react-router-dom';
import './ManuItems.css'

const ManuItems = () => {
    return (
        <div >
            <main id='#'>
                 <input type="checkbox" id="myInput"/> 
                    <label for="myInput">
                        <span class="bar top"></span>
                        <span class="bar middle"></span>
                        <span class="bar bottom"></span>
                        </label>
                    <aside>
                        <div class="aside-section aside-left">
                           <div class="aside-content">
                           <div class="words word-1">
                                <span>DO</span>
                                <span>MI</span>
                                <span>CI</span>
                                <span>LE</span>
                                </div>

                                <div class="words word-3">
                                <span>DESIGN</span>
                                <span>& </span>
                                <span>BUILDERS</span>
                                <span>LTD</span>
                                </div>
                          </div>
                        </div>

                        <div class="aside-section aside-right">
                     
                                <nav>
                                <ul >
                                    <li class="sub-menu-parent" tab-index="0">    
                                        <NavLink to="/" className='aside-anchor'>Home</NavLink></li>
                                    <li class="sub-menu-parent" tab-index="0">
                                    <NavLink to={'/aboutParents'} className='aside-anchor'> About</NavLink>
                                    <ul class="sub-menu">
                                        <li><NavLink to='/ourTeam'>Our Team</NavLink></li>
                                    </ul>
                                    </li>

                                    <li class="sub-menu-parent" tab-index="0">
                                    <NavLink to="/projectsParents" className='aside-anchor'>Projects</NavLink>
                                    <ul class="sub-menu">
                                        <li><a href="@">Ongoing</a></li>
                                        <li><a href="@">Upcoming</a></li>
                                        <li><a href="@">Completed</a></li>
                                    </ul>
                                    </li>

                                    <li class="sub-menu-parent" tab-index="0">
                                    <a className='aside-anchor' style={{cursor:'pointer'}}>Services</a>
                                    <ul class="sub-menu">
                                        <li><NavLink to="/ownedLand">Owned Land</NavLink></li>
                                        <li><NavLink to="/jointVenture">Joint Venture</NavLink></li>
                                    </ul>
                                    </li>


                                {/* blog and carrer// */}
                                    <li class="sub-menu-parent" tab-index="0">
                                    <NavLink to="/blog" className='aside-anchor'>Blog</NavLink>
                                    </li>

                                    <li class="sub-menu-parent" tab-index="0">
                                    <NavLink to="/career" className='aside-anchor'>Career</NavLink>
                                    </li>


                                    {/* Contact */}
                                    <li class="sub-menu-parent" tab-index="0">
                                    <NavLink to="/contact" className='aside-anchor'>Contact</NavLink>
                                    <ul class="sub-menu submanu-last-child">
                                        <li><NavLink to="/contactLandowoner">Landowner</NavLink></li>
                                        <li><NavLink to="/contactBuyer">Buyer</NavLink></li>
                                        
                                    </ul>
                                    </li>

                                </ul>
                                </nav>

                       {/* end */}
                        </div>
                    </aside>
                    </main>
        </div>
    );
};

export default ManuItems;