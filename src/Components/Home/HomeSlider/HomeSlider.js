import React from 'react';
import { NavLink } from 'react-router-dom';
import estateVideo from '../../../asset/bannerVidea.mp4'
import './HomeSlider.css'

const HomeSlider = () => {
    return (
        <div id='home'>
{/*  
        <header id="showcase">
          <h1>Welcome!</h1>

          <div class="buttons">
            <a href="#about" class="button"><span>About</span></a>
            <a href="#gallery" class="button"><span>Gallery</span></a>
          </div>
        </header> */}

        {/* slider// */}
        <div className='slider-top-banner'>
            {/* <div className='banner-1'>
              <img src="https://edisonrealestatebd.com/admin/uploads/page/home-slider/1636368269TRK5B.jpg" alt="" />
              <div className='slide-inner-text'>
                <h1>Make your Dream true. We will give you the best oppurtunity</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod.</p>
              </div>
            </div>

            <div className='banner-2'>
              <img src="https://edisonrealestatebd.com/admin/uploads/page/home-slider/1619413236IHUZi.jpg" alt="" />
              <div className='slide-inner-text'>
                <h1>Make your Dream true. We will give you the best oppurtunity</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod.</p>
              </div>
            </div>

            <div className='banner-3'>
              <img src="https://edisonrealestatebd.com/admin/uploads/page/home-slider/1647327509Lwq5O.jpg" alt="" />
              <div className='slide-inner-text'>
                <h1>Make your Dream true. We will give you the best oppurtunity</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod.</p>
              </div>
            </div>

            <div className='banner-4'>
              <img src="https://edisonrealestatebd.com/admin/uploads/page/home-slider/1634452560QE9gQ.jpeg" alt="" />
              <div className='slide-inner-text'>
                <h1>Make your Dream true. We will give you the best oppurtunity</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod.</p>
              </div>
            </div> */}
            <video
            className='banner-background'
            autoPlay loop muted
            playsinline="true" disablePictureInPicture="true"
           
           >
            <source src={estateVideo} type="video/mp4"/>
            </video>
            <div className='banner-heading'>
              <p>
              Enthralling you with scintillating landscape
              </p>
              <svg class="svg-text" viewBox="0 0 800 60">
	<symbol id="s-text">
		<text text-anchor="middle" x="50%" y="80%">DOMICILEDBL BD</text>
	</symbol>

	<g class = "g-ants">
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
		<use href="#s-text" class="text-copy"></use>
	</g>
</svg>
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