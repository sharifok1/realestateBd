import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
       
            <div className='footer'>
            <Container>
                <div className='pt-5 pb-4'>
                    <div className='text-start p-0 m-0'>
                        <img className='w-20 p-2'  src='https://edisonrealestatebd.com/themes/cms/assets/images/static/logo.svg' alt="" />
                        <div className='p-2'>
                            <h5>HOTLINE: 8809642525525</h5>
                            <h5>PHONE: +88017 59 59 59 73  |  +88017 59 59 59 74</h5>
                            {/* <h5>EMAIL: hello@edisonrealestatebd.com</h5> */}
                        </div>
                    </div>
                    <div>
                        <img src="https://edisonrealestatebd.com/themes/cms/assets/images/static/rehab.jpeg" alt="" />
                    </div>  
                </div>
                <div className='m-0 p-0'>
                    <hr />
                    <i class="m-3 fa-brands fa-facebook"></i>
                    <i class="m-3 fa-brands fa-instagram"></i>
                    <i class="m-3 fa-brands fa-linkedin-in"></i>
                    <i class="m-3 fa-brands fa-twitter"></i>
                    <hr />
                </div>
                <p className='mb-0 pb-2'>© 2022 Edison Real Estate. All Rights Reserved. Designed & Developed by Dcastalia</p>
            </Container>
        </div>
        
    );
};

export default Footer;