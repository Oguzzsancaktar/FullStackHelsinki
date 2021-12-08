const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const Blog = require('../models/blog');
const helper = require('./test_helper');

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(helper.initialBlogs[0]);
  await blogObject.save();
  blogObject = new Blog(helper.initialBlogs[1]);
  await blogObject.save();
});

describe('Controlling blog API end points', () => {

  test('a valid note can be added', async () => {
    const newBlog = {
      title: 'Some title test 3',
      author: 'Test berat',
      url: 'Test berat url',
      likes: 30,
    };

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const response = await api.get('/api/blogs');

    const titles = response.body.map((r) => r.title);

    expect(response.body).toHaveLength(helper.initialBlogs.length + 1);
    expect(titles).toContain('Some title test 3');
  });

  test('note without content is not added', async () => {
    const newBlog = {
      important: true,
    };

    await api.post('/api/blogs').send(newBlog).expect(400);
    const response = await api.get('/api/blogs');

    expect(response.body).toHaveLength(helper.initialBlogs.length);
  });



  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  }, 10000);

  test('there are two blogs', async () => {
    const response = await api.get('/api/blogs');

    expect(response.body).toHaveLength(helper.initialBlogs.length);
  });

  test('the first blog is about HTTP methods', async () => {
    const response = await api.get('/api/blogs');

  const titles = response.body.map((r) => r.title);
    expect(titles).toContain('Some title test 1');
    
  });
});




afterAll(() => {
  mongoose.connection.close();
});
