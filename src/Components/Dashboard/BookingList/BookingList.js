import React, { useEffect, useState } from 'react';
import './BookingList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const BookingList = () => {
const [bookings, setBookings] = useState([]);
const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    fetch("https://limitless-atoll-89081.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [refresh]);

  

  const handleChange = (e) => {
    const id = e.target.name;
    console.log("id=",id);
    let color = ''
    if (e.target.value === "Done") {
        color = "success"
    }
    if (e.target.value === "On going") {
        color = "warning"
    }
    if (e.target.value === "Pending") {
        color = "danger"
    }
    const eventValue = {
        status: e.target.value,
        color: color
    }
 console.log("eventValue=",eventValue);
    fetch(`https://limitless-atoll-89081.herokuapp.com/updateStatus/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventValue)
    })
        .then(res => res.json())
        .then(data => console.log("status=",data))
        window.location.reload();
    
}
const handleDelete=id=>{
  console.log(id);
  fetch(`https://limitless-atoll-89081.herokuapp.com/deleteUser/${id}`, {
    method: "DELETE"
})
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
    window.location.reload();

}

  return (
    <div className="bookListTable">
     <table className="table table-borderless table-style">
       <thead>
        <tr>
        <th className="tableHeader">Name</th>
        <th className="tableHeader">Phone</th>
        <th className="tableHeader">Email</th>
        <th className="tableHeader">Room </th>
        <th className="tableHeader">Start Date</th>
        <th className="tableHeader">End Date</th>
        <th className="tableHeader">Payment</th>
        <th className="tableHeader"> Status</th>
        <th className="tableHeader "> Action</th>
        </tr>
        </thead>
        <tbody>
      {
        bookings.map((booking,key)=>
        <tr>
        <td >{booking.name}</td>
        <td>{booking.phone}</td>
        <td >{booking.email}</td>
        <td>{booking.room}</td>
        <td>{booking.startDate}</td>
        <td>{booking.endDate}</td> 
        <td>{booking.price}</td>           
        <td>
        <select name={booking._id} value={booking.status} onChange={e => handleChange(e)} className={`form-control  w-100 border-${booking.color}  text-${booking.color}`}style={{marginLeft:"0px"}} >
         <option value="Pending">Pending</option>
         <option value="On going">On going</option>
         <option value="Done">Done</option>
         </select></td>
         
         <td className="ml-5"><FontAwesomeIcon onClick={()=>handleDelete(`${booking._id}`)}style={{ cursor: "pointer",marginLeft:"18px",fontSize:"18px" }}color="red"icon={faTrash}title="Delete"/></td>  
        </tr>
        )}
        </tbody>
        </table>
        </div>
    );
};

export default BookingList;