const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
});

const me = new User({ name: '  Foo  ', email: 'FOO@FOO.COM  ' });

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log('Error!', error);
  });

// const Tasks = mongoose.mozdel('Tasks', {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });
//
// const task = new Tasks({ description: 'qwerty', completed: 5 });
//
// task
//   .save()
//   .then(() => console.log(task))
//   .catch(err => console.log(err));
