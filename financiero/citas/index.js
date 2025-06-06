const express = require("express");
const router = express.Router();

const citas = require("./citas");
const botoncalendario = require("./botoncalendario");
const cabecera = require("./cabecera");

router.use("/cabecera", cabecera);
router.use("/citas", citas);
router.use("/botoncalendario", botoncalendario);

module.exports = router;

