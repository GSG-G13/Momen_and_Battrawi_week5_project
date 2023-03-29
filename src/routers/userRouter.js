const express = require('express');

const router = express.Router();
const { notFoundError, serverError } = require('../controllers/errorController');

router.use(notFoundError);
router.use(serverError);
