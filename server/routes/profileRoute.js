const router = require("express").Router();
const User = require("../models/userModel")
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

module.exports = router;