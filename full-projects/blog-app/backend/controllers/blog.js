const Blog = require('../models/blog');
const mongoose = require('mongoose');
const config = require('../utils/config');
const blogRouter = require('express').Router();
// const logger = require('../utils/logger')

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

// blogRouter.delete('/:id', async (req, res) => {
//   const id = req.params.id;
//   const deletedBlog = await Blog.findByIdAndDelete(id);

//   res.send(deletedBlog);
// });

blogRouter.get('/favoriteBlog', async (req, res) => {
  let mostLike = 0;
  const blogs = await Blog.find({});

  blogs.map((blog) =>
    blog.likes > mostLike ? (mostLike = blog.likes) : mostLike
  );

  const favBlog = await Blog.find({ likes: mostLike });
  res.send(favBlog);
});

blogRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const editedBlog = await Blog.replaceOne({ _id: id }, body);

    if (!editedBlog) {
      return res.status(404).send('Blog not found !');
    }

    res.send(editedBlog);
  } catch (error) {
    res.send(error);
  }
});

blogRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!(deletedBlog)) {
      return res.status(404).send('blog not found for delete!');
    }
    const blogs = await Blog.find({})
    if (!blogs) {
      return res.status(404).send('blogs not found after blog deleted')
    }

    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = blogRouter;
