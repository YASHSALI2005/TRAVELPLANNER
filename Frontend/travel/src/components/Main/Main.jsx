import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './main.css'; // Import your external CSS
import travelVideo from '../../assets/images/travell.mp4'; // Adjust the path if necessary
import bno from '../../assets/images/redfort1.webp'
import nwo from '../../assets/images/qutub.jpg'
import taa from '../../assets/images/taj1.jpeg'
import ss from '../../assets/images/qr.png'
const Main = () => {
  // State to store the trip form data
  const [tripData, setTripData] = useState({
    from: '',
    to: '',
    date: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function from React Router

  // Handle input change and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Trip data submitted:', tripData); // Log trip data to console for debugging
    // Redirect to the '/plan' page with trip data in the state
    navigate('/plan', { state: tripData });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* Background video */}
        <video className="hero-video" autoPlay loop muted>
          <source src={travelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay content over the video */}
        <div className="overlay">
          <h1>Explore the World with Travel Planner</h1>
          
          {/* Trip Planning Form */}
          <form className="trip-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                From:
                <input
                  type="text"
                  name="from"
                  value={tripData.from}
                  onChange={handleInputChange}
                  placeholder="Enter city or airport"
                  required
                />
              </label>
              <label>
                To:
                <input
                  type="text"
                  name="to"
                  value={tripData.to}
                  onChange={handleInputChange}
                  placeholder="Enter city or airport"
                  required
                />
              </label>
              <label>
                Departure:
                <input
                  type="date"
                  name="date"
                  value={tripData.date}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <button type="submit" className="planbuttonn">Plan Trip</button>
          </form>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="popular-destinations">
        <h2 className="section-titlee">Popular Destination</h2>
        <p className="section-subtitle">
          Explore some of the most beautiful places around the world.
        </p>
        
        <div className="destination-card-container">
          <div className="destination-card">
            <img src={bno} alt="San Miguel" />
            <div className="destination-info">
              <h3>RED FORT</h3>
              <p>DELHI</p>
              <span>★★★★★</span>
            </div>
          </div>

          <div className="destination-card">
            <img src={nwo} alt="Burj Khalifa" />
            <div className="destination-info">
              <h3>QUTUB MINAR</h3>
              <p>DELHI</p>
              <span>★★★★★</span>
            </div>
          </div>

          <div className="destination-card">
            <img src={taa} alt="Kyoto Temple" />
            <div className="destination-info">
              <h3>TAJ MAHAL</h3>
              <p>AGRA</p>
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </section>
      <div className="download-app-section">
        <div className="app-promo-text">
    <h3>Download App Now !</h3>
    <p>Use code <b>WELCOMEMMT</b> and get <b>FLAT 12% OFF</b> on your first domestic flight booking</p>
    <div className="mobile-input-container">
      <img className="flagg-icon" src="https://flagcdn.com/w40/in.png" alt="India Flag" />
      <input
        type="text"
        placeholder="+91 - Enter Mobile number"
        className="mobile-input"
      />
      <button className="app-link-btn">GET APP LINK</button>
    </div>
  </div>
  
  <div className="app-store-buttons">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-button" />
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="store-button" />
    <img src={ss} alt="QR Code" className="qr-code" />
  </div>
</div>

      
    </div>
  );
};

export default Main;
