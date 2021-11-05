import { getRepository } from 'typeorm';

export const getUser = async (username, password) => {
  return await getRepository('User').findOne({ username, password });
};

// TODO remove this later after adding few users
export const addUser = async (username, password) => {
  return await getRepository('User').save({ username, password, role: 'admin'});
};

// TODO remove this later after adding few users
export const getAllUsers = async () => {
  return await getRepository('User').find();
};
