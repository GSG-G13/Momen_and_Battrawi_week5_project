const handleSearch = (req, res) => {
  fetch(`https://newsapi.org/v2/everything?q=${req.body}&apiKey=${process.env.API_KEY}`)
    .then((data) => data.json())
    .then((result) => res.json(result))
    .catch((err) => { throw new Error(err); });
};

module.exports = handleSearch;
