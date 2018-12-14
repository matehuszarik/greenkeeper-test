const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

app.use((req, res, next) => {
  console.debug(`Incoming ${req.method} ${req.path} request`);
  next();
});
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({
    status: 'ok'
  });
});

app.post('/mirror', (req, res) => {
  res.send(req.body);
})

app.listen(config.port, () => {
  console.info(`Server is running on port ${config.port}`);
});

module.exports = app;