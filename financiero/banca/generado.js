const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const generadoRaw = req.query.generado || "0";
  const generado = generadoRaw.replace(/\D/g, "") || "0";
  
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg width="375" height="125" viewBox="0 0 375 125" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="375" height="125" rx="22" fill="#fff"/>
  <ellipse cx="187" rx="300" ry="124" fill="#CFA15C"/>
  <ellipse cx="187" cy="45" rx="300" ry="75.2" fill="#fff"/>
  <path stroke="#A1A5A8" stroke-dasharray="5 5" stroke-width=".5" d="M0 1 H375"/>
  <text x="50%" y="38" font-size="25" font-weight="lighter" fill="#7E7F80" text-anchor="middle">Saldo Acumulado:</text>
  <text x="50%" y="95" font-size="56" font-weight="bolder" fill="#071A2D" text-anchor="middle">${generado} 
      <tspan fill="#CFA15C" font-size="26" font-weight="lighter">€</tspan></text>
</svg>
  `);
});

module.exports = router;
