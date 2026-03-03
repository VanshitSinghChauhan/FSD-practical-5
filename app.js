
const mongoose = require("mongoose");
const express = require('express');
const app = express();

app.use(express.json());

// Import Routes
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Use Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err.stack);
    res.status(500).json({
        status: "Failure",
        message: "Something went wrong on our end."
    });
});

const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/practical6")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
