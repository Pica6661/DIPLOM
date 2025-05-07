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

// Роуты
app.use('/api/products', productRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});