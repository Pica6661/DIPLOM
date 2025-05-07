const db = require('../config/db');

class ContactMessage {
  static async create({ name, email, phone, message }) {
    console.log('Сохранение в БД:', { name, email, phone, message });
    
    const { rows } = await db.query(
      `INSERT INTO public.contact_message 
       (name, email, phone, message) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id, name, email, phone, message, created_at`,
      [name, email, phone, message]
    );
    
    return rows[0];
  }

  static async getAll() {
    const { rows } = await db.query(
      `SELECT id, name, email, phone, message, created_at 
       FROM public.contact_message 
       ORDER BY created_at DESC`
    );
    return rows;
  }
}

module.exports = ContactMessage;