const router = require("express").Router();
const { User } = require("../model/user/User");

const bcrypt = require('bcrypt');
const saltRounds = 10;
const someOtherPlaintextPassword = 'iAmAhmed';


router.post("/login", async (req, res) => {
    try {
        // Assuming you are expecting email and password in the request body
        const { email, password } = req.body;
        // Find the user based on email and password (you might want to add validation here)
        const user = await User.findOne({ email, password });

        if (user) {
            // User found, send success response
            res.status(200).send({
                user,
                success: true,
                message: "Login Successfully",
            });
        } else {
            // User not found, send failure response
            res.status(401).send({
                success: false,
                message: "Invalid credentials",
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
});



module.exports = router;
