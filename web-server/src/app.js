const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/weather', (_req, res) => {
  res.send({
    location: 'Philadelphia',
    forecast: 'It is snowing',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
