const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Init Middleware
app.use(express.json());

const mongoURI =
  "mongodb+srv://moez123:moez123@moviedb-z22jh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  err => {
    if (err) throw err;
    console.log("Database Connected...");
  }
);

// Define Routes
app.use("/movies", require("./routes/movies"));

app.listen(5000, () => console.log("Server is running on PORT 5000"));
