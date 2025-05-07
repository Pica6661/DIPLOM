const ContactMessage = require('../models/ContactMessage');

exports.createMessage = async (req, res) => {
  try {
    console.log('Получены данные:', req.body); // Логирование входящих данных
    
    const { name, email, phone, message } = req.body;
    const newMessage = await ContactMessage.create({ name, email, phone, message });
    
    console.log('Создана запись:', newMessage); // Логирование результата
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Ошибка создания:', error); // Логирование ошибки
    res.status(500).json({ 
      error: 'Ошибка при создании сообщения',
      details: error.message 
    });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.getAll();
    console.log('Найдены записи:', messages); // Логирование результата
    res.json(messages);
  } catch (error) {
    console.error('Ошибка получения:', error);
    res.status(500).json({ 
      error: 'Ошибка при получении сообщений',
      details: error.message 
    });
  }
};