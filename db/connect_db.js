const pgp        = require('pg-promise')();
const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/books_app_api';

module.exports   = pgp(connection);
