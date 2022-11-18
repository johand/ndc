const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);
const databaseName = 'task-manager';

const main = async () => {
  await client.connect();
  const db = client.db(databaseName);

  // try {
  //   const result = await db
  //     .collection('users')
  //     .findOne({ _id: ObjectId('63780313c9a90d2f98369fef') });
  //
  //   console.log(result);
  // } catch (err) {
  //   return console.log(err);
  // }

  // try {
  //   const result = await db.collection('users').find({ age: 50 }).toArray();
  //
  //   console.log(result);
  // } catch (err) {
  //   return console.log(err);
  // }
  //
  // try {
  //   const result = await db.collection('users').countDocuments();
  //
  //   console.log(result);
  // } catch (err) {
  //   return console.log(err);
  // }

  try {
    const result = await db
      .collection('tasks')
      .findOne({ _id: ObjectId('6376f4742a3510e589184d56') });

    console.log(result);
  } catch (err) {
    return console.log(err);
  }

  try {
    const result = await db
      .collection('tasks')
      .find({ completed: false })
      .toArray();

    console.log(result);
  } catch (err) {
    return console.log(err);
  }
};

main();
