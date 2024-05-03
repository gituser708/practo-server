const basicAuth = require('basic-auth');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const credentials = basicAuth(req);

  if (!credentials || !credentials.name || !credentials.pass) {
    return res.status(401).send('Access denied. Provide email and password.');
  }

  

  try {
    const user = await User.findOne({ email: credentials.name });
    if (!user) {
      return res.status(404).send('User not found.');
    }
    if (!(await user.isValidPassword(credentials.pass))) {
      return res.status(401).send('Invalid password.');
    }
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } 



};

module.exports = authMiddleware;
