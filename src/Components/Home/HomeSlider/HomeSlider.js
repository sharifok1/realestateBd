import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeSlider.css'

const HomeSlider = () => {
    return (
        <div>
{/*  
        <header id="showcase">
          <h1>Welcome!</h1>

          <div class="buttons">
            <a href="#about" class="button"><span>About</span></a>
            <a href="#gallery" class="button"><span>Gallery</span></a>
          </div>
        </header> */}

        {/* slider// */}
        <div>
            <div className='banner-1'>
              <img src="https://edisonrealestatebd.com/admin/uploads/page/home-slider/1636368269TRK5B.jpg" alt="" />
              <div className='slide-inner-text'>
                <h1>Make your Dream true. We will give you the best oppurtunity</h1>
                <p>dream comes true</p>
              </div>
            </div>
        </div>
 


 <div className='slider-nave'>
   <div className='silde-nave-1'><NavLink to="/projectsParents" ><i class="fa-solid fa-building-shield"></i><span id='silde-nave-1'> EXPLORE PROJECTS</span></NavLink></div>
   <div> <i class="fa-solid fa-angles-right"></i> </div>
   <div><NavLink to="/projects" > <span className='slide-nav-items'>ONNGOING</span> </NavLink></div>
   <div><NavLink to="/projects" > <span className='slide-nav-items'>COMPLETED</span> </NavLink></div>
   <div><NavLink to="/projects" > <span className='slide-nav-items'> UPCOMING</span></NavLink></div>
 </div>
</div>
      
    );
};

export default HomeSlider;