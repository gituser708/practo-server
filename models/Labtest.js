// LabTest.js

const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  testName: { type: String, required: true },
  price: { type: Number, required: true },
  content: { type: String, required: true },
  formData: {
    patientName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: true },
    pincode: { type: String, required: true },
    selectedDate: { type: Date, required: true }
  }
});

const LabTest = mongoose.model('LabTest', labTestSchema);

module.exports = LabTest;
