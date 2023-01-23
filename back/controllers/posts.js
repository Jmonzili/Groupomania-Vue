const { prisma } = require('../db/db');

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

async function deletePost(req, res) {
  const postId = Number(req.params.id);
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });
    console.log('post to delete:', post);
    if (post == null) {
      return res.status(404).send({ error: 'Post not found' });
    }
    const email = req.email;
    if (email !== post.user.email) {
      return res
        .status(404)
        .send({ error: 'You are not the owner of this post' });
    }
    //  Suppression des commentaire
    await prisma.comment.deleteMany({ where: { postId } });
    //  Puis suppression du post
    await prisma.post.delete({ where: { id: postId } });
    res.send({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong' });
  }
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

  const userCommenting = await prisma.user.findUnique({
    where: { email: req.email },
  });
  const userId = userCommenting.id;

  const commentToSend = { userId, postId, content: req.body.comment };
  const comment = await prisma.comment.create({ data: commentToSend });
  res.send({ comment });
}

module.exports = { getPosts, createPosts, deletePost, createComment };
