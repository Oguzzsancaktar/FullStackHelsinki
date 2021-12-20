const express = require('express');
const cors = require('cors');
const blogRouter = require('./controllers/blog');
const middleware = require('./utils/middleware');
const userRouter = require('./controllers/user');
const loginRouter = require('./controllers/login');


const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger)


app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler);


module.exports = app;
