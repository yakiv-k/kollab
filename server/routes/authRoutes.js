const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile").development);
const SECRET_KEY = process.env.SECRET_KEY;
const { v4: uuidv4 } = require("uuid");

// app.use(express.json());
// app.use(cors());

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


// const users = {};

router.post("/signup", (req, res) => {
  const { username, name, password, contact, avatar, image_url } = req.body;

      // CREATE NEW PRODUCER OBJECT
      let newProducer = {
        id: uuidv4(),
        image_url: image_url,
        name: name,
        contact: contact,
        image_url: avatar,
        username: username,
        password: password
      }
      console.log(newProducer);

      knex("producers").insert(newProducer).then((data) => {
        res.status(200)
        .location("http://localhost:3000/signup").
        json(newProducer);
      });

//   res.json({ success: "true" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  knex("producers")
  .where({"username": username})
  .andWhere({"password": password})
  .then((data) => {
    const user = data;
    console.log(data[0].id)

    // data.filter((user) => {
    //     // console.log(data)
        if (data.length) {
            let token = jwt.sign({ id: data[0].id }, SECRET_KEY);
            return res.json({ token: token });
          } else {
            return res.status(403).send({ token: null });
          }
    // })


    // return res.status(200).json(data);
  })
  .catch((err) =>
    res.status(400).send(`Error retrieving Inventories: ${err}`)
  );


});

// router.get("/track", authorize, (req, res) => {
//   res.json(req.decoded);
// });

module.exports = router;
