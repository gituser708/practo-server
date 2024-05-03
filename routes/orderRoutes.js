const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { name, email, landmark, city, pincode, product } = req.body;
    
    // Create a new order object
    const order = new Order({ name, email, landmark, city, pincode, product });
    
    // Save the order to the database
    await order.save();
    
    // Respond with a success message
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    // If an error occurs, log it and respond with an error message
    console.error(error);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

module.exports = router;
