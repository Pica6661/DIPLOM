// backend/models/userModel.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const findUserByEmail = async (email) => {
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const createUser = async (user) => {
  const { name, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashedPassword]
  );

  return result.rows[0];
};

module.exports = { findUserByEmail, createUser };