const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'testUser',
  email: 'testUser@example.com',
  password: '1234567',
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

afterAll(() => {
  mongoose.connection.close();
});

test('Should sign up a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'asdf',
      email: 'asdf@asdf.com',
      password: '1234567',
    })
    .expect(201);
});

test('Should login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test('Should not login nonexistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: 'wrongPassword',
    })
    .expect(400);
});
