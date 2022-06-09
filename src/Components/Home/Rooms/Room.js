import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import familyDeluxe from "../../images/roberto-nickson-emqnSQwQQDo-unsplash.jpg";
import tripleDeluxe from "../../images/francesca-tosolini-hCU4fimRW-c-unsplash.jpg";
import doubleDeluxe from "../../images/mark-champs-Id2IIl1jOB0-unsplash.jpg";
import fakeData from "../../FakeData";
import RoomsCard from "../RoomsCard/RoomsCard";
import './Room.css';
const Room = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://limitless-atoll-89081.herokuapp.com/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
      
return (
  <div className="all-section">
  <div className="header-part">
  <div className="room-header d-flex justify-content-between  mx-5 my-4">
  <div className="left">
  <div className="border"></div>
  <p >RAISING COMFORT TO THE HIGHEST LEVEL</p>
    <h4 >Rooms & Suties</h4>
  </div>
  <div className="right">
    <button className="main-button"style={{borderRadius:"30px"}}>View All</button>
    </div>
    </div>
    </div>
  <div className="container">
  <div className="row">
    {
      rooms.map((room) => (
      <RoomsCard room={room} id={room.id}></RoomsCard>))
            }
          
        </div>
      </div>
    </div>
  );
};

export default Room;
