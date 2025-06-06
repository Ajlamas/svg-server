const express = require("express");
const router = express.Router();

const estadisticasRoute = require("./estadisticas");
const enlaceRoute = require("./enlace");
const generadoRoute = require("./generado");
const recompensaceroRoute = require("./recompensacero");

router.use("/estadisticas", estadisticasRoute); // /svg/financiero/banca/estadisticas
router.use("/enlace", enlaceRoute);             // /svg/financiero/banca/enlace
router.use("/generado", generadoRoute);             // /svg/financiero/banca/enlace
router.use("/recompensacero", recompensaceroRoute);             // /svg/financiero/banca/enlace

module.exports = router;
