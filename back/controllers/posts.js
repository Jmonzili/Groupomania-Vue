const post1 = {
  user: 'test1@gmail.com',
  title: 'my first post',
  content: 'This is my first post',
  url: 'https://picsum.photos/400/300',
};

const post2 = {
  user: 'test2@gmail.com',
  title: 'my second post',
  content: 'This is my second post',
  url: 'https://picsum.photos/400/300',
};

const post3 = {
  user: 'test3@gmail.com',
  title: 'my third post',
  content: 'This is my third post',
  url: 'https://picsum.photos/400/300',
};

function getPosts(req, res) {
  const posts = [post1, post2, post3];
  const email = req.email;
  res.send({ posts, email });
}

module.exports = { getPosts };
