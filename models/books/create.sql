INSERT INTO books (title, author, cover, year, read, notes)
VALUES (${title}, ${author}, ${cover}, ${year}, ${read}, ${notes}) 
RETURNING *; 
