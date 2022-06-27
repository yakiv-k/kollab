const router = require("express").Router;
const producersController = require("../controllers/producersController");

router.route('/').get(producersController.index);

module.exports = router;