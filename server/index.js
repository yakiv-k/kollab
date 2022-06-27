const express = require("express");
const cors = require("cors");
const app = express();

const producerRoutes = require("./routes/producerRoutes");
const tracksRoutes = require("./routes/tracksRoutes");
// const stemsRoutes = require("./routes/stemsRoutes");

const PORT = process.env.PORT || 8080;
require("dotenv").config();
app.use(cors());

// ROUTES
app.use("/producer", producerRoutes);
app.use("/tracks", tracksRoutes);

// LISTEN
app.listen(PORT, () => {
  console.log("Server listening to http://localhost:" + PORT);
});
