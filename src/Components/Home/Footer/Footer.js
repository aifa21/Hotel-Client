import React from "react";
import "./Footer.css";
import logo from "../../images/hotel-logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
return (
<section className="footer my-2">
  <div className="container">
  <div className="row">
  <div className="col-md-3">
  <div className="d-flex justify-content-between">
  <div ><img style={{ width: "90px" ,borderRadius:"50%"}} src={logo} /></div><div style={{fontSize: "13px",marginTop:"12px" }}><p>Royal Hotels Network</p></div> 
  </div>
  <div>
    <p style={{fontSize: "10px",marginTop:"10px"}}>All hotels and vacation rental properties listed on this website are independently owned and operated.</p>
  </div>
  </div>
  <div className="col-md-3">
  <ul>
  <li><h5 style={{ color: "rgb(182, 179, 3)"}}>Services</h5></li>
  <li>Our Secret Island Boat Tour Is Just for You</li>
  <li>Chill and Escape in Our Natural Shelters</li>
  <li>September in Luviana Hotel</li>
  <li>Live Music Concerts at Luviana</li>
  </ul>
  </div>
  <div className="col-md-3">
  <ul>
  <li><h5 style={{ color: "rgb(182, 179, 3)"}}>Help</h5></li> 
  <li>Help Centers</li>
  <li>Authors</li>
   </ul>
  </div>
  <div className="col-md-3">
  <ul>
  <li><h5 style={{ color: "rgb(182, 179, 3)"}}>Our Address</h5></li> 
  <li><FontAwesomeIcon className="icon mr-2"icon={faAddressBook} />Chiitagong,Bangladesh</li>
  <li><FontAwesomeIcon className="icon mr-2"icon={faPhone} />+0880189435462</li>
  </ul>
  <ul className="social-media list-inline">
  <li className="list-inline-item"><FontAwesomeIcon className="icon"icon={faFacebookF} /></li>
  <li className="list-inline-item"><FontAwesomeIcon className=" icon" icon={faGooglePlusG} /></li>
  <li className="list-inline-item"><FontAwesomeIcon className=" icon" icon={faInstagram} /></li>
  </ul>
  </div></div>
  <div className="copyRight text-center mt-5"><small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
        </div>
      </div>

    </section>
  );
};

export default Footer;