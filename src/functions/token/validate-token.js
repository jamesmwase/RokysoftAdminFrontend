const log = require('../../../functions/log');
const verifyToken = require('./verify');

async function validateToken(req, res) {
  console.log('Validating token..');
  let isValidToken;
  let token;
  token = req.param('token');

  if ((verifyToken(token))) {
    isValidToken = true;
  } else {
    // res.sendStatus(400);
  }

  return isValidToken;
}

module.exports = validateToken;
