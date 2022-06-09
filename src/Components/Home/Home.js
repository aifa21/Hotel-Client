import React from 'react';
import Rooms from './Rooms/Room';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Rooms></Rooms>
            <Service></Service>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;