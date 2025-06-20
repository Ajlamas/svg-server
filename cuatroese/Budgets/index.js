const express = require("express");
const router = express.Router();

// Asegúrate de que el nombre aquí está en minúsculas
const componenteBudgetRoute = require("./componenteBudget.js");

// Puedes usar el nombre que quieras en la URL, no afecta
router.use("/componente", componenteBudgetRoute);

module.exports = router;