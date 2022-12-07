const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const multer = require('multer');
const upload = multer({
  dest: 'images',
  limits: { fileSize: 1000000 },
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a Word Document'));
    }

    cb(undefined, true);
  },
});

const app = express();
const port = process.env.PORT || 3000;

app.post(
  '/upload',
  upload.single('upload'),
  (_req, res) => {
    res.send();
  },
  (err, _req, res, _next) => {
    res.status(400).send({ error: err.message });
  },
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));
