const Blog = require('../models/blog');

const mostBlog = async () => {
  const blogs = await Blog.find({});

  let authorLikes = blogs.reduce((op, { author, likes }) => {
    op[author] = op[author] || 0;
    op[author] += likes;
    return op;
  }, {});

  // to find most likes
  let mostLikes = Object.keys(authorLikes).sort(
    (a, b) => authorLikes[b] - authorLikes[a]
  )[0];


  return mostLikes;
};




module.exports = mostBlog