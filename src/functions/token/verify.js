const jwt = require('jsonwebtoken');
const tokenSecret = require('./secret');

function verifyToken(token) {
  console.log('Validating token..');
  let decoded;

  try {
    decoded = jwt.verify(token, tokenSecret.default);
  } catch (err) {
    consolog.error(err);
  }

  console.log('Valid token:', decoded ? true : false);
  return decoded;
}

module.exports = verifyToken;