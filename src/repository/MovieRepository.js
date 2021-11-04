import { getRepository, getConnection } from 'typeorm';

export const getAllMovies = async () => {
  console.log('[MovieRepository] Retreiving all movies');
  return await getRepository('Movie').find();
};

export const getMovie = async (id) => {
  console.log('[MovieRepository] Retreiving movie by id', id);
  return await getRepository('Movie').find({ id });
};

export const insertMovie = async (movie) => {
  console.log('[MovieRepository] Adding a movie');
  await getRepository('Movie').save(movie);
  return movie;
};

export const deleteMovie = async (id) => {
  console.log('[MovieRepository] Deleting a movie');
  await getRepository('Movie').remove({ id });
  return null;
};

export const insertBulkMovies = async (movies) => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into('Movie')
    .values(movies)
    .execute();
  return movies;
};

