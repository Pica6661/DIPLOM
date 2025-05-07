const ContactMessage = require('../models/ContactMessage');
const { body, validationResult } = require('express-validator');

exports.validate = [
  body('name').trim().notEmpty().withMessage('Имя обязательно'),
  body('email').isEmail().normalizeEmail().withMessage('Некорректный email'),
  body('message').trim().notEmpty().withMessage('Сообщение обязательно')
];

exports.createMessage = async (req, res) => {
  console.log('Получены данные:', req.body); // Логирование входящих данных
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, phone, message } = req.body;
    const newMessage = await ContactMessage.create({ 
      name, 
      email, 
      phone: phone || null, // Обработка отсутствующего телефона
      message 
    });
    
    console.log('Создана запись:', newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Ошибка сохранения:', error);
    res.status(500).json({ 
      error: 'Ошибка сервера',
      details: error.message 
    });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.getAll();
    res.json(messages);
  } catch (error) {
    console.error('Ошибка получения:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};