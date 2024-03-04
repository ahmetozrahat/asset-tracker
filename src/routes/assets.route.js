const express = require("express");
const router = express.Router();
const assetsController = require("../controllers/assets.controller");

router.get("/", assetsController.get);

module.exports = router;
