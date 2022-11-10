const express = require('express');

const app = express();

app.get('', (_req, res) => {
  res.send('Hello express!');
});

app.get('/help', (_req, res) => {
  res.send('Help page');
});

app.get('/about', (_res, res) => {
  res.send('About page');
});

app.get('/weather', (_req, res) => {
  res.send('Weather page');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
