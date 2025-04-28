const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;
  
  console.log('Cookies received:', req.cookies);
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('JWT verified, userId:', decoded.userId);
      
      req.user = await User.findById(decoded.userId).select('-password');
      
      if (!req.user) {
        console.log('User not found in database');
        return res.status(401).json({ message: 'User not found' });
      }
      
      next();
    } catch (error) {
      console.error('JWT verification failed:', error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    console.log('No JWT token in cookies');
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };