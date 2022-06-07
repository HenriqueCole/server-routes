const express = require('express');
const app = express();
const people = require('./api/people');
const users = require('./api/users');
const boletos = require('./api/boletos');

app.use(express.json());

app.use('/api/people', people.router);
app.use('/api/users', users.router);
app.use('/api/boletos', boletos.router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});