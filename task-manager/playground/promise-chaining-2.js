require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('637d771555e041674c62556f')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return { task, count };
};

deleteTaskAndCount('637ed206a838ebe6df399d5b')
  .then(res => console.log(res))
  .catch(err => console.log(err));
