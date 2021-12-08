const Blog = require('../models/blog');

const initialBlogs = [
  {
    title: 'Some title test 1',
    author: 'Test Oguz',
    url: 'Test oguz url',
    likes: 10,
  },
  {
    title: 'Some title test 2',
    author: 'Test selim',
    url: 'Test selim url',
    likes: 20,
  },
];
const nonExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon', date: new Date() });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
