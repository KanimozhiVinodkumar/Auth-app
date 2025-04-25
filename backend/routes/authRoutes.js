// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { register, login, dashboard } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', auth, dashboard);

module.exports = router;
