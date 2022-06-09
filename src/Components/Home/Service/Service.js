import React from 'react';
import bg from "../../images/roberto-nickson-h1_ILkb9tLo-unsplash.jpg";
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSwimmingPool,faSpa,faDivide,faDumbbell,faUmbrellaBeach,faShip} from '@fortawesome/free-solid-svg-icons';
const Service = () => {
return (
 <div className="all-section">
   <div className="header-part service-header">
    <h3 className="font-color">Services</h3>
    </div>
    <div className="service-container py-5 my-5">
    <div className="service-detail">
    <h3 >Our Services</h3>
    <p className="mt-4"style={{marginTop:"20px"}}>The hotel is arranged on three floors without<br/> a lift.On the ground floor, apart from the <br/>reception, there is a comfortable lounge<br/> where you can sit and drink tea.</p>
    <div className="service-list d-flex mt-4 ">
    <ul className="first-list">
     <li className="mt-4"><FontAwesomeIcon className="mr-2" icon={faSwimmingPool}/>Swimming pool</li>
     <li className="mt-4"><FontAwesomeIcon className="mr-2" icon={faSpa}/>Spa & massage</li>
     <li className="mt-4"><FontAwesomeIcon className="mr-2" icon={faDivide}/>Diving & snorkling</li>
     </ul>
        <ul className="second-list">
        <li className="mt-4"><FontAwesomeIcon className="mr-2" icon={faDumbbell}/>Gym & yoga</li>
        <li className="mt-4"><FontAwesomeIcon className="mr-2" icon={faShip}/>Boat tours</li>
        <li className="mt-4"><FontAwesomeIcon className="mr-2" icon={faUmbrellaBeach}/>Private Beach</li>
        </ul>
        </div>
        </div>
    <div className="service-img">
        <img src={bg}/>
          </div>
         </div>
        </div>
    );
};

export default Service;