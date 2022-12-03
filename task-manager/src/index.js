const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently  down, Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('638a8a4d04466e8e9194983d');
  // await task.populate('owner');
  // console.log(task.owner);

  const user = await User.findById('63894d770cb9bc6c7f938450');
  await user.populate('tasks');
  console.log(user.tasks);
};

main();
