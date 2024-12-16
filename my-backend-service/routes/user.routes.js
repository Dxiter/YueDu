// routes/user.routes.js
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller.js');

// 创建新用户
router.post('/register', userController.createUser);

// 获取所有用户
router.get('/', userController.findAllUsers);

module.exports = router;