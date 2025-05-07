const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Роут POST /api/products
router.post('/', async (req, res) => {
    try {
        // ✅ Теперь req определён, потому что мы внутри обработчика
        console.log("Received product data:", req.body);

        const { title, description, price, image } = req.body;

        await db.query(
            'INSERT INTO products (title, description, price, image) VALUES ($1, $2, $3, $4)',
            [title, description, price, image]
        );

        res.status(201).send('Product added');
    } catch (error) {
        console.error('Error inserting product:', error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;