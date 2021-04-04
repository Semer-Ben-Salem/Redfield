const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController.js')

router.post('/signup', User.createUser)

module.exports = router ;