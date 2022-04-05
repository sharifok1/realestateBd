import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import projectpic1 from '../../../asset/project1.jpg'
import projectpic2 from '../../../asset/project2.jpg'
import projectpic3 from '../../../asset/project3.jpg'
import {Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from 'react-router-dom';
const ProjectSlider = () => {
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
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
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
            <SwiperSlide>
             <div className="slider-card">
             <img className="card-img-slider" style={{height:'600px'}} src={projectpic1} alt="" />
             <div className="img-overlay"></div>
              <div className="slider-text-div">
                   <div className="mb-4">
                        <div className="card-name">
                          <h1 className="card-heading">DOMICILE ROSALIND </h1>
                          <h3 >Bashundhara R/A</h3>
                        </div>
                         <p>
                      Submerged in utmost security and splendour, Edison Castalia is positioned carefully to facilitate maximum wellbeing in terms of the multifaceted amenities that it offers. 
                   </p>
                   </div>       
                   
              </div>
              <NavLink to={`/details/p1`}>
             <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
             </NavLink>
             </div>
            </SwiperSlide>

            <SwiperSlide>
             <div className="slider-card">
                    <img className="slider-card-img" src={projectpic2} alt="" />
                    <div className="img-overlay"></div>
              <div className="slider-text-div">
                   <div className="mb-4">
                   <div className="card-name">
                          <h1 className="card-heading">DOMICILE ROSALIND </h1>
                          <h3 >Bashundhara R/A</h3>
                        </div>
                         <p>
                      Submerged in utmost security and splendour, Edison Castalia is positioned carefully to facilitate maximum wellbeing in terms of the multifaceted amenities that it offers. 
                   </p>
                   </div>
                                         
              </div> 
              <NavLink to={`/details/p2`}>
             <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
             </NavLink>
             </div>
            </SwiperSlide>
        
            <SwiperSlide>
             <div className="slider-card">
             <img style={{height:'600px'}} src={projectpic3} alt="" />
             <div className="img-overlay"></div>
              <div className="slider-text-div">
                   <div className="mb-4">
                   <div className="card-name">
                          <h1 className="card-heading">DOMICILE ROSALIND </h1>
                          <h3 >Bashundhara R/A</h3>
                        </div>
                         <p>
                      Submerged in utmost security and splendour, Edison Castalia is positioned carefully to facilitate maximum wellbeing in terms of the multifaceted amenities that it offers. 
                   </p>
                   </div>
                  
              </div>
             </div>
             <NavLink to={`/details/p3`}>
             <button className="btn-secondary mb-4 mt-3 btn-position" variant="primary" style={{backgroundColor:'transparent !important'}}>Explore</button> 
             </NavLink>
             
            </SwiperSlide>
        
        </Swiper>
        </div>
    );
};

export default ProjectSlider;