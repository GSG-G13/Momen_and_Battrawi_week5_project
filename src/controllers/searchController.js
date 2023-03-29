// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');

const handleSearch = (req, res) => {
  fetch('https://newsapi.org/v2/everything?q=technology&apiKey=0b3034cefeed4f4c98c1bc4d0edc5e23')
    .then((data) => data.json())
    .then((result) => {
      res.json(result);
    })
    .catch((err) => { throw new Error(err); });
};

module.exports = handleSearch;
