const BookService = require("../services/books.service");
const bookService = new BookService();
const log = (arg) => console.log(arg);

module.exports = class BookController {
  async CreateBook(req, res, next) {
    try {
      let book = req.body;
      // call a service
      const result = await bookService.CreateBook(book);
      res.send(result);
    } catch (error) {
      log(error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  }

  async GetAllBooks(req, res, next) {
    try {
      const books = await bookService.GetAllBooks();
      return res.status(200).json(books);
    } catch (error) {
      log(error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  }

  async GetBookById(req, res, next) {
    try {
      const id = req.query.id;
      const result = await bookService.GetBookById(id);
      return res.status(200).json(result);
    } catch (error) {
      log(error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  }

  async DeleteBookById(req, res, next) {
    try {
      const id = req.query.id;
      const result = await bookService.DeleteBookById(id);
      return res.status(200).json(`Deleted ${result}`);
    } catch (error) {
      log(error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  }

  async UpdateBook(req, res, next) {
    try {
      const id = req.query.id;
      const book = req.body;

      const result = await bookService.UpdateBook(id, book);
      return res.status(200).json(result);
    } catch (error) {
      log(error);
      return res.status(500).json({
        msg: "something went wrong",
      });
    }
  }
};
