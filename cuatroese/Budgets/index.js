const express = require("express");
const router = express.Router();

console.log("--- DEBUG: Dentro de 'budgets/index.js' ---");

// Importamos el componente
const componenteBudgetRoute = require("./componentebudget.js");

// ----------- LÍNEAS DE DEPURACIÓN CLAVE -----------
console.log("--- DEBUG: A continuación se muestra lo que se ha importado de 'componentebudget.js': ---");
console.log(componenteBudgetRoute);
console.log("--- FIN DEBUG ---");
// ---------------------------------------------------

// Esta es la línea que da el error
router.use("/componente", componenteBudgetRoute);

module.exports = router;