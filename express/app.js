const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// Import Routes (MIDDLEWARE)
app.use(cors()); // to allow CORS access
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);
// Start listening to the server
app.listen(3000);
