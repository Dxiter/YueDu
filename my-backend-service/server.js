// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models');
const userRoutes = require('./routes/user.routes');
const { logger, errorHandler } = require('./utils/middleware');

// 中间件
app.use(express.json());
app.use(logger);

// 使用路由
app.use('/users', userRoutes);

// 错误处理中间件
app.use(errorHandler);

// 同步数据库
db.sequelize.sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});