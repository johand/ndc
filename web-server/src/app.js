const express = require('express');

const app = express();

app.get('', (_req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (_req, res) => {
  res.send([
    {
      name: 'Foo',
    },
    {
      name: 'Sarah',
    },
  ]);
});

app.get('/about', (_res, res) => {
  res.send('<h1>About page</h1>');
});

app.get('/weather', (_req, res) => {
  res.send({
    location: 'Philadelphia',
    forecast: 'It is snowing',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
