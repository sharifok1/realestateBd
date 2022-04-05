import React from 'react';
import { Carousel } from 'react-bootstrap';
import './singleDetailsSlider.css';
const SingleProjectsSlider = (props) => {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="details-left-img"
            src={props?.details?.img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="details-left-img"
            src={props?.details?.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="details-left-img"
            src={props?.details?.img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
       
    );
};

export default SingleProjectsSlider;