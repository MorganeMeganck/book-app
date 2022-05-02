const express = require("express");
const booksRouter = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", booksController.addBook);
booksRouter.get("/:id", booksController.getById);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

module.exports = booksRouter;
