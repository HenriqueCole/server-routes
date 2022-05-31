const express = require('express');
const app = express();
const people = require('./api/people');

app.use(express.json());

app.use('/api/people', people.router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


