const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const config = require("./configuration/config");
const welcome_note = require("./welcome.json");
const log = (arg) => console.log(arg);
const port = config.port || 5678;

//!Database connection
const connectDB = require("./db/db");
connectDB();

//? Routes
const BookRouter = require("./routes/books.router");
const AuthorRouter = require("./routes/author.router");

//! Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).json({ msg: welcome_note });
});

app.use(BookRouter);
app.use(AuthorRouter);

// TODO: Add 404 page

//*  Listen to server
app.listen(port, () => {
  log(`🎈🎈 App running on ${port}`);
});
