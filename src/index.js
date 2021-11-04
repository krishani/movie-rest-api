import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import _ from 'lodash';
import { dbConnection } from './connection/Connection';
import { getStatusCode } from './Utils';
import { routes } from './router';

const app = express();
const port = 4000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

app.get('/', (request, response) => {
  response.json({ data: 'Our node rest api' })
});

dbConnection
  .then(connection => {
    _.forEach(routes, route => {
      app[route.method](route.path, (req, res, next) => {
        route.handler(req, res)
          .then(data => {
            const content = _.isArray(data) ? { data } : data;
            res.status(getStatusCode(req.method, content)).send(content);
          })
          .catch(e => {
            next(e);
          })
      })
    })

  }).catch(err => {
  console.log('Error occurred while creating db connection', err);
});
