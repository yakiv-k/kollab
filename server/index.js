const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const producerRoutes = require("./routes/producerRoutes");
const tracksRoutes = require("./routes/tracksRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8080;
require("dotenv").config();
console.log(process.env.AWS_ACCESS_KEY);
// CORS
app.use(cors());

// BODYPARSER
app.use(bodyParser.json());

// ROUTES
app.use("/", producerRoutes);
app.use("/", tracksRoutes);
app.use("/", authRoutes);

// LISTEN
app.listen(PORT, () => {
  console.log("Server listening to http://localhost:" + PORT);
});
