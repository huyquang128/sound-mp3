const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = 3000;
require('dotenv').config();
var cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth-route');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/v1/auth', authRoute);

//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
