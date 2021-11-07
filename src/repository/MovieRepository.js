import { getRepository, getConnection } from 'typeorm';
import { isEmpty } from 'lodash';
import { ResourceNotFoundError } from '../Errors';

export const getAllMovies = async () => {
  console.log('[MovieRepository] Retreiving all movies');
  return await getRepository('Movie').find();
};

export const getMovie = async (id) => {
  return await getRepository('Movie').findOneOrFail({ id });
};

export const insertMovie = async (movie) => {
  await getRepository('Movie').save(movie);
  return movie;
};

export const deleteMovie = async (id) => {
  const movie = getRepository('Movie').findOne({ id });
  if (isEmpty(movie)) throw new ResourceNotFoundError(`Movie doesn't exist for the given id`);
  await getRepository('Movie').removeOne({ id });
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

export const updateMovie = async (id, movie) => {
  await getConnection()
    .createQueryBuilder()
    .update('Movie')
    .set({
      title: movie.title,
      description: movie.description,
      thumbnail: movie.thumbnail,
      releasedDate: movie.releasedDate
    })
    .where('id = :id', { id })
    .execute();
  return null;
};
