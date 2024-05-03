const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    consultFor: { type: String, required: true,},
    patientName: { type: String, required: true },
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    selectDate: {type: String, required: true},
});

   const Consult = mongoose.model('Consult', userSchema);

      module.exports = Consult;