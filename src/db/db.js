const mongoose = require("mongoose");
const log = (arg) => console.log(arg);

const config = require("../configuration/config");
// Async mongoose connection using async await
const connectDB = async () => {
  try {
    await mongoose.connect(config.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log("MongoDB connection Established...");

    // Seed Data
  } catch (error) {
    log(error.message);

    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
