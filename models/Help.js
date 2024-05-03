const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    selectIssue: { type: String, required: true,},
    username: { type: String, required: true },
    phonenumber: {type: String, required: true},
    selectYouAre: {type: String, required: true},
    query: {type: String, required: true},
});
    
    const Help = mongoose.model('Help', userSchema);
         
    module.exports = Help;