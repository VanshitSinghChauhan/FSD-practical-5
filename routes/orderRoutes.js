const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
    const { items, totalAmount } = req.body;

    if (!items || items.length === 0) {
        return res.status(400).json({ message: "Cannot place an empty order." });
    }
    if (!totalAmount || totalAmount <= 0) {
        return res.status(400).json({ message: "Invalid total amount." });
    }

    const newOrder = { 
        id: orders.length + 1, 
        items, 
        totalAmount, 
        date: new Date() 
    };
    
    orders.push(newOrder);
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
});

module.exports = router;