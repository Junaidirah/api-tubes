const express = require("express");
const router = express.Router();
const { getData, sendData } = require("../controller/dataController.js");

router.get("/data", getData);
router.post("/data", sendData);

module.exports = {
  route: router,
};
