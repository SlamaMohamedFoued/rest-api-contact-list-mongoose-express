const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// Get All Movies
router.get("/", (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => console.log(err.message));
});

// Get One Movie
router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      if (!movie) {
        res.json({ msg: "Movie Not Found" });
      } else {
        res.json(movie);
      }
    })
    .catch(err => console.error(err.message));
});

// Add New Movie
router.post("/", (req, res) => {
  const { title, rating, year, img } = req.body;
  let newMovie = new Movie({
    title,
    rating,
    year,
    img
  });
  newMovie
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err.message));
});

router.delete("/:id", (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(data => {
      if (!data) {
        res.json({ msg: "Movie Not found" });
      } else {
        res.json({ msg: "Movie Deleted!" });
        // Movie.find()
        //   .then(movies => res.json(movies))
        //   .catch(err => console.error(err.message));
      }
    })
    .catch(err => console.error(err.message));
});

// Edit Movies
router.put("/:id", (req, res) => {
  let newInfo = req.body;
  Movie.findByIdAndUpdate(
    req.params.id,
    { $set: { ...newInfo } },
    (err, data) => {
      if (err) throw err;
      else {
        if (!data) {
          res.json({ msg: "NBot Found" });
        } else {
          Movie.findById(req.params.id)
            .then(movie => res.json(movie))
            .catch(err => console.error(err.message));
        }
      }
    }
  );
});

module.exports = router;
