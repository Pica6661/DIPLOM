// backend/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Роуты
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;
// backend/app.js
const cartRoutes = require('./routes/cartRoutes');

app.use('/api/cart', cartRoutes); // Добавляем маршруты корзиныS