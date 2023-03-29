const { notFoundError, serverError } = require('./errorController');
const handleSearch = require('./searchController');
const staticFiles = require('./staticFiles');
// const handleSearchPage = require('./searchResultHandler');

module.exports = {
  notFoundError,
  serverError,
  handleSearch,
  staticFiles,
};
