const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    email: String,
    password: String, // Change this from 'passward' to 'password'
    confirmPassword: String // Change this from 'confirmPassward' to 'confirmPassword'
});

const SignupModel = mongoose.model("members", SignupSchema);
module.exports = SignupModel;
