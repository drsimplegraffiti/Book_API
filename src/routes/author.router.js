const express = require("express");
const router = express.Router();

const { validate } = require("express-validation");
const AuthorController = require("../controllers/author.controller");
const authorController = new AuthorController();

const AuthorValidations = require("../validations/author.vaidation");

router.post(
  "/author/create",
  validate(AuthorValidations.createOrUpdateAuthorValidator),
  authorController.CreateAuthor
);

module.exports = router;
