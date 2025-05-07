// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser } = require('../models/userModel');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ error: 'Пользователь не найден' });

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ error: 'Неверный пароль' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при входе' });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await findUserByEmail(email);
    if (existing) return res.status(400).json({ error: 'Пользователь уже существует' });

    const user = await createUser({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка регистрации' });
  }
};

module.exports = { login, register };