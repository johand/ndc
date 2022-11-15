console.log('Client side javascript file is loaded');

fetch('http://localhost:3000/weather?address=boston').then(res => {
  res.json().then(data => {
    if (data.error) {
      return console.log(data.error);
    }

    console.log(data.location);
    console.log(data.forecast);
  });
});
