const express = require("express");
const router = express.Router();

// Importamos nuestro nuevo componente de cabecera
const headerRoute = require("./header.js");

// Definimos la URL para acceder a él. Será /svg/cuatroese/common/header
router.use("/header", headerRoute);

// Si en el futuro creas más componentes genéricos (ej: un 'footer.js'),
// simplemente lo añadirías aquí:
// const footerRoute = require("./footer.js");
// router.use("/footer", footerRoute);

module.exports = router;