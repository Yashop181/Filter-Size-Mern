const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const productsRoutes = require('./routes/productRoutes');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cors());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/api/products',productsRoutes)
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server running on port ${PORT}`))