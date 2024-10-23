import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Plan from './components/PLAN/Plan';
import RoomSelection from './components/Book/RoomSelection';
import FlightBooking from './components/Flight/FlightBooking'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import PaymentPopup from './Payment/PaymentPopup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/roomselection" element={<RoomSelection />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<PaymentPopup/>}/>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
