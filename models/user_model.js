const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    occupation: {
        type: String,
        required: [true, 'Please tell us your occupation']
    }
});

userSchema.index({name: 'text', occupation: 'text'});

const User = mongoose.model("User", userSchema);

module.exports = User;