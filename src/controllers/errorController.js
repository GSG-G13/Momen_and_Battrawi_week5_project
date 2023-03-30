/* eslint-disable no-unused-vars */
const path = require('path');

const notFoundError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'error404.html'));
};

const serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'error500.html'));
  next();
};
module.exports = { notFoundError, serverError };
