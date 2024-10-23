const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  flightName: String,   // E.g., "Flight 101"
  price: String,        // E.g., "₹10,000"
  departure: String,    // E.g., "Bangalore"
  arrival: String,      // E.g., "Mumbai"
  date: Date,           // Flight departure date
  userEmail: String,    // Email of the user who booked the flight
  bookedAt: {
    type: Date,
    default: Date.now
  }
});

const FlightModel = mongoose.model("flights", FlightSchema);
module.exports = FlightModel;
