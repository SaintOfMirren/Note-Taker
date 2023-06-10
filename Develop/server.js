// imports
const express = require('express');
const bodyParser = require('body-parser');
const clog = require('./middleware/clog');

const app = express();
const port = 3001;

app.use(clog);
app.use(express.static(__dirname + '/public'));

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use('/api',routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});