import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./RoomsCard.css";
import { Link } from "react-router-dom";
const RoomsCard = (props) => {
  console.log(props.room);
const { name, img, price, id } = props.room;
  return (
  <div className="roomCard-section">
  <div className="col-md-4 col-sm-12">
   <Card className="room-card" style={{ width: "18rem" }}>
    <Card.Img className="room-img" variant="top" src={img} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{price} <small>/per night</small></Card.Text>
     <Link to={"/roomDetail/" + id}> {" "}
      <Button className="main-button">Show Details</Button>
         </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RoomsCard;
