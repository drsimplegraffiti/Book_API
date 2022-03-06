require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  connectionString: process.env.CONNECTION_STRING,
};
