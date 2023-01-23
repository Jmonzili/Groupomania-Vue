const { prisma } = require('../db/db');

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

async function getPosts(req, res) {
  const email = req.email;
  const posts = await prisma.post.findMany({
    include: {
      comments: {
        include: {
          user: {
            select: {
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
      user: {
        select: {
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  res.send({ posts, email });
}

async function createPosts(req, res) {
  const content = req.body.content;
  const email = req.email;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const userId = user.id;
    const post = { content, userId };
    addImageUrl(req, post);

    const newPost = await prisma.post.create({ data: post });
    console.log('newPost:', newPost);
    res.send({ post: newPost });
  } catch (err) {
    res.status(500).send({ error: err });
  }
}

function addImageUrl(req, post) {
  const hasImage = req.file != null;
  if (!hasImage) return;
  let pathToImage = req.file.path;
  const protocol = req.protocol;
  const host = req.get('host');
  const url = `${protocol}://${host}/${pathToImage}`;
  post.imageUrl = url;
}

async function createComment(req, res) {
  const postId = Number(req.params.id);
  // const post = posts.find((post) => post.id === postId);
  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: {
      user: {
        select: {
          id: true,
        },
      },
    },
  });
  console.log('post tcheck:', post);
  if (post == null) {
    return res.status(404).send({ error: 'Post not found !' });
  }

  const userId = post.user.id;

  const commentToSend = { userId, postId, content: req.body.comment };
  const comment = await prisma.comment.create({ data: commentToSend });
  res.send({ comment });
}

function deletePost(req, res) {
  const postId = req.params.id;
  const post = posts.find((post) => post.id === postId);
  if (post == null) {
    return res.status(404).send({ error: 'Post not found' });
  }
  const index = posts.indexOf(post);
  posts.splice(index, 1);
  deleteComments(post);
  res.send({ message: `Post ${postId} was deleted`, posts });
}

function deleteComments(post) {
  post.comments = [];
}

module.exports = { getPosts, createPosts, deletePost, createComment };

// async function createComment(req, res) {
//   const postId = Number(req.params.id);
//   const post = await prisma.post.findUnique({
//     where: { id: postId },
//     include: {
//       user: {
//         select: {
//           id: true,
//         },
//       },
//     },
//   });
//   console.log('post commenter:', post);
//   if (post == null) {
//     return res.status(404).send({ error: 'Post not found !' });
//   }

//   const userId = req.email;
//   // const commentToSend = { userId, postId, content: req.body.comment };
//   // post.comments.push(commentToSend);
//   // res.send({ post });
// }
