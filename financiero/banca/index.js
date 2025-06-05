const express = require("express");
const router = express.Router();

const estadisticasRoute = require("./estadisticas");
const resumenRoute = require("./resumen");

router.use("/estadisticas", estadisticasRoute);
router.use("/enlace", enlaceRoute);

module.exports = router;
