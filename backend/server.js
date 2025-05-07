require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db');
const appConfig = require('./config/app');

// Подключение к БД
db.connect();

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.use('/api', appConfig.routes());

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});