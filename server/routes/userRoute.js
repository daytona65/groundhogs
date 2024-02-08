const router = require("express").Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({errorMessage: "Please enter all required fields."});
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({errorMessage: "An account with this email already registered."});
        }

        // Hash password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        // Create new user
        const newUser = User({
            email: email,
            password: passwordHash
        });
        const savedUser = await newUser.save();

        // Sign token
        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_KEY);

        // Send token to cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();

    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ errorMessage: "Please enter all required fields." });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ errorMessage: "Wrong email or password." });
        }
        
        const passwordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!passwordCorrect) {
            return res.status(401).json({ errorMessage: "Wrong email or password." });
        }
        
        // Sign the token
        const token = jwt.sign({
            user: existingUser._id,
        }, process.env.JWT_KEY);

        // Send the token to cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }).send();

    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      }).send();
});

module.exports = router;