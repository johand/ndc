console.log('Client side javascript file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        return console.log(data.error);
      }

      console.log(data.location);
      console.log(data.forecast);
    });
  });
});
