const mongoose = require('mongoose');

const userChema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: String,
    email: String,
    birthday: Date,
    name: String,
    city: String,
    country: String,
    avatar: {
        cloud_id: String,
        url: String,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userChema);
module.exports = User;
