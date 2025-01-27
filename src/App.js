import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyTeam from './components/MyTeam/MyTeam';
import Booking from './components/Booking/Booking';
import MyTournament from './components/MyTournament/MyTournament';
import Signup from './components/Signup/Signup';

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tournament" element={<MyTournament />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>

  );
}



export default App