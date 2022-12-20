'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to the cloud sever.');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('We made it!')
});

app.listen(PORT, () => console.log('logging in on port'))
