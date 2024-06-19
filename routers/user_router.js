const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.route('/').put(userController.createUser).get(userController.getUsers);