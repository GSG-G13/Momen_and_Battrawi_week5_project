const express = require('express');

const router = express.Router();
const {
  handleSearch, notFoundError, serverError, staticFiles,
} = require('../controllers');

router.get('/', staticFiles);

router.get('/search', handleSearch);

router.get(notFoundError);
router.use(serverError);

module.exports = router;
