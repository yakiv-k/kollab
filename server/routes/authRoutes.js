const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile").development);
const SECRET_KEY = process.env.SECRET_KEY;

function authorize(req, res, next) {
  let token = req.headers.authorization.slice("Bearer ".length);

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: "No token" });
    } else {
      req.decoded = decoded;
      res.json(req.decoded);
      next();
    }
  });

  // let token = sessionStorage.getItem("token");
}

const users = {};

router.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password,
  };
  res.json({ success: "true" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    let token = jwt.sign({ name: user.name }, SECRET_KEY);
    res.json({ token: token });
  } else {
    res.status(403).send({ token: null });
  }
});

router.get("/profile", authorize, (req, res) => {
  res.json(req.decoded);
});

module.exports = router;
