const express = require('express');
const cors = require('cors');
const blogRouter = require('./controllers/blog');
const middleware = require('../folder-structure/utils/middleware');
const userRouter = require('./controllers/user');


const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger)
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler);


module.exports = app;
