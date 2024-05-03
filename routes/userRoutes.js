const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const Help = require('../models/Help');
const Consult = require('../models/Consult');




router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});



router.post('/consult', async (req,res) => {
   try {
    const {consultFor,patientName,phoneNumber,email, selectDate} = req.body;
    const newUser = new Consult({consultFor,patientName,phoneNumber,email, selectDate});
    await newUser.save();
    res.status(201).send('cossult booked succsessfully...');
   } catch (error) {
      res.status(400).send({message: error.message});
   };
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Include the username in the response
    res.status(200).json({ message: 'Login successful', username: user.username });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/protected-route', authMiddleware, (req, res) => {
  res.status(200).send('Authenticated and authorized to access this route');
});

router.get('/user', authMiddleware, async (req, res) => {
  try {
    res.status(200).json({ username: req.user.username });
  } catch (error) {
    console.error('Failed to fetch user name:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


  module.exports = router;
