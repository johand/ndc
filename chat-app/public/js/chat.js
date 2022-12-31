const socket = io();

// Elements
const $messageForm = document.querySelector('#msg-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');
const $messages = document.querySelector('#messages');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationTemplate = document.querySelector('#location-template').innerHTML;

socket.on('message', msg => {
  console.log(msg);

  const html = Mustache.render(messageTemplate, {
    message: msg.text,
    createdAt: moment(msg.createdAt).format('h:mm a'),
  });

  $messages.insertAdjacentHTML('beforeend', html);
});

socket.on('locationMessage', url => {
  console.log(url);
  const html = Mustache.render(locationTemplate, { url });
  $messages.insertAdjacentHTML('beforeend', html);
});

$messageForm.addEventListener('submit', e => {
  e.preventDefault();

  // disabled
  $messageFormButton.setAttribute('disabled', 'disabled');

  const message = e.target.elements.message.value;

  socket.emit('sendMessage', message, error => {
    // enable
    $messageFormButton.removeAttribute('disabled');
    $messageFormInput.value = '';
    $messageFormInput.focus();

    if (error) {
      return console.log(error);
    }

    console.log('Message delivered!');
  });
});

$sendLocationButton.addEventListener('click', () => {
  $sendLocationButton.setAttribute('disabled', 'disabled');

  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser.');
  }

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    socket.emit('sendLocation', { latitude, longitude }, () => {
      $sendLocationButton.removeAttribute('disabled');
      console.log('Location shared!');
    });
  });
});
