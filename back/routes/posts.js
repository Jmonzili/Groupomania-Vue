const express = require('express');
const { getPosts, createPosts } = require('../controllers/posts.js');
const { authenticateUser } = require('../middleware/auth.js');
const postRouter = express.Router();

postRouter.use(authenticateUser);
postRouter.get('/', getPosts);
postRouter.post('/', createPosts);

module.exports = { postRouter };
