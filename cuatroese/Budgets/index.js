const express = require("express");
const router = express.Router();

// Asegúrate de que el nombre aquí está en minúsculas
const componentebudgetRoute = require("./componentebudget.js");
/d:/Proyectos/Automatización/GITHUB/svg-server/cuatroese/budgets/index.js
// Puedes usar el nombre que quieras en la URL, no afecta
router.use("/componente", componentebudgetRoute);

module.exports = router;