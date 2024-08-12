const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    day: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true
    },
    classes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classes",
        default: [],
    }
})

const Classroom = mongoose.model("Classroom", classroomSchema);
module.exports = Classroom;