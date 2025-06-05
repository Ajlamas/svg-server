const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Importa la ruta desde financiero/banca/estadisticas.js
const estadisticasRoute = require("./financiero/banca/estadisticas");

// Monta la ruta bajo /svg/financiero/banca
app.use("/svg/financiero/banca", estadisticasRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
