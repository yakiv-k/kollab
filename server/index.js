const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const producerRoutes = require("./routes/producerRoutes");
const tracksRoutes = require("./routes/tracksRoutes");

const PORT = process.env.PORT || 8080;
require("dotenv").config();

// CORS
app.use(cors());

// BODYPARSER
app.use(bodyParser.json());

// ROUTES
app.use("/", producerRoutes);
app.use("/", tracksRoutes);

// LISTEN
app.listen(PORT, () => {
  console.log("Server listening to http://localhost:" + PORT);
});
