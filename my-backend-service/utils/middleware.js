// utils/middleware.js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

module.exports = {
  logger,
  errorHandler
};