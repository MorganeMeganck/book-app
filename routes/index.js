const express = require("express");
const authRouter = require("./auth-router");
const booksRouter = require("./book-routes");
const router = express.Router();

router.use("/books", booksRouter);
router.use("/auth", authRouter);

module.exports = router;
