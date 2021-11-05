import { EntitySchema } from 'typeorm';

module.exports = new EntitySchema({
  name: "User",
  tableName: "user",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
      unique: true,
      nullable:false
    },
    username: {
      type: "varchar",
      nullable: false,
      unique: true
    },
    password: {
      type: "varchar",
      nullable: false
    },
    role: {
      type: "varchar"
    },
  },
});
