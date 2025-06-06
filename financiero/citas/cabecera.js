const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const totales = req.query.totales || "0";
  const pendientes = req.query.pendientes || "0";
  const firmadas = req.query.firmadas || "0";
  const descartadas = req.query.descartadas || "0";
  const conversion = req.query.conversion || "0";

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg width="355" height="141" viewBox="0 0 355 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="355" height="141" rx="10" fill="#314150"/>
      <path d="M267 108c0-5.523 4.477-10 10-10h29c5.523 0 10 4.477 10 10v33h-49z" fill="#071A2D"/>
      <path d="M293 86c0-5.523 4.477-10 10-10h30c5.523 0 10 4.477 10 10v55h-50z" fill="#F4C95D"/>
      <text x="12%" y="23" font-size="12" fill="#FFF" font-weight="350" text-anchor="middle">Totales</text>
      <text x="12%" y="58" font-size="28" fill="#FFF" font-weight="900" text-anchor="middle">${totales}</text>
      <text x="35%" y="23" font-size="12" fill="#FFF" font-weight="350" text-anchor="middle">Pendientes</text>
      <text x="35%" y="58" font-size="28" fill="#FFF" font-weight="900" text-anchor="middle">${pendientes}</text>
      <text x="60%" y="23" font-size="12" fill="#FFF" font-weight="350" text-anchor="middle">Firmadas</text>
      <text x="60%" y="58" font-size="28" fill="#FFF" font-weight="900" text-anchor="middle">${firmadas}</text>
      <text x="85%" y="23" font-size="12" fill="#FFF" font-weight="350" text-anchor="middle">Descartadas</text>
      <text x="85%" y="58" font-size="28" fill="#FFF" font-weight="900" text-anchor="middle">${descartadas}</text>
      <text x="18" y="118" font-size="10" fill="#FFF" font-weight="lighter">Tasa de conversión </text>
      <text x="102" y="118" font-size="12" fill="#F4C95D" font-weight="bold">${conversion}%</text>
    </svg>
  `);
});

module.exports = router;
