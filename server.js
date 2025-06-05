const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Importa la ruta del SVG
const estadisticasRoute = require("./financiero/banca/estadisticas");
app.use("svg/financiero/banca", estadisticasRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
