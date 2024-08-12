const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    designation: {
        type: String,
        required: true,
        enum: ["Principal", "Teacher", "Student"]
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;