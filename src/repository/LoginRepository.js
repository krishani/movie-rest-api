import { getRepository } from 'typeorm';

export const getUser = async (username) => {
  return await getRepository('User').findOne({ username });
};

export const addUser = async (username, hash, salt) => {
  return await getRepository('User').save({ username, password: hash, role: 'admin', salt });
};

// TODO remove this later after adding few users
export const getAllUsers = async () => {
  return await getRepository('User').find();
};
