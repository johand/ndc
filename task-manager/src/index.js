const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const multer = require('multer');
const upload = multer({ dest: 'images' });

const app = express();
const port = process.env.PORT || 3000;

app.use('/upload', upload.single('upload'), (_req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));
