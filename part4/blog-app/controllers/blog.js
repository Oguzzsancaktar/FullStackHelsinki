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

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({});
  response.send(blogs);
});

blogRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body);

  try {
    const result = await blog.save();

    response.status(201).json(result);
  } catch (error) {
    response.status(400).send(error);
  }
});

blogRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedBlog = await Blog.findByIdAndDelete(id);

  res.send(deletedBlog);
});

blogRouter.get('/favoriteBlog', async (req, res) => {
  let mostLike = 0;
  const blogs = await Blog.find({});

  blogs.map((blog) =>
    blog.likes > mostLike ? (mostLike = blog.likes) : mostLike
  );

  const favBlog = await Blog.find({ likes: mostLike });
  res.send(favBlog);
});

module.exports = blogRouter;
