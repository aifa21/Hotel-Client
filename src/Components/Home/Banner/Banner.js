import React from 'react';
import banner from '../../images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg'
import NavBar from '../NavBar/NavBar';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
           
            <img alt="" src={banner}/>
        </div>
    );
};

export default Banner;