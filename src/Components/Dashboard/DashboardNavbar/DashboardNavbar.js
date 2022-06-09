import React, { useContext, useState } from 'react';
import './DashboardNavbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
const DashboardNavbar = () => {
   const {user}=useAuth();
    return (
       <div className="dashboardNavbar">
        <h5 className="mt-2">Dashboard</h5>
        <div className="search-wrapper">
        <span><FontAwesomeIcon icon={faSearch}/></span>
        <input type="search" placeholder="Search Here..."/>
        </div>
        <div className="user-wrapper">
           <h5 className="mt-2">{user.name}</h5>
        </div>
           
        </div>
    );
};

export default DashboardNavbar;