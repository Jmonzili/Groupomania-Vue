const comment1 = {
  user: 'test2@gmmail.com',
  content: 'This is my comment',
  id: '1',
};

const comment2 = {
  user: 'test3@gmmail.com',
  content: 'This is my comment',
  id: '2',
};

const post1 = {
  user: 'test1@gmail.com',
  title: 'my first post',
  content: 'This is my first post',
  imageUrl: 'https://picsum.photos/400/300',
  comments: [comment2, comment1],
  id: '1',
};

const post2 = {
  user: 'test2@gmail.com',
  title: 'my second post',
  content: 'This is my second post',
  imageUrl: 'https://picsum.photos/400/300',
  comments: [],
  id: '2',
};

const post3 = {
  user: 'test3@gmail.com',
  title: 'my third post',
  content: 'This is my third post',
  imageUrl: 'https://picsum.photos/400/300',
  comments: [comment1],
  id: '3',
};

const posts = [post1, post2, post3];

function getPosts(req, res) {
  const email = req.email;
  res.send({ posts, email });
}

function createPosts(req, res) {
  const content = req.body.content;
  const hasImage = req.file != null;

  const url = hasImage ? createImageUrl(req) : null;
  const email = req.email;
  const post = {
    content,
    user: email,
    comments: [],
    imageUrl: url,
    id: posts.length + 1,
  };
  console.log({ post });
  console.log({ url });
  posts.unshift(post);
  res.send({ post });
}

function createImageUrl(req) {
  let pathToImage = req.file.path;
  const protocol = req.protocol;
  const host = req.get('host');
  return `${protocol}://${host}/${pathToImage}`;
}

function createComment(req, res) {
  const postId = req.params.id;
  const post = posts.find((post) => post.id === postId);

  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const user = req.email;
  const commentToSend = { id, user, content: req.body.comment };
  console.log({ commentToSend });
  post.comments.push(commentToSend);
  res.send({ post });
}

module.exports = { getPosts, createPosts, createComment };
