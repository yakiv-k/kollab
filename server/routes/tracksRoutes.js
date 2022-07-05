const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);
// const { PutObjectCommand } = "@aws-sdk/client-s3";
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;


// const fs = require("fs");
const { json } = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const s3 = new S3Client({ region: "ca-central-1" });

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "kollab-data",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
      // cb(null, Date.now().toString());
    },
  }),
});

// ROUTING FOR TRACKS
router.use(express.json());

// AUTH MIDDLEWARE
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

// GET ALL
router.route("/tracks").get(authorize, (req, res) => {
  console.log(req.decoded);
  // let connectionsIdGet;
  // let connections;
  // let tracks;
  // GET CONNECTED PRODUCER ID'S
  // knex("connections").then((data) => {
  //   data.filter((connected) => {
  //     if(JWT-token-id === connected.producer1_id) {
  //       return connectionsIdGet == connected.producer2_id;
  //     }
  //   })
  // })

  knex("tracks")
    .then((data) => {
      // ONLY SEND TRACKS THAT ASSOCIATED WITH CONNECTIONS
      // pseudocode
      // for (let i = 0; i < data.length; i++) {
      //    if (data[[i] === connectionsIdGet[j]) {
      //    tracks.push(data[i]);
      //    }
      // res.status(200).json(tracks);
      // }

      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Inventories: ${err}`)
    );
});
// POST FROM UPLOAD PAGE
// .post(
//   upload.fields([{ name: "image" }, { name: "stems" }, , { name: "track" }]),
//   (req, res, next) => {
//     const imageData = req.files.image;
//     const trackData = req.files.track;
//     const stemsData = req.files.stems;

//     // ISOLATE URL TO FILE
//     const getImageUrl = imageData.map((file) => {
//       return file.location;
//     });
//     const getTrackUrl = trackData.map((file) => {
//       return file.location;
//     });
//     const getStemsUrl = stemsData.map((file) => {
//       return file.location;
//     });

//     // CREATE NEW TRACK OBJECT
//     let newTrack = {
//       id: "6",
//       // SET TO CURRENT USER ID
//       producer_id: "2",
//       title: req.body.title,
//       name: req.body.name,
//       caption: req.body.caption,
//       BPM: req.body.bpm,
//       image_url: getImageUrl[Object.keys(getImageUrl)[0]],
//       audio_url: getTrackUrl[Object.keys(getTrackUrl)[0]]
//     }
//     console.log(newTrack);

//     knex("tracks").insert(newTrack).then((data) => {
//       res.status(200).location("http://localhost:3000/tracks").json(data);
//     });

//     // knex;
//     // res.send("Successfully uploaded " + req.files.length + " files!");
//   }
// );

// GET BY ID
router.route("/tracks/:id").get((req, res) => {
  let selectedTrack;

  // Isolate selected track
  knex("tracks")
    .then((data) => {
      const track_id = req.params.id;
      selectedTrack = data.find((track) => track.id == track_id);
    })
    .then((response) => {
      // Isolate all files associated with the selected track
      knex("stems").then((data) => {
        let associatedStems = data.filter((stem) => {
          return stem.tracks_id == selectedTrack.id;
        });
        res.status(200).json({ track: selectedTrack, stems: associatedStems });
      });
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Inventories: ${err}`)
    );
});

module.exports = router;
