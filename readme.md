# Book api with best practices

Folder structure

![folder structure](https://user-images.githubusercontent.com/70065792/156903901-096a95b3-e89c-46bb-b340-41d3d7c3145e.PNG)

## Run server
> npm run dev

## Dependencies

> npm i express dotenv helmet compression cors express-validation joi

---

## Configuration
```javascript
require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  connectionString: process.env.CONNECTION_STRING,
};
```

---

## Validation Object Structure
```javascript
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const BookValidations = {
  createOrUpdateBookValidator: {
    body: Joi.object({
      name: Joi.string().required(),
      author: Joi.objectId().required(),
      numberOfPages: Joi.number().required(),
      summary: Joi.string().required(),
    }),
  },
};

module.exports = BookValidations;
```


---

## Model 
```javascript
const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);

```


---

## Database config
```javascript
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
```

