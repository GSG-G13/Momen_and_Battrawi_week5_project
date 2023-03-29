const express = require('express');

// eslint-disable-next-line import/no-extraneous-dependencies
const compression = require('compression');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
