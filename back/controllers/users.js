const jwt = require('jsonwebtoken');
const { users } = require('../db/db.js');

//  Connection d'utilisateur
function logUser(req, res) {
  const { email, password } = req.body;
  const user = getUser(email);
  if (user == null) return res.status(404).send('User not found');
  if (!isPasswordCorrect(user, password))
    return res.status(401).send('Wrong password');
  const token = makeToken(email);
  res.send({ token: token, email: user.email });
}

function makeToken(email) {
  return jwt.sign({ email }, process.env.SECRET, { expiresIn: '24h' });
}

function getUser(email) {
  return users.find((user) => user.email === email);
}

function isPasswordCorrect(user, password) {
  return user.password === password;
}

function signupUser(req, res) {
  const { email, password, confirmPassword } = req.body;
  const user = getUser(email);
  if (user != null) return res.status(400).send('User already exists');
  if (password !== confirmPassword)
    return res.status(400).send("Passwords don't match");
  users.push({ email, password });
  res.send({ email: email, message: 'User added' });
}

module.exports = { logUser, signupUser };
