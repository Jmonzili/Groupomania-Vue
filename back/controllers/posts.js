const comment1 = {
  user: 'test2@gmmail.com',
  content: 'This is my comment',
};

const comment2 = {
  user: 'test3@gmmail.com',
  content: 'This is my comment',
};

const post1 = {
  user: 'test1@gmail.com',
  title: 'my first post',
  content: 'This is my first post',
  url: 'https://picsum.photos/400/300',
  comments: [comment2, comment1],
};

const post2 = {
  user: 'test2@gmail.com',
  title: 'my second post',
  content: 'This is my second post',
  url: 'https://picsum.photos/400/300',
  comments: [],
};

const post3 = {
  user: 'test3@gmail.com',
  title: 'my third post',
  content: 'This is my third post',
  url: 'https://picsum.photos/400/300',
  comments: [comment1],
};

const posts = [post1, post2, post3];

function getPosts(req, res) {
  const email = req.email;
  res.send({ posts, email });
}

function createPosts(req, res) {
  const content = req.body.content;
  console.log('content:', req.body);
  const email = req.email;
  const post = { content, user: email, comments: [] };
  posts.unshift(post);
  res.send({ post });
}

module.exports = { getPosts, createPosts };
