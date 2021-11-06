import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import _ from 'lodash';
import cors from 'cors';
import { dbConnection } from './connection/Connection';
import { getStatusCode } from './Utils';
import { errorHandler } from './middleware/ErrorHandler';
import { authenticate } from './middleware/Authenticator';
import { routes } from './router';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});

app.get('/', (request, response) => {
  response.json({ data: 'Welcome to the movie API' });
});

dbConnection
  .then(() => {
    _.forEach(routes, route => {
      app[route.method](route.path, authenticate, (req, res, next) => {
        route.handler(req, res)
          .then(data => {
            const content = _.isArray(data) ? { data } : data;
            res.status(getStatusCode(req.method, content)).send(content);
          })
          .catch(e => {
            next(e);
          })
      }, errorHandler);
    })

  }).catch(err => {
  console.log('Error occurred while creating db connection', err);
});
