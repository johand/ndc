const request = require('supertest');
const app = require('../src/app');

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
