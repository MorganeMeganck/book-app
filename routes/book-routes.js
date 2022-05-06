const express = require("express");
const booksRouter = express.Router();
const booksController = require("../controllers/books-controller");
const authentificateJwt = require("../middlewares/authentificate-jwt");

booksRouter.get("/", authentificateJwt(), booksController.getAllBooks);
booksRouter.post("/", authentificateJwt(), booksController.addBook);
booksRouter.get("/:id", authentificateJwt(), booksController.getById);
booksRouter.put("/:id", authentificateJwt(), booksController.updateBook);
booksRouter.delete("/:id", authentificateJwt(), booksController.deleteBook);

module.exports = booksRouter;
