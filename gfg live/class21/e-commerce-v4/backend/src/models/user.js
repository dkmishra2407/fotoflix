const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const user = mongoose.model('User', UserSchema);

module.exports = user;