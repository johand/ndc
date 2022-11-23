require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('637d771555e041674c62556f')
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));
