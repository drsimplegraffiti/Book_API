const BookModel = require("../models/books.model");
const mongoose = require("mongoose");

module.exports = class BookService {
  async CreateBook(book) {
    const bookToAdd = new BookModel(book);
    return await bookToAdd.save();
  }

  async GetAllBooks() {
    return await BookModel.find({});
  }

  async GetBookById(id) {
    const result = await BookModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: "authors",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          name: 1, //! shows only name
          summary: 1, //! shows only name
          author: {
            country: 1,
            name: 1,
          }, // shows only name
          _id: 0, // hides id
        },
      },
    ]);
    return result[0];
    // return result;
  }

  async DeleteBookById(id) {
    return await BookModel.findByIdAndDelete(id);
  }

  async UpdateBook(id, updatedBook) {
    return await BookModel.findByIdAndUpdate(id, updatedBook, { new: true });
  }
};
