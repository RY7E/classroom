const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Home Page");
})


app.use("/api/auth", authRoutes)


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to DB.")

    } catch (error) {
        console.log("Error connecting to DB.", error.message)
    }
}


app.listen(PORT, () => {
    connect();
    console.log(`Server running on port: ${PORT}`)
})