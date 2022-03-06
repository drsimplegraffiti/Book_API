const AuthorModel = require("../models/author.model");

module.exports = class AuthorService {
  async CreateAuthor(authorToCreate) {
    const author = new AuthorModel(authorToCreate);
    return await author.save();
  }
};
