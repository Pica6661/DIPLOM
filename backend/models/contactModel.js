const db = require('../config/db');

class ContactMessage {
  static async create({ name, email, phone, message }) {
    const { rows } = await db.query(
      `INSERT INTO public.contact_message 
       (name, email, phone, message) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [name, email, phone, message]
    );
    return rows[0];
  }

  static async getAll() {
    const { rows } = await db.query(
      `SELECT * FROM public.contact_message 
       ORDER BY created_at DESC`
    );
    return rows;
  }
}

module.exports = ContactMessage;