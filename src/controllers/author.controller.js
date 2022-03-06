const AuthorService = require("../services/author.service");
const authorService = new AuthorService();

module.exports = class AuthorController {
  async CreateAuthor(req, res, next) {
    const result = await authorService.CreateAuthor(req.body);
    res.send(result);
  }
};
