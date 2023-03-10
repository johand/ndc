require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('637ab98af9160bda5ff3e970', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { user, count };
};

updateAgeAndCount('637ab98af9160bda5ff3e970', 2)
  .then(result => console.log(result))
  .catch(err => console.log(err));
