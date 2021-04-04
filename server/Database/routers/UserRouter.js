const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController.js')

router.post('/user', User.createUser)

module.exports = router