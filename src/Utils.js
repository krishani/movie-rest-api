import { isNil, get} from 'lodash';
import { QueryFailedError, EntityNotFoundError } from 'typeorm';
const { ResourceNotFoundError } = require('./Errors');
export const RequestMethod = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
};

export const getStatusCode = (method, content) => {
  if (isNil(content)) return 204;
  if (method === RequestMethod.POST.toUpperCase() && !get(content, 'requestFailed', false)) {
    return 201;
  } else {
    return 200;
  }
};

export const errorHandler = (e, req, res, next) => {
  const handle = (status, message) => res.status(status).send(message);
  if (e instanceof ResourceNotFoundError) {
    handle(404, e.message);
  } else if (e instanceof QueryFailedError) {
    handle(400, e.message);
  }  else if (e instanceof EntityNotFoundError) {
    handle(404, e.message);
  } else {
    handle(500, e.message);
  }
};
