const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: "Please provide a valid email address." });
    }
    if (!password || password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters." });
    }

    const newUser = { id: users.length + 1, email };
    users.push(newUser);
    res.status(201).json({ message: "User created!", user: newUser });
});

module.exports = router;