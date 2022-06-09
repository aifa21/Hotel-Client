import React from "react";
import useAuth from "../../../hooks/useAuth";
import BookingList from "../BookingList/BookingList";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import OrderList from "../OrderList/OrderList";
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
const Dashboard = () => {
  
  const {admin} = useAuth(); 
  console.log("isAdmin=",admin);
 
  return (
    <div className="dashboardSection">
          <SideBar />
        
         <DashboardNavbar />
         {
           admin?<BookingList />:<OrderList/>
          
         }
         
    </div>
  );
};

export default Dashboard;
