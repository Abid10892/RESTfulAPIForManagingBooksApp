## About NODE.js API

This project is for developing a Restful API using Node.js, Express and MongoDB for managing Books.

### API Features

The application can create, read, update and delete data, for example: books, in a database.

### API endpoint -

for inserting new Book
post("/books");

// for Fetching All books
get("/books");

// for fetching Book detail
get("/books/:id", fetchBook);

// for UPDATING a book
put("/books/:id");

// for Deleting a book
delete("/books/:id");

### instruction to setup

you must have install Node JS
then just simply install Express & Mongoose
