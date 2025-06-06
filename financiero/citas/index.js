const express = require("express");
const router = express.Router();
const citas = require("./citas");

const cabecera = require("./cabecera");
router.use("/cabecera", cabecera);
router.use("/citas", citas);

module.exports = router;

