const jwt = require('jsonwebtoken');

const generate = (user, res) => {
    const token = jwt.sign({userId: user._id, designation: user.designation}, process.env.JWT_SECRET);

    res.cookie("token", token)
}

module.exports = generate;