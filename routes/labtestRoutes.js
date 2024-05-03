// labtestRoutes.js

const express = require('express');
const router = express.Router();
const LabTest = require('../models/Labtest');

// Get all lab tests
router.get('/labtests', async (req, res) => {
  try {
    const labTests = await LabTest.find();
    res.json(labTests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Book a lab test
router.post('/labBook', async (req, res) => {
  try {
    const { testId, formData } = req.body;
    const labTest = await LabTest.findById(testId);
    if (!labTest) {
      return res.status(404).json({ message: 'Lab test not found' });
    }

    labTest.formData = formData;
    await labTest.save();

    res.json({ message: 'Booking successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
