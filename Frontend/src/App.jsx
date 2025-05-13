import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Entertainment from './Pages/Entertainment';
import Rooms from './Pages/Rooms';
import BookingRoom from './Pages/BookingRoom';
import Profile from './Pages/Profile';


const App = () => {
  return (
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Rooms' element={<Rooms/>}/>
        <Route path='/Entertainment' element={<Entertainment/>}/>
        <Route path='/BookingRoom' element={<BookingRoom/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    
  );
};

export default App;
