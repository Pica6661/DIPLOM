const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'plumbing_store',
  password: process.env.DB_PASSWORD || '12345', // замените на ваш пароль
  port: process.env.DB_PORT || 5432,
});

// Проверка подключения
pool.query('SELECT NOW()')
  .then(() => console.log('✅ PostgreSQL подключён'))
  .catch(err => console.error('❌ Ошибка подключения к PostgreSQL:', err));

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};