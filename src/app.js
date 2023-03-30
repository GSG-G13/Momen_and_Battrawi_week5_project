// This is all hopefully familiar by now
const express = require('express');

const routes = require('./routers');
const {
  notFoundError, serverError,
} = require('./controllers');

const app = express();

// Parses the request payload (if JSON) before the request goes to the handler
app.use(express.json());
app.use(routes);

app.use(express.static('public'));

app.use(notFoundError);
app.use(serverError);

module.exports = app;
