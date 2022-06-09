import React, { useContext, useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { UserContext } from '../../../App';
import useAuth from '../../../hooks/useAuth';

const OrderList = () => {
const [userOrder, setUserOrder] = useState([]);
const {user}=useAuth();
console.log("order",userOrder.status);
  useEffect(() => {
    fetch(`https://limitless-atoll-89081.herokuapp.com/userOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserOrder(data));
  }, [user.email]);
  console.log("useOrder=",userOrder);
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
           <th className="tableHeader">Status</th>
           
           </tr>
           </thead>
           <tbody>
         {
           userOrder.map((order,index)=>
           <tr>
           <td >{order.name}</td>
           <td>{order.phone}</td>
           <td >{order.email}</td>
           <td>{order.room}</td>
           <td>{order.startDate}</td>
           <td>{order.endDate}</td> 
           <td>{order.price}</td>  
           {
             order.status==='Done'
             ?
             <td ><button   style={{backgroundColor:"green",color:"white",border:"none",padding:"8px",borderRadius:"5px"}}>Confirmed</button></td>
             :
             <td ><button  style={{backgroundColor:"red",color:"white",border:"none",padding:"8px",borderRadius:"5px"}} >Not Confirmed</button></td>

           }         
           
           </tr>
           )
           
           }
           </tbody>
           </table>
           </div>
    );
};

export default OrderList;