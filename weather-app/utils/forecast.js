const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=my_key&query=${encodeURIComponent(
    latitude,
  )},${encodeURIComponent(longitude)}&units=f`;

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (res.body.error) {
      callback('Unable to find location', undefined);
    } else {
      const { temperature, feelslike, weather_descriptions } = res.body.current;
      callback(
        undefined,
        `${weather_descriptions[0]}. It's currently ${temperature} degress out. It feels like ${feelslike} degress out.`,
      );
    }
  });
};

module.exports = forecast;
