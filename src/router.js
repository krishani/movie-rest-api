import * as movieController from './controller/MovieController';
import * as loginController from './controller/LoginController';
import { RequestMethod } from './Utils';

export const routes = [
  {
    path: '/movies',
    method: RequestMethod.GET,
    handler: movieController.getAllMovies,
  },
  {
    path: '/movies/:id',
    method: RequestMethod.GET,
    handler: movieController.getMovieById,
  },
  {
    path: '/movies',
    method: RequestMethod.POST,
    handler: movieController.addMovie,
  },
  {
    path: '/movies/:id',
    method: RequestMethod.DELETE,
    handler: movieController.deleteMovie,
  },
  {
    path: '/movies/bulk',
    method: RequestMethod.POST,
    handler: movieController.insertBulkMovies,
  },
  {
    path: '/login',
    method: RequestMethod.POST,
    handler: loginController.login
  },
  {
    path: '/signup',
    method: RequestMethod.POST,
    handler: loginController.signUp
  },
  {
    path: '/users',
    method: RequestMethod.GET,
    handler: loginController.getAllUsers
  }
];
