const router = require("express").Router;
const tracksController = require("../controllers/tracksController");

router.route('/').get(tracksController.index);

module.exports = router;