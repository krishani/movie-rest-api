import { EntitySchema } from 'typeorm';

module.exports = new EntitySchema({
    name: "Movie",
    tableName: "movies",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
            unique: true,
            nullable:false
        },
        title: {
            type: "varchar",
            unique: true,
            nullable: false
        },
        description: {
            type: "text",
            nullable: true
        },
        thumbnail: {
            type: "text",
            nullable: true

        },
        releasedDate: {
            type: "timestamp",
            nullable: true
        }
    },
});

