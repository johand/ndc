const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: 'testUser',
  email: 'testUser@example.com',
  password: '1234567',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const setupDatabase = async () => {
  await User.deleteMany();
  await new User(userOne).save();
};

afterAll(() => {
  mongoose.connection.close();
});

module.exports = { userOneId, userOne, setupDatabase };
