import React from 'react';
import {  Navbar } from 'react-bootstrap';
import ManuItems from '../ManuItems/ManuItems';
import brand from '../../../asset/brand/brand.png'
import './NavBars.css'

const NavBars = () => {
    return (
        <div className='nav-wrapper'>
           <Navbar>
                <Navbar.Brand href="/">
                  <img
                  className='brand-logo img-fluid'
                  src={brand} alt="" />
                </Navbar.Brand>
            </Navbar>
            <ManuItems></ManuItems>
            
        </div>
    );
};

export default NavBars;