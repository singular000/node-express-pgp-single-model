# Node, Express, Postgres
## Single model RESTFul API

Also see [two model]() and [three model with jwt auth]()

Objectives

* Write SQL for queries instead of ORM
* Multiline SQL statements in `.sql` files

"Books App" 📚

#### PG-PROMISE RESOURCES

Like pg, but with Promises instead of callbacks (and more)

* [API Basics](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/)
* [pg-promise examples from creator](https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example)
* [queryfiles usage from pg-promise creator](http://vitaly-t.github.io/pg-promise/QueryFile.html)

#### DEV NOTES

**Restart server after changes to QueryFile**

Changing a `.sql` file doesn't restart the server and reload the changes: `new QueryFile` will not re-instantiate. Restart server to instantiate new QueryFile after changing a `.sql` file.

**Errors and exceptions**

In the `.catch` clause of a db query, the base err object will appear in console but not in response (when using QueryFile). For response text, pg-promise errors from queryFile show in `err.message`.

![](https://i.imgur.com/1xamXbi.png)

Errors within queryfiles themselves are also possible. (commented out above)

```javascript
if (err instanceof db.$config.pgp.errors.QueryFileError) {             
	console.log('query file error', err);                                
}                                                                      
```

**Delete notes**

For DELETE I arbitrarily decided to send the deleted resource in the response: using `RETURNING *` in the sql statement. using `db.one` query in the controller, and status code of 200 (instead of 204).

![](https://i.imgur.com/t2c5RCG.png)

**JSON notes**

JSON field: Postgres validates json, but there is no native schema validation support for nested json fields and datatypes. Relating JSON data is also problematic. Lesson-wise, this could lead into the topic of 'Normalization' and relations, and maybe some talk about "anti-patterns" using json in a relational db.

#### Postgres / SQL Resources

* [formatting](http://www.sqlstyle.guide/)
* [json](http://www.postgresqltutorial.com/postgresql-json/)
* [postgres reference](http://www.postgresqltutorial.com/)
* [vim highlighting](https://github.com/exu/pgsql.vim)
* [validate json schema](https://github.com/gavinwahl/postgres-json-schema)


#### Misc

Validation: only way to protect against empty strings is with CHECK

```sql
title VARCHAR NOT NULL CHECK (title <> '')
```



