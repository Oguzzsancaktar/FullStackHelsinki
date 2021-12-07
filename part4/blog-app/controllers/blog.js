const Blog = require('../models/blog');
const mongoose = require('mongoose');
const config = require('../utils/config');
const blogRouter = require('express').Router();

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('DB conencted');
  })
  .catch((e) => {
    console.log('DB connection error: ', e);
  });

blogRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post('/', (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogRouter;
