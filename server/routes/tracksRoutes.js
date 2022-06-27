const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);

router.use(express.json());

router.route("/tracks").get((_req, res) => {
  knex("tracks")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Inventories: ${err}`)
    );
});

router.route("/tracks/:id").get((req, res) => {
  knex("stems")
    .then((data) => {
      const track_id = req.params.id;

      const selectedTrack = data.filter((files) => {
        return files.id === track_id;
      });

      res.status(200).json(selectedTrack);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Inventories: ${err}`)
    );
});

module.exports = router;
