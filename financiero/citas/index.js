const express = require("express");
const router = express.Router();

const cabecera = require("./cabecera");
router.use("/cabecera", cabecera);

module.exports = router;

