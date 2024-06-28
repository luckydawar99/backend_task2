const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true

    },
    lastname:{
     type: String,
     required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => validator.isEmail(v),
            message: 'Enter a valid email',
        },
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);
