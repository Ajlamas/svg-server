const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta base para SVGs
const financieroRoutes = require("./financiero/banca"); // este es index.js
app.use("/svg/financiero/banca", financieroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
