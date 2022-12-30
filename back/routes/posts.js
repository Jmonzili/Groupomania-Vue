const express = require('express');
const {
  getPosts,
  createPosts,
  createComment,
  deletePost,
} = require('../controllers/posts.js');
const { authenticateUser } = require('../middleware/auth.js');
const { imageUpload } = require('../middleware/multer.js');

const postRouter = express.Router();

postRouter.use(authenticateUser);
postRouter.get('/', getPosts);
postRouter.post('/', imageUpload, createPosts);
postRouter.post('/:id', createComment);
postRouter.delete('/:id', deletePost);

module.exports = { postRouter };
