const request = require('postman-request');
const geocode = require('./utils/geocode');

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
