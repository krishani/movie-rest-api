import { createConnection } from 'typeorm';

export const dbConnection = createConnection({
   "type": "postgres",
   "host": "db",
   "port": 5432,
   "username": "me",
   "password": "password",
   "database": "movie",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**.js"
   ],
});
