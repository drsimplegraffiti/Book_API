const express = require("express");
const router = express.Router();
const BookController = require("../controllers/books.controller");
const bookController = new BookController();
const BookValidator = require("../validations/book.validation");
const { validate } = require("express-validation");

router.post(
  "/book/create",
  validate(BookValidator.createOrUpdateBookValidator),
  bookController.CreateBook
);
router.get("/book/all", bookController.GetAllBooks);

router.get("/book/bookById", bookController.GetBookById);
router.delete("/book/delete", bookController.DeleteBookById);
router.put(
  "/book/update",
  validate(BookValidator.createOrUpdateBookValidator),
  bookController.UpdateBook
);

module.exports = router;
