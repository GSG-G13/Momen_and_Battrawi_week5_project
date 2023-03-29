const path = require('path');

const staticFiles = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'index.html'));
};

module.exports = staticFiles;
