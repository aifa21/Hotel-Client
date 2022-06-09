import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSignOutAlt, faBed, faGripHorizontal, faUsers,faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

import useAuth from '../../../hooks/useAuth';
const SideBar = () => {
   
    const {admin,logOut} = useAuth();

 
return (
 <div className="sidebar d-flex flex-column justify-content-between py-3 px-4">
    <ul className="list-unstyled">    
    <li ><Link to="/home"className="text-white "><FontAwesomeIcon className="mr-2"icon={faGripHorizontal}/><span>Home</span></Link></li> 
    <li ><Link to="/room"className="text-white "><FontAwesomeIcon className="mr-2"icon={faBed}/><span>Rooms</span></Link></li> 
    <li ><Link to="/service"className="text-white "><FontAwesomeIcon className="mr-2"icon={faUsers}/><span>Service</span></Link></li>          
    {admin&&
    <>
     <li><Link to="/dashboard/bookingList"className="text-white"><FontAwesomeIcon className="mr-2" icon={faCalendar}/><span>Booking List</span></Link></li>
     <li><Link to="/makeAdmin"className="text-white"><FontAwesomeIcon className="mr-2" icon={faCalendar}/><span>Make Admin</span></Link></li>
    </>}
    <Link to="/"className="text-white" onClick={logOut}><FontAwesomeIcon className="mr-2 mt-5"icon={faSignOutAlt}/><span>Log Out</span></Link>
    </ul>
    </div>
    );
};

export default SideBar;