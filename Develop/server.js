const express = require('express');
const bodyParser = require('body-parser');
const clog = require('./clog');

const app = express();
const port = 3000;

const routes = require('./routes');

app.use(bodyParser.json());
app.use(clog);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});