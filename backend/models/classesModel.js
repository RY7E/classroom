const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    },
    students: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }
})

const Classes = mongoose.model('Classes', classesSchema);
module.exports = Classes;