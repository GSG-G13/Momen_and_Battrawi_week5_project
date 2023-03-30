/* eslint-disable no-console */
/* We split the server out into a different file so that our tests don't hang
because the server is listening still */
const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The things, the things are happening on ${port}!!`);
  console.log('You can also do this... to show the port %d', port);
});
