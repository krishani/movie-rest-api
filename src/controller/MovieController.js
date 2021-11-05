import * as movieRepository from '../repository/MovieRepository';

export const getAllMovies = async () => {
    console.log('[MovieController] Request received to get all movies');
    return await movieRepository.getAllMovies();
};

export const getMovieById = async (req) => {
    console.log('[MovieController] Request received to movie by id');
    return await movieRepository.getMovie(req.params.id);
};

export const addMovie = async (req) => {
  console.log('[MovieController] Request received to add movie');
  return movieRepository.insertMovie(req.body);
};

export const deleteMovie = async (req) => {
  console.log('[MovieController] Request received to delete movie by id');
  return movieRepository.deleteMovie(req.params.id);
};

export const insertBulkMovies = async (req) => {
    return movieRepository.insertBulkMovies(req.body.movies);
};

// TODO update movie

