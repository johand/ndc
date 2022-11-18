const mongodb = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const MongoClient = new mongodb.MongoClient(connectionURL);
const databaseName = 'task-manager';

const main = async () => {
  await MongoClient.connect();
  const db = MongoClient.db(databaseName);

  // try {
  //   await db.collection('users').insertOne({ name: 'Foo', age: 50 });
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

  try {
    const result = await db.collection('tasks').insertMany([
      { description: 'qwerty', completed: true },
      { description: 'zxcvbn', completed: false },
      { description: 'hjkl', completed: true },
    ]);

    console.log(result);
  } catch (error) {
    return console.log(error);
  }
};

main();
