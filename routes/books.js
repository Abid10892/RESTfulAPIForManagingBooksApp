const {
  insertBook,
  fetchBook,
  fetchBooks,
  updateBook,
  deleteBook,
} = require("../controllers/books");
const express = require("express");

const router = express.Router();

/* CREATE */
router.post("/books", insertBook);

// FETCH
router.get("/books", fetchBooks);
router.get("/books/:id", fetchBook);

/* UPDATE */
router.put("/books/:id", updateBook);

// Delete
router.delete("/books/:id", deleteBook);

module.exports = router;
