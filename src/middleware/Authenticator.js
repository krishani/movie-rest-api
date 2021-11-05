import jwt from 'jsonwebtoken';
import { TokenExpiredError } from 'jsonwebtoken';
import { CLIENT_SECRET } from '../Configs';

export const authenticate = async (req, res, next) => {
  const currentPath = req.route.path;
  if (currentPath === '/login' || currentPath === '/signup') {
    next();
  } else {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).send('Authorization header is not provided');
    }
    const token = authHeader.split(' ')[1];
    try {
      const user = await jwt.verify(token, CLIENT_SECRET);
      req.user = user;
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        res.status(401).send('Access token expired. Please Login again to fetch a new token');
      } else {
        res.status(403).send('Access token cannot be verified');
      }
    }
  }
};
