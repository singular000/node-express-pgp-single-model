# Node, Express, Postgres
## Single model - RESTFul API

"Books App" 📚

[one-to-many]()

[many-to-many]()


## setup

Run create db file in bash

```
$ psql -f db/create_db.sql
```

Run schema file in bash

```
$ psql books_app_api -f models/books/schema.sql
```


## JSON column notes

Postgres validates json, but there is no native schema validation support for nested json fields and datatypes. Relating JSON data is also problematic. Lesson-wise, this could lead into the topic of 'Normalization' and relations, and maybe some talk about "anti-patterns" using json in a relational db.


* [json](http://www.postgresqltutorial.com/postgresql-json/)
* [validate json schema](https://github.com/gavinwahl/postgres-json-schema)