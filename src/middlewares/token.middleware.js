const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '90d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  if (!token) return { message: 'Token not found' };
  const isValid = jwt.verify(token, secret);
  return isValid;
};

const tokenRes = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const response = verifyToken(authorization);
    if (response.message) return res.status(401).json(response);
    req.user = response;
    next();
  } catch (err) {
    return res
    .status(401)
    .json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
  generateToken,
  tokenRes,
};