const QueryFile = require('pg-promise').QueryFile;

module.exports = {
  books: {
    index: new QueryFile('models/books/index.sql'),
    show: new QueryFile('models/books/show.sql'),
    create: new QueryFile('models/books/create.sql'),
    update: new QueryFile('models/books/update.sql'),
    delete: new QueryFile('models/books/delete.sql')
  }
}
