// Импорты
const express = require('express');
const cors = require('cors'); // ✅ Только один раз

// Роуты
const productRoutes = require('./routes/productRoutes');

// Создание сервера
const app = express();

// Middleware
app.use(cors()); // Включение CORS
app.use(express.json()); // Парсинг JSON из тела запроса
app.use(express.urlencoded({ extended: true })); 

// Роуты
app.use('/api/products', productRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const cors = require('cors');

// После создания app:
app.use(cors({
  origin: 'http://localhost:3000', // Укажите ваш фронтенд-адрес
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));