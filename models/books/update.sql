UPDATE books
SET 
  title = ${title},
  author = ${author},
  cover = ${cover},
  year = ${year},
  read = ${read},
  notes = ${notes}
WHERE id = ${id}
RETURNING *;
