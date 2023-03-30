// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const apiKey = process.env.API_KEY;

const handleSearch = (req, res) => {
  if (req.query.keyword === 'top') {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((data) => data.json())
      .then((result) => {
        res.json(result);
      })
      .catch((err) => { throw new Error(err); });
  } else {
    fetch(`https://newsapi.org/v2/everything?q=${req.query.keyword}&apiKey=${apiKey}`)
      .then((data) => data.json())
      .then((result) => {
        res.json(result);
      })
      .catch((err) => { throw new Error(err); });
  }
};

module.exports = handleSearch;
