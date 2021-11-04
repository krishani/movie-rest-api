import { isNil, get} from 'lodash';

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