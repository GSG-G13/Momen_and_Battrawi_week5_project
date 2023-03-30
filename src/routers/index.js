const express = require('express');

const router = express.Router();
const {
  handleSearch, staticFiles,
} = require('../controllers');

router.get('/', staticFiles);

router.get('/search', handleSearch);

module.exports = router;
