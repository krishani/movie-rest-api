import { getRepository } from 'typeorm';

export const getUser = async (username) => {
  return await getRepository('User').findOne({ username });
};

export const addUser = async (username, hash, salt) => {
  return await getRepository('User').save({ username, password: hash, role: 'admin', salt });
};

export const getAllUsers = async () => {
  return await getRepository('User').find();
};
