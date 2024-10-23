const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomType: String,   // E.g., "Deluxe Room", "Suite"
  price: String,      // E.g., "₹15,000 per night"
  facilities: String, // E.g., "Free Wifi, Ocean view"
  userEmail: String,  // Email of the user who booked the room
  bookedAt: {
    type: Date,
    default: Date.now
  }
});

const RoomModel = mongoose.model("new rooms", RoomSchema);
module.exports = RoomModel;
