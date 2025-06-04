const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/svg", (req, res) => {
  const supplier = req.query["Supplier-Name"] || "Desconocido";
  const amount = req.query["Total-Amount"] || "0.00";

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="30" font-size="20">Proveedor: ${supplier}</text>
      <text x="10" y="60" font-size="20">Importe: €${amount}</text>
    </svg>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});