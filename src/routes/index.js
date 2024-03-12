var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const background = '#000000';

const api = axios.create({
  baseURL: "https://agcaalbumapi--dlif2uv.proudplant-cb552678.centralindia.azurecontainerapps.io",
  params: {},
  timeout: 15000,
});

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    console.log("Sending request to backend albums api");
    var data = await api.get("/albums");
    console.log("Response from backend albums api: ", data.data);
    res.render("index", {
      albums: data.data,
      background_color: background,
    });
  } catch (err) {
    console.log("Error: ", err);
    next(err);
  }
});

module.exports = router;
