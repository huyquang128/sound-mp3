const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_DB);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
};

module.exports = connectDB;
