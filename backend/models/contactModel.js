// backend/models/contactModel.js
const db = require('../config/db');

const createMessage = async (messageData) => {
  const { name, email, phone, message } = messageData;
  const result = await db.query(
    'INSERT INTO contact_messages (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, phone, message]
  );
  return result.rows[0];
};

module.exports = { createMessage };