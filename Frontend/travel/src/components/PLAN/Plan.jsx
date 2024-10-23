import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './plan.css'; // Import your CSS file for styling
import hotelImage1 from '../../assets/images/h.jpg'; // Import your hotel images
import hotelImage2 from '../../assets/images/it.jpg';
import hotelImage3 from '../../assets/images/ob.jpg';
import hotelImage4 from '../../assets/images/ll.jpg';
import hotelImage5 from '../../assets/images/mme.jpg';
import hotelImage6 from '../../assets/images/taj.jpg';
import Modal from '../Main/Modal'; // Ensure you import the Modal

const Plan = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState('');

  const handleBookNow = (hotelName) => {
    setSelectedHotel(hotelName);
    setIsModalOpen(true); // Open the modal
  };

  const handleRoomBooking = () => {
    setIsModalOpen(false);
    navigate('/roomselection', { state: { hotelName: selectedHotel } }); // Navigate to RoomSelection
  };

  const handleFlightBooking = () => {
    setIsModalOpen(false);
    navigate('/flight-booking'); // Navigate to Flight Booking page
  };

  return (
    <div>
      <main>
        <section className="room-section">
          <h2 className="section-title">OUR Hotels</h2>
          <div className="room-cards">
            {/* Room Card 1 */}
            <div className="room-card">
              <img src={hotelImage1} alt="Hotel Taj West End" />
              <div className="room-info">
                <h3>Hotel Taj West End</h3>
                <p className="price">₹12,000 per night</p>
                <p><strong>Location:</strong> Race Course Road, Bengaluru</p>
                <p><strong>Facilities:</strong> Spa, Gym, Free Wifi, Restaurant</p>
                <p><strong>Rating:</strong> ★★★★★</p>
                <div className="buttons">
                  <button className="book-now" onClick={() => handleBookNow("Taj West End")}>Book Now</button>
                </div>
              </div>
            </div>
            {/* Add similar blocks for other hotels */}
            {/* Room Card 2 */}
            <div className="room-card">
              <img src={hotelImage2} alt="ITC Gardenia" />
              <div className="room-info">
                <h3>ITC Gardenia</h3>
                <p className="price">₹10,000 per night</p>
                <p><strong>Location:</strong> Residency Road, Bengaluru</p>
                <p><strong>Facilities:</strong> Pool, Spa, Free Wifi, Conference Rooms</p>
                <p><strong>Rating:</strong> ★★★★☆</p>
                <div className="buttons">
                  <button className="book-now" onClick={() => handleBookNow("ITC Gardenia")}>Book Now</button>
                </div>
              </div>
            </div>
            {/* Room Card 3 */}
            <div className="room-card">
              <img src={hotelImage3} alt="The Oberoi" />
              <div className="room-info">
                <h3>The Oberoi</h3>
                <p className="price">₹15,000 per night</p>
                <p><strong>Location:</strong> MG Road, Bengaluru</p>
                <p><strong>Facilities:</strong> Restaurant, Gym, Free Parking, Spa</p>
                <p><strong>Rating:</strong> ★★★★★</p>
                <div className="buttons">
                  <button className="book-now" onClick={() => handleBookNow("The Oberoi")}>Book Now</button>
                </div>
              </div>
            </div>
            {/* Room Card 4 */}
            <div className="room-card">
              <img src={hotelImage4} alt="The Leela Palace" />
              <div className="room-info">
                <h3>The Leela Palace</h3>
                <p className="price">₹20,000 per night</p>
                <p><strong>Location:</strong> 23 Hal Old Airport Rd HAL 2nd Stage, Bengaluru 560008 India</p>
                <p><strong>Facilities:</strong> Spa, Gym, Free Wifi, Restaurant</p>
                <p><strong>Rating:</strong> ★★★★★</p>
                <div className="buttons">
                  <button className="book-now" onClick={() => handleBookNow("The Leela Palace")}>Book Now</button>
                </div>
              </div>
            </div>
            {/* Room Card 5 */}
            <div className="room-card">
              <img src={hotelImage5} alt="Grand Mercure Bengaluru" />
              <div className="room-info">
                <h3>Grand Mercure Bengaluru at Gopalan Mall</h3>
                <p className="price">₹24,000 per night</p>
                <p><strong>Location:</strong> Swamy Vivekananda Road, Bengaluru</p>
                <p><strong>Facilities:</strong> Free breakfast, Pool, Free Wifi, Free Parking</p>
                <p><strong>Rating:</strong> ★★★★★</p>
                <div className="buttons">
                  <button className="book-now" onClick={() => handleBookNow("Grand Mercure")}>Book Now</button>
                </div>
              </div>
            </div>
            {/* Room Card 6 */}
            <div className="room-card">
              <img src={hotelImage6} alt="Taj Yeshwantpur" />
              <div className="room-info">
                <h3>Taj Yeshwantpur, Bengaluru</h3>
                <p className="price">₹25,000 per night</p>
                <p><strong>Location:</strong> 2275 Tumkur Road Yeshwantpur, Bengaluru 560022 India</p>
                <p><strong>Facilities:</strong> Sauna, Car hire, Free Wifi, Banquet room</p>
                <p><strong>Rating:</strong> ★★★★★</p>
                <div className="buttons">
                  <button className="book-now" onClick={() => handleBookNow("Taj Yeshwantpur")}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>

      {/* Modal for booking options */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirmRoomBooking={handleRoomBooking} 
        onConfirmFlightBooking={handleFlightBooking} 
      />
    </div>
  );
};

export default Plan;
