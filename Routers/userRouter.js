const express = require("express");
const router = express.Router();
const Model = require("../models/UserModel");


router.post("/add", (req, res) => {
    console.log("add request in  user router");
  
    const data = req.body;
    new Model(data).save()
      .then(() => {
        console.log("data saved succesfully saved");
        res.status(200).json({ message: "success" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  });
  
  router.get("/getbyemail/:eml", (req, res) => {
    Model.findOne({ email: req.params.eml })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get("/getall", (req, res) => {
    Model.find({})
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router