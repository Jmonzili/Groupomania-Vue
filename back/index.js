require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const { logUser, signupUser } = require('./controllers/users.js');
const cors = require('cors');
const { getPosts } = require('./controllers/posts.js');
const { authenticateUser } = require('./middleware/auth.js');

app.use(cors());
app.use(bodyParser.json());

app.post('/auth/login', logUser);
app.post('/auth/signup', signupUser);
app.get('/posts', authenticateUser, getPosts);

app.listen(port, () => console.log(`Listening on port ${port}`));
