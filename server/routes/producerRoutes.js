const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);

router.use(express.json());

router.route("/producers/:id").get((req, res) => {
  knex("tracks")
    .then((data) => {
      const producer_id = req.params.id;

      const selectedProducer = data.find((producer) => {
        return producer.id === producer_id;
      });

      res.status(200).json(selectedProducer);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Inventories: ${err}`)
    );
});

module.exports = router;
