const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const SignupModel = require("./models/signup");
const RoomModel = require("./models/room");
const FlightModel = require("./models/flights");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection (Replace with Render env variable)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Signup Route
app.post('/signup', (req, res) => {
    SignupModel.create(req.body)
        .then(members => res.json(members))
        .catch(err => res.json(err));
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    SignupModel.findOne({ email, password })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("this password is incorrect");
                }
            } else {
                res.json("no record");
            }
        });
});

// Room Booking Route
app.post('/bookroom', (req, res) => {
    const { roomType, price, facilities, userEmail } = req.body;
    RoomModel.create({ roomType, price, facilities, userEmail })
        .then(room => res.json({ message: "Room booked successfully", room }))
        .catch(err => {
            console.error("Error while booking room:", err);
            res.status(500).json({ error: err.message });
        });
});

// Flight Booking Route
app.post('/book-flight', (req, res) => {
    const { flightName, price, departure, arrival, date, userEmail } = req.body;
    FlightModel.create({ flightName, price, departure, arrival, date, userEmail })
        .then(flight => res.json({ message: "Flight booked successfully", flight }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Serve Frontend static files (Vite or CRA)
app.use(express.static(path.join(__dirname, "../Frontend/dist"))); // use `../Frontend/build` if CRA

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html")); // or build/index.html
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
