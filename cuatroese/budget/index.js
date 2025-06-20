const express = require("express");
const router = express.Router();

// 1. Importamos nuestro nuevo componente
const componenteBudgetRoute = require("./componentebudget.js");

// 2. Definimos la URL para acceder a él.
// La URL final será /svg/cuatroese/budget/componentebudget
router.use("/componentebudget", componenteBudgetRoute);

// Aquí podrás añadir más componentes para la sección 'budget' en el futuro
// router.use("/otrocomponente", otroComponenteRoute);

module.exports = router;