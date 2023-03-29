const { notFoundError, serverError } = require('./errorController');
const handleSearch = require('./searchController');
// const handleSearchPage = require('./searchResultHandler');

module.exports = {
  notFoundError,
  serverError,
  handleSearch,
};
