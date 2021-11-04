import { createConnection } from 'typeorm';

export const dbConnection = createConnection({
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "me",
   "password": "password",
   "database": "movie",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/Movie.js"
   ],
});