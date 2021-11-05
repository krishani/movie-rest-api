import { isEmpty } from 'lodash';
import jwt from 'jsonwebtoken';
import * as loginRepository from '../repository/LoginRepository';
import { ResourceNotFoundError } from '../Errors';
import { CLIENT_SECRET, TOKEN_EXPIRATION_TIME } from '../Configs';

export const login = async (req, res) => {
  console.log('[LoginController] Request received to login');
  const { username, password } = req.body;
  const user = await loginRepository.getUser(username, password);
  if (isEmpty(user)) throw new ResourceNotFoundError('Username or password incorrect');

  const accessToken = jwt.sign({ username, role: user.role }, CLIENT_SECRET, { expiresIn: TOKEN_EXPIRATION_TIME });
  return { accessToken };
};

// TODO remove this later
export const signUp = async (req, res) => {
  console.log('[LoginController] Request received to signup');
  const { username, password } = req.body;
  const user = await loginRepository.addUser(username, password);
  return user;
};

// TODO remove later
export const getAllUsers = async (req, res) => {
  return await loginRepository.getAllUsers();
};
