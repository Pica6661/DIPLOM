require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');
const apiRouter = require('./config/app'); // Измененный импорт

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключение к БД
const { pool } = require('./config/db');
pool.query('SELECT NOW()')
  .then(() => console.log('Проверка подключения к БД успешна'))
  .catch(err => console.error('Ошибка подключения к БД:', err));

// Маршруты
app.use('/api', apiRouter); // Используем роутер напрямую

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});