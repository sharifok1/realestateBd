import React from 'react';
import {  Navbar } from 'react-bootstrap';
import ManuItems from '../ManuItems/ManuItems';
import './NavBars.css'

const NavBars = () => {
    return (
        <div className='nav-wrapper'>
           <Navbar>
            {/* <Container> */}
                <Navbar.Brand href="/">
                    <img src="https://edisonrealestatebd.com/themes/cms/assets/images/static/logo.svg" alt="" />
                </Navbar.Brand>
            </Navbar>
            <ManuItems></ManuItems>
            
        </div>
    );
};

export default NavBars;