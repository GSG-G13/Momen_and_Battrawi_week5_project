const express = require('express');
const router = express();
const { notFoundError, serverError} =require("../controllers/errorController");
router.use(notFoundError);
router.use(serverError);