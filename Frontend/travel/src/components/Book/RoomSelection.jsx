import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making requests
import './Booknow.css'; // Import your CSS file for styling
import roomImage1 from '../../assets/images/n.jpeg'; // Replace with your actual room images
import roomImage2 from '../../assets/images/s.jpeg';
import roomImage3 from '../../assets/images/su.jpeg';
import roomImage4 from '../../assets/images/d.jpeg';
import roomImage5 from '../../assets/images/t.jpeg';
import roomImage6 from '../../assets/images/si.jpeg';
import PaymentPopup from '../../Payment/PaymentPopup'; // Correct import path

const RoomSelection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      price: '₹15,000',
      facilities: 'King-sized bed, Free Wifi, Ocean view',
      image: roomImage1,
    },
    {
      id: 2,
      name: 'Superior Room',
      price: '₹12,000',
      facilities: 'Queen-sized bed, Free Wifi, City view',
      image: roomImage2,
    },
    {
      id: 3,
      name: 'Suite Room',
      price: '₹20,000',
      facilities: 'Living area, Free Wifi, Balcony',
      image: roomImage3,
    },
    {
      id: 4,
      name: 'Deluxe Double Room',
      price: '₹18,000',
      facilities: 'King-sized bed, Free Wifi, Ocean view',
      image: roomImage4,
    },
    {
      id: 5,
      name: 'Twin Room',
      price: '₹10,000',
      facilities: 'Queen-sized bed, Free Wifi, City view',
      image: roomImage5,
    },
    {
      id: 6,
      name: 'Single Room Bed',
      price: '₹2,000',
      facilities: 'Queen-sized bed, Free Wifi, City view',
      image: roomImage6,
    },
  ];

  // Function to handle booking confirmation and show the payment popup
  const handleConfirmBooking = () => {
    if (!selectedRoom) return; // Prevent if no room is selected
    if (showPaymentPopup) return; // Prevent showing popup again
    setShowPaymentPopup(true); // Show payment popup
  };

  // Function to handle payment and store data in MongoDB
  const handlePayNow = async () => {
    if (!selectedRoom) return; // Prevent booking if no room is selected

    const bookingDetails = {
      roomType: selectedRoom.name,
      price: selectedRoom.price,
      facilities: selectedRoom.facilities,
      userEmail: 'user@example.com', // Replace with the actual user email
    };

    try {
      const response = await axios.post('http://localhost:5001/bookroom', bookingDetails); // Using Axios for the POST request

      if (response.status === 200) {
        console.log('Booking successful:', response.data);
        alert('Room booked successfully!');
        setShowPaymentPopup(false); // Close the payment popup after successful booking
      }
    } catch (error) {
      console.error('Error booking room:', error);
      alert('Failed to book room');
    }
  };


  return (
    <div>
      <header>
        {/* Add header content here */}
      </header>
      <main>
        <section className="room-selection">
          <h2>Select a Room</h2>
          <div className="rooms-container">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <img src={room.image} alt={room.name} />
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <p className="price">{room.price} per night</p>
                  <p><strong>Facilities:</strong> {room.facilities}</p>
                  <div className="buttons">
                    <button className="book-now" onClick={() => setSelectedRoom(room)}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Display confirmation section when a room is selected */}
          {selectedRoom && !showPaymentPopup && (
            <div className="confirmation">
              <h3>You have selected: {selectedRoom.name}</h3>
              <button className="confirm-booking" onClick={handleConfirmBooking}>Confirm Booking</button>
            </div>
          )}

          {/* Display the payment popup */}
          {showPaymentPopup && <PaymentPopup onPayNow={handlePayNow} />}
        </section>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default RoomSelection;
