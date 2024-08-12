const express = require('express');
const User = require('../models/userModel.js');
const generate = require('../utils/generateToken.js');

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password, designation } = req.body;
        const user = await User.findOne({email});

        if (user) {return res.status(400).json({error: "User already exists."})}

        // Hash Password

        const newUser = new User({
            fullName,
            email,
            password,
            designation,
        })

        if (newUser) {
            generate(newUser, res);

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName
            })

        }

    } catch (error) {
        console.log("Error in Signup in authRoutes.", error.message)
        res.status(500).json({error: "Internal Server Error."})
    }
})

router.post("/login", async (req, res) => {
    try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = (password === user.password);

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generate(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
            designation: user.designation,
		});
	} catch (error) {
		console.log("Error in Login in authRoutes.", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
})

router.get("/logout", (req, res) => {
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
})

router.get("/teacher/create", (req, res) => {
    res.send("Teacher Creation Route");
})

router.get("/student/create", (req, res) => {
    res.send("Student Creation Route");
})

module.exports = router;