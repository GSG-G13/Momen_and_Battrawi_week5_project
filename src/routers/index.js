const express = require('express');
const path = require('path');

const router = express.Router();
const {
  handleSearch, notFoundError, serverError,
} = require('../controllers');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'index.html'));
});

router.get('/search', handleSearch);

router.get(notFoundError);
router.use(serverError);

module.exports = router;
