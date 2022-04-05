import React from 'react';
import { Col, Container, Row,Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import './About.css'

const About = () => {
    return (
        <div>
             <div id="about-us">
      <Container>
        <Row className='m-0'>
          <Col lg={6} sm={12} className='px-4'>
            <div className="aboutUs-text">
              <Fade left>
              <p className="about-sub-title">ABOUT US</p>
              </Fade>
              <Fade left>
              <div class = 'about-animation projects'>
              <h1 className='design-text'>
                REDEFINING YOUR <br /> STANDARD OF LIVING
              </h1>
              <div class="overlay"></div>
              </div>
              </Fade>
              
              <p className="about-us-text">
                Edison Group was founded in 2009 with the aim to enhance aspects
                of life for people by providing powerful brands, reliable
                products and a wide range of services. It ventured into the real
                estate sector in 2015 with its “dream team” dedicated to merge
                value and innovation in the evolving real estate sector of
                Bangladesh. Through considerable focus on design, structural
                dimension, and feasibility in the sense of space and resource
                conservation; as well as environmental soundness; we deliver you
                optimum support in residential and commercial accommodation.
                <br />
                <br />
                Conjoining the expertise of different fields to develop and
                bring in the quintessence of contemporary lifestyle, we provide
                distinguished services and strictly maintain project handover
                deadlines. We assure you to be your most reliable developer in
                Dhaka in terms of integrity and credibility.
              </p>
              <Button className="btn-primary mb-4" variant="primary">Learn More</Button>
            </div>
          </Col>
          <Col lg={6} sm={12} >
            <div className="about-us-video px-2">
              <video width="400" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    );
};

export default About;