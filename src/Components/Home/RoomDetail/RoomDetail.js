import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import pic1 from "../../images/jared-rice-PibraWHb4h8-unsplash.jpg";
import pic2 from "../../images/minh-pham-7pCFUybP_P8-unsplash.jpg";
import pic3 from "../../images/minh-pham-OtXADkUh3-I-unsplash.jpg";
import pic4 from "../../images/raquel-navalon-alvarez-TWj0qbJn4zI-unsplash.jpg";
import "./RoomDetail.css";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEye,
  faBars,
  faStar,
  faSquare,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "../Footer/Footer";

const RoomDetail = () => {
  const stripePromise = loadStripe("pk_test_51HaZJzAOwZw8EHMZMFAuexZ8GMLwd1zC0VW3ASIQjK8gNDs329MpCXuKMoRH0p8eHRXjbiAmHKtucwxzxwVliDZQ00zBYC1xzG");
  const { register, handleSubmit, errors } = useForm();
  const { roomKey } = useParams();
  const [room, setRoom] = useState({});
  useEffect(() => {
    fetch('https://limitless-atoll-89081.herokuapp.com/rooms/'+roomKey)
      .then((res) => res.json())
      .then((data) => setRoom(data));
  }, [roomKey]);
 console.log("room=",room);
  const [showPayment, setShowPayment] = useState(false);
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [appointments, setAppointments] = useState({});
  const [price, setPrice] = useState();
  const [allData, setAllData] = useState();

  const handleChangeStart = (startDate) => {
    console.log("start=", startDate);
    setstartDate(startDate);
  };
  const handleBook = () => {
    setShowPayment(true);
  };
  const handleChangeEnd = (date) => {
    console.log("ent=", date);
    setendDate(date);
  };
  
  // ........  DAYS LEFT .......
  const arrival = moment(startDate);
  const departure = moment(endDate);
  const daysLeft = departure.diff(arrival, "days");
  console.log(daysLeft);
  const totalPrice=Number(room.price) * (daysLeft+1);
  const onSubmit = (data) => {
    console.log(data);
    data.room=room.name;
    data.price=totalPrice;
    data.startDate=arrival.format("YYYY-MM-DD HH:DD:MM");
    data.endDate=departure.format("YYYY-MM-DD HH:DD:MM"); 
    
    setAllData(data);
  };
  return (
    <div className="all-section">
      <div className="room-details-container container mb-5">
        <div className="row">
          <div className="col-lg-12 upper-part">
            <h2 className="mt-4">{room.name}</h2>
            <img src={room.img} />
          </div>
        </div>
        <div className="middle-part">
          <div className="row">
            <div className="col-md-7 col-12 ">
              <p>
                Great choice for a relaxing vacation for families with children
                or a group of friends. This huge triple room features one
                queen-size bed and 1 single bed. Also, there can be 3 single
                beds in a room for up to 3 people.
                <br />
                <br />
                Large triple rooms are located on the first floor and have an
                awesome Aegean sea view, large windows and a lot of space
                inside. You are also able to upgrade your room to an upper
                floor. The rooms on the second floor come with a balcony and 2
                comfortable chairs for your disposal.
                <br />
                <br />
                The bathroom is equipped with a bathtub or shower, ground floor
                tiles and hairdryer. Smoking in rooms is allowed.
              </p>
              <div className="img-and-detail">
                <div className="img-group">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={pic1} />
                    </div>
                    <div className="col-md-6">
                      <img src={pic2} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <img src={pic3} />
                    </div>
                    <div className="col-md-6">
                      <img src={pic4} />
                    </div>
                  </div>
                </div>

                <div className="detail-group">
                  <h4>Details</h4>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td className="first-cell ">
                          <FontAwesomeIcon
                            className="d-icon mr-2"
                            icon={faUser}
                          />
                          Person
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(249, 251, 252)" }}
                          className="sec-cell"
                        >
                          {room.Person}
                        </td>
                      </tr>
                      <tr>
                        <td className="first-cell">
                          <FontAwesomeIcon
                            className="d-icon mr-2"
                            icon={faStar}
                          />
                          Amenities:
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(249, 251, 252)" }}
                          className="sec-cell"
                        >
                          {room.Amenities}
                        </td>
                      </tr>
                      <tr>
                        <td className="first-cell">
                          <FontAwesomeIcon
                            className="d-icon mr-2"
                            icon={faEye}
                          />
                          View:
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(249, 251, 252)" }}
                          className="sec-cell"
                        >
                          {room.View}
                        </td>
                      </tr>

                      <tr>
                        <td className="first-cell">
                          <FontAwesomeIcon
                            className="d-icon mr-2"
                            icon={faBed}
                          />
                          Bed Type:
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(249, 251, 252)" }}
                          className="sec-cell"
                        >
                          {room.BedType}
                        </td>
                      </tr>
                      <tr>
                        <td className="first-cell">
                          <FontAwesomeIcon
                            className="d-icon mr-2 "
                            icon={faBars}
                          />
                          Categories:
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(249, 251, 252)" }}
                          className="sec-cell"
                        >
                          {room.Categories}
                        </td>
                      </tr>
                      <tr>
                        <td className="first-cell">
                          <FontAwesomeIcon
                            className="d-icon mr-2"
                            icon={faSquare}
                          />
                          Size:
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(249, 251, 252)" }}
                          className="sec-cell"
                        >
                          {room.Size}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* <div className="offset-md-1"></div> */}
            <div className="col-md-5">
              <div className="checkout-section sticky">
                {
                  <div style={{ display: showPayment ? "none" : "block" }}>
                    <h5>
                      ${room.price}{" "}
                      <small style={{ fontSize: "13px", color: "#666868" }}>
                        {" "}
                        /per night
                      </small>
                    </h5>
                    <p className="underLine">
                      __________________________________
                    </p>
                    <div className="checkout">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <small style={{ color: "#666868" }}>
                          Check-in-Date<sup style={{ color: "red" }}>**</sup>
                        </small>
                        <DatePicker
                          selected={startDate}
                          onChange={handleChangeStart}
                          className="form-control "
                         
                        />
                        <br/>
                        <small style={{ color: "#666868" }}>
                          Check-out-Date<sup style={{ color: "red" }}>**</sup>
                        </small>
                        <DatePicker
                          selected={endDate}
                          onChange={handleChangeEnd}
                          className="form-control"
                        />
                        <br/>
                        <small style={{ color: "#666868" }}>
                          Person
                        </small>
                        <input
                          placeholder="Person"
                          type="number"
                          style={{ border: "1px solid #d9dbdb" }}
                          {...register("person", { required: true })}
                        />
                        {errors && <span>This field is required</span>}
                        <p className="dayCalc">Number of days : {daysLeft+1}</p>
                        <p className="dayCalc">Total price to be paid :
                          {totalPrice}
                         
                        </p>
                        <button
                         onClick={handleBook}
                          style={{ marginTop: "20px" }}
                          className="main-button "
                        > Book
                        </button>
                      </form>
                    </div>
                  </div>
                }
                {
                  <div style={{ display: showPayment ? "block" : "none" }}className="payment-section">
                    {/* <p>Please Pay Fiest</p> */}
                    <Elements stripe={stripePromise}>
                      <ProcessPayment allData={allData}></ProcessPayment>
                    </Elements>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RoomDetail;
