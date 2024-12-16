// controllers/user.controller.js
const db = require('../models');
const User = db.user;

exports.createUser = (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findAllUsers = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};