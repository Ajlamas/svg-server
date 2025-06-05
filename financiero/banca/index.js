const express = require("express");
const router = express.Router();

const estadisticasRoute = require("./estadisticas");
const enlaceRoute = require("./enlace");

router.use("/estadisticas", estadisticasRoute);
router.use("/enlace", enlaceRoute);

module.exports = router;
