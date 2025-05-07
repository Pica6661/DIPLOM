const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', 
  contactController.validate, // Добавлена валидация
  contactController.createMessage
);

router.get('/', contactController.getMessages);

module.exports = router;