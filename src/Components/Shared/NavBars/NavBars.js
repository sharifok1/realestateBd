import React from 'react';
import {  Navbar } from 'react-bootstrap';
import ManuItems from '../ManuItems/ManuItems';
import './NavBars.css'

const NavBars = () => {
    return (
        <div className='nav-wrapper'>
           <Navbar>
                <Navbar.Brand href="/">
                  {/* <img
                  className='brand-logo'
                  src="../../../asset/brand.svg" alt="" /> */}
                </Navbar.Brand>
            </Navbar>
            <ManuItems></ManuItems>
            
        </div>
    );
};

export default NavBars;