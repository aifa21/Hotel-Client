import React, { useContext } from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import logo from '../../images/hotel-logo.PNG';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
const NavBar = () => {
 
  const {user,admin,logOut}=useAuth();
 
return (  
<nav className="navbar navbar-expand-sm  navbar-light bg-transparent fixed-top">
  <div className="container-fluid">
  <div className="logo ml-5"><img alt="" style={{background:"transparent"}}src={logo}/></div>         
  <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span><FontAwesomeIcon className="icon mr-2"icon={faBars} /></span>
   </a>
  <div className="collapse navbar-collapse "  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item  ">  <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink></li>
    <li className="nav-item "><NavLink className="nav-link" activeClassName="active_class" exact to="/service">Services</NavLink></li>
    <li className="nav-item "><NavLink className="nav-link" activeClassName="active_class" exact to="/room">Rooms</NavLink></li>

    { user.email&&!admin&&<li className="nav-item "><NavLink className="nav-link" activeClassName="active_class" exact to="/dashboard/userOrder">Dashboard</NavLink></li>} 
     {admin&&<li className="nav-item "><NavLink className="nav-link" activeClassName="active_class" exact to="/dashboard/bookingList">Dashboard</NavLink></li>} 
    
    { user.email?
    <>
    <li className="nav-item"><a className="nav-link mr-3 " href="/login">{user.displayName}</a></li>  
    <li><Link to="/" className="nav-item">
    <button style={{background:"lightblue",fontSize:"15px",fontWeight:"500"}}onClick={logOut}className="btn btn-rounded">
    Sign Out</button></Link></li>
    </>
    :
    <li className="nav-item"><a className="nav-link mr-5 " href="/login">Login</a></li>
    }
    </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;