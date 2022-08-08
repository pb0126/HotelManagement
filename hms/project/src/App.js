import React from 'react';
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';

import { Routes,Route, Link} from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  Footer,
  Blog
} from "./Components";
import Rooms from "./Components/Rooms";
import Orders from "./Components/Orders";
import Room from "./Components/Room";
import Order from "./Components/Order";
function App() {
  
  return (
    <>
      <Navigation />
      <div className='grad'>

        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/roombook" element={<Room />} />
          <Route path="/placeorder" element={<Order />} />

        </Routes>
      </div>
      </>

    
   
  );

}

export default App;