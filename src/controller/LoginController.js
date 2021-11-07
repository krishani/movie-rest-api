import jwt from 'jsonwebtoken';
import * as loginRepository from '../repository/LoginRepository';
import { CLIENT_SECRET, TOKEN_EXPIRATION_TIME } from '../Configs';
import { hashPasswordWithSalt, validateLogin } from '../Utils';

export const login = async (req) => {
  console.log('[LoginController] Request received to login');
  const { username, password } = req.body;
  const user = await loginRepository.getUser(username);
  validateLogin(user, password);
  const accessToken = jwt.sign({ username, role: user.role }, CLIENT_SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });
  return { accessToken };
};

export const signUp = async (req) => {
  console.log('[LoginController] Request received to signup');
  const { username, password } = req.body;
  const { salt, hash } = hashPasswordWithSalt(password);
  const user = await loginRepository.addUser(username, hash, salt);
  return { id: user.id, username: user.username };
};

export const getAllUsers = async () => {
  return await loginRepository.getAllUsers();
};
