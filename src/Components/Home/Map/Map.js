import React from 'react';

const Map = () => {
    return (
        <div
        style={{marginTop:'50px'}}
        >
        <iframe
        style={{width:'100%', height:'100vh', border:'0'}}
        
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29199.787582069897!2d90.43684583734206!3d23.819543211526454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1647979835059!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy">


        </iframe>
        </div>
    );
};

export default Map;