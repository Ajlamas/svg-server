const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const bancaRoutes = require("./financiero/banca");
app.use("/svg/financiero/banca", bancaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
