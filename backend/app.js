const express = require('express');
const app = express();
const cors = require('cors');

// dotenv config file to store environment variables
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

// Database connection
// uncomment the line below to connect to your database after adding your database url in the .env file
// const connectDB = require('./config/db');
// connectDB();

// Middleware
app.use(cors());
app.use(express.json());


// -------------------- importing routes --------------------
const categoryRouter = require('./routes/category');
/*
    Do the same for other routes (product, brand, etc.)
    -
    -
*/



// -------------------- using routes --------------------------
app.use('/api/v1/category', categoryRouter);
/*
    Do the same for brand and product
    -
    -
*/


app.get('/', (req,res)=>{
    res.send('Welcome to the Flipkart Clone Project, Please refer README.md for more details');
})

module.exports = app;