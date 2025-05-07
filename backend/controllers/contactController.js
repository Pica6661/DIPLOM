// backend/controllers/contactController.js
const { createMessage } = require('../models/contactModel');

const submitMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await createMessage({ name, email, phone, message });
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при отправке сообщения' });
  }
};

module.exports = { submitMessage };