const express = require("express");
const router = express.Router();
const citas = require("./citas");
const boton-calendario = require("./boton-calendario");

const cabecera = require("./cabecera");
router.use("/cabecera", cabecera);
router.use("/citas", citas);
router.use(/boton-calendario.js", boton-calendario);

module.exports = router;

