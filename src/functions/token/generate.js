const jwt = require('jsonwebtoken');
const {nanoid} = require('nanoid');
const role = require('../../../data/user/role');
const tokenSecret = require('./secret');

function generateToken(userRole) {
  console.log('Generating token..');
  let token;

  token = jwt.sign({
    token: nanoid()
  }, secret, {
    expiresIn: '1h'
  });

  return token;
}

module.exports = generateToken;
