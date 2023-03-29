const express = require('express');

const router = express.Router();
const {
  handleSearch, notFoundError, serverError,
} = require('../controllers');

router.post('/search', handleSearch);

router.get(notFoundError);
router.use(serverError);

module.exports = router;
