const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=my_key&query=37.8267,-122.4233';

request({ url: url }, (_err, res) => {
  const data = JSON.parse(res.body);
  console.log(data.current);
});
