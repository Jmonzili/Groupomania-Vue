require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const { logUser, signupUser } = require('./controllers/users.js');
const cors = require('cors');
const { postRouter } = require('./routes/posts.js');
const { prisma } = require('./db/db.js');

app.use(cors());
app.use(bodyParser.json());

//  Users Database
const users = prisma.post.findMany().then(console.log).catch(console.error);

app.use('/posts', postRouter);
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', logUser);
app.post('/auth/signup', signupUser);

app.listen(port, () => console.log(`Listening on port ${port}`));
