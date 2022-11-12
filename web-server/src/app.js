const path = require('path');
const express = require('express');

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (_req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Foo bar',
  });
});

app.get('/about', (_req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Foo bar',
  });
});

app.get('/help', (_req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
  });
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
