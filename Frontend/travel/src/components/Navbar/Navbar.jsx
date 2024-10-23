import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';
import imagee from '../../assets/images/image.png';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="main-navbar">
      <div className="main-navbar-brand">
        <img src={imagee} alt="Travel Planner" width="50" height="40" /> {/* Increase logo size */}
        Travel Planner
      </div>
      <ul className="main-navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plan">Hotel</Link></li>
        <li><Link to="/flight-booking">Flights</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        {/* <li><Link to="/profile">Profile</Link></li> */}
        {isAuthenticated ? (
          <li>
            <button className="auth-logout-button" onClick={logout}>Logout</button>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
