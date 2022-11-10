const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=my_key&query=45,-75&units=f`;

const res = http.request(url, res => {
  let data = '';

  res.on('data', chunk => {
    data = data + chunk.toString();
  });

  res.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

res.on('error', error => {
  console.log('An error', error);
});

res.end();
