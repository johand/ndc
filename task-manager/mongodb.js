const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.id.length);
console.log(id.toHexString().length);

const main = async () => {
  await client.connect();
  const db = client.db(databaseName);

  // try {
  //   await db
  //     .collection('users')
  //     .insertOne({ name: 'Vikram', age: 26 });
  // } catch (error) {
  //   return console.log('Unable to insert user');
  // }

  // try {
  //   const result = await db.collection('users').insertMany([
  //     { Name: 'Bar', age: 25 },
  //     { Name: 'Biz', age: 27 },
  //   ]);
  //
  //   console.log(result);
  // } catch (error) {
  //   return console.log('Unable to insert documents!');
  // }

  // try {
  //   const result = await db.collection('tasks').insertMany([
  //     { description: 'qwerty', completed: true },
  //     { description: 'zxcvbn', completed: false },
  //     { description: 'hjkl', completed: true },
  //   ]);
  //
  //   console.log(result);
  // } catch (error) {
  //   return console.log(error);
  // }
};

main();
