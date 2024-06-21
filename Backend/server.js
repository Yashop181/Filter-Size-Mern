const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const cors = require('cors');
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server running on port ${PORT}`))