import React from 'react';
import Swiper from 'swiper';

import './TimeLine.css'
const TimeLine = () => {
  


 





    return (
      <div>
          <div class="timeline-container">
  <h1 class="title">Responsive Slider Timeline</h1>
  <div class="timeline">
    <div class="swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide" style={{backgroundImage: "url(https://unsplash.it/1920/500?image=11)"}} data-year="2011">
          <div class="swiper-slide-content"><span class="timeline-year">2011</span>
            <h4 class="timeline-title">Our nice super title</h4>
            <p class="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="swiper-slide" style={{backgroundImage: "url(https://unsplash.it/1920/500?image=11)"}} data-year="2011">
          <div class="swiper-slide-content"><span class="timeline-year">2011</span>
            <h4 class="timeline-title">Our nice super title</h4>
            <p class="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="swiper-slide" style={{backgroundImage: "url(https://unsplash.it/1920/500?image=11)"}} data-year="2011">
          <div class="swiper-slide-content"><span class="timeline-year">2011</span>
            <h4 class="timeline-title">Our nice super title</h4>
            <p class="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="swiper-slide" style={{backgroundImage: "url(https://unsplash.it/1920/500?image=11)"}} data-year="2011">
          <div class="swiper-slide-content"><span class="timeline-year">2011</span>
            <h4 class="timeline-title">Our nice super title</h4>
            <p class="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="swiper-slide" style={{backgroundImage: "url(https://unsplash.it/1920/500?image=11)"}} data-year="2011">
          <div class="swiper-slide-content"><span class="timeline-year">2011</span>
            <h4 class="timeline-title">Our nice super title</h4>
            <p class="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="swiper-slide" style={{backgroundImage: "url(https://unsplash.it/1920/500?image=11)"}} data-year="2011">
          <div class="swiper-slide-content"><span class="timeline-year">2011</span>
            <h4 class="timeline-title">Our nice super title</h4>
            <p class="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
       

      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>
      </div>
    );
};

export default TimeLine;

var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});