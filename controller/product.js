const express = require('express');
const router = express.Router();

let products = [{ id: 1, name: "Creed Aventus", price: 5000 }, 
    { id: 2, name: "Dior Sauvage", price: 10000 }, 
    { id: 3, name: "Tom Ford", price: 15000 }
];

router.get('/', (req, res) => {
    res.json(products);
});

router.post('/', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: "Name and Price are required!" });
    }

    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

module.exports = router;
