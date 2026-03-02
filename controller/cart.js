
const express = require('express');
const router = express.Router();

let cart = []; 

router.get('/', (req, res) => {
    res.json({ message: "Your cart items", data: cart });
});

router.post('/', (req, res) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json({ message: "Missing product ID or quantity" });
    }

    cart.push({ productId, quantity });
    res.status(201).json({ message: "Added to cart" });
});

module.exports = router;
