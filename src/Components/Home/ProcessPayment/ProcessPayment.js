import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React,{ useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import './Payment.css';
const ProcessPayment= (props) => {
  const { roomKey } = useParams();
  console.log("props=",props.allData);
  const { register, handleSubmit, errors } = useForm();
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  
  const onSubmit = async (event) => {
    event.startDate=props.allData.startDate;
    event.endDate=props.allData.endDate;
    event.person=props.allData.person;
    event.room=props.allData.room;
    event.price=props.allData.price;
    event.status="";
     event.color="";

    
    fetch('https://limitless-atoll-89081.herokuapp.com/addBookings', {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data=",data);
      });
   
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error);
      setPaymentSuccess(null);
      // console.log('[error]', error);
    } else {
       setPaymentError(null);
      setPaymentSuccess(paymentMethod);
    }

  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h5>CheckOut Form</h5>
       <input
        placeholder="Name"
        type="text"
        style={{ border: "1px solid #d9dbdb" }}
        {...register("name", { required: true })}
        />
        {errors && <span>This field is required</span>}
       
        <input
        placeholder="Email"
        type="text"
        style={{ border: "1px solid #d9dbdb" }}
        {...register("email", { required: true })}
        />
        {errors && <span>This field is required</span>}
       
        <input
        placeholder="Phone No."
        type="number"
        style={{ border: "1px solid #d9dbdb" }}
        {...register("phone", { required: true })}
        />
        {errors && <span>This field is required</span>}
      <CardElement />
      <button className="main-button my-4"type="submit" disabled={!stripe}>
        Confirm Booking
      </button>
      {paymentError && <p style={{ color: "red",fontSize:"15px" }}>Failed, {paymentError.message}</p>}
      {paymentSuccess && <p style={{ color: "green",fontSize:"15px" }}>Payment Successful & Booking Confirm</p>}
    </form>
    </div>
  );
};
export default ProcessPayment;