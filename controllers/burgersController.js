const burger = require("../models/burger.js");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    cat.all((data) => {
      const hbsObject = {
        cats: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });