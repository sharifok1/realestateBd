import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css'
import {Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react-hooks/rules-of-hooks


const ProjectSlider = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
  const url = 'http://localhost:3000/projects.json';
    fetch(url)
   .then(res=>res.json())
   .then(data=> setProjects(data))
  },[])

console.log(projects)

    return (
        <div className='pb-5'>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false,
            //   }}
            navigation={true}
            modules={[Autoplay,Pagination, Navigation]}
            breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            className="mySwiper px-3"
        >

          {
            projects?.map(myProject=><SwiperSlide>

              
              <div className="slider-card">
              <img className="card-img-slider" style={{height:'600px'}} src={myProject?.projectImage} alt="" />
              <div className="img-overlay"></div>
               <div className="slider-text-div">
                    <div className="mb-4">
                         <div className="card-name">
                           <h1 className="card-heading">{myProject?.projectName}</h1>
                           <h3 >{myProject?.projectName}</h3>
                         </div>
                          <p>
                          {myProject?.description.slice(0,150)} . . .
                        </p>
                        </div>       
                    
               </div>
               <NavLink to={`/details/${myProject?.id}`}>
              <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
              </NavLink>
              </div>
             </SwiperSlide>


            )

          }


            
        
        </Swiper>
        </div>
    );
};

export default ProjectSlider;