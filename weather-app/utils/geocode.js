const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=my_key&query=${encodeURIComponent(
    address,
  )}`;

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback('Unable to connect to location service!', undefined);
    } else if (res.body.error) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { label, longitude, latitude } = res.body.data[0];

      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: label,
      });
    }
  });
};

module.exports = geocode;
