const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=my_key&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (_err, res) => {
  const { temperature, feelslike, weather_descriptions } = res.body.current;
  console.log(
    `${weather_descriptions[0]}. It's currently ${temperature} degress out. It feels like ${feelslike} degress out.`,
  );
});
