import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Service from './Components/Home/Service/Service';
import Room from './Components/Home/Rooms/Room';
import Contact from './Components/Home/Contact/Contact';
import NavBar from './Components/Home/NavBar/NavBar';
import RoomDetail from './Components/Home/RoomDetail/RoomDetail';
import Login from './Components/Login/Login';
import {  useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute';
import AdminRoute from './Components/Login/AdminRoute';
import ProcessPayment from './Components/Home/ProcessPayment/ProcessPayment';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import userBooking from './Components/Dashboard/OrderList/OrderList';

import OrderList from './Components/Dashboard/OrderList/OrderList';
import Footer from './Components/Home/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Admin from './Components/Dashboard/Admin/Admin';

function App() {
 
  return (
  <AuthProvider>
  <Router>
   
  <Switch>
  <Route path='/home'>
  <NavBar></NavBar>
  <Home></Home>
  </Route>
  <Route exact path="/">
  <NavBar></NavBar>
  <Home></Home>
  </Route>
  <Route path='/service'>
  <NavBar></NavBar>
  <Service></Service>
  </Route>
  <Route path='/room'>
  <NavBar></NavBar>
  <Room></Room>
  </Route>
  <Route path="/roomDetail/:roomKey">
  <NavBar></NavBar>
  <RoomDetail ></RoomDetail>
  </Route>
  
  <Route path='/contact'>
  <NavBar></NavBar>
  <Contact></Contact>
  </Route>
  <Route path="/dashboard">
   <Dashboard></Dashboard>
  </Route>
  <AdminRoute path='/dashboard/bookingList'>
  <BookingList>
  </BookingList> 
  </AdminRoute>
  <AdminRoute path='/makeAdmin'>
  <Admin>
  </Admin> 
  </AdminRoute>
  <PrivateRoute path='/dashboard/userOrder'>
  <OrderList>
  </OrderList> 
  </PrivateRoute>
  <Route path="/login">
  <NavBar></NavBar>
    <Login></Login>
    </Route>
    <Route>
      <Footer></Footer>
    </Route>
  </Switch>
  </Router>
  </AuthProvider>

  );
}

export default App;
