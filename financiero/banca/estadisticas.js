const express = require("express");
const router = express.Router();

router.get("/estadisticas", (req, res) => {
  const aceptadosRaw = req.query.aceptados || "0";
  const aceptados = aceptadosRaw.replace(/\D/g, "") || "0";

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="298" fill="none">
      <path fill="#fff" d="M0 0h375v298H0z"/>
      <rect width="375" height="258" y="20" fill="#fff" rx="14"/>
      <rect width="171" height="112.5" x="10.75" y="30.75" fill="#071A2D" rx="11.25"/>
      <rect width="171" height="112.5" x="10.75" y="30.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
      <text x="30" y="78" font-size="42" font="Lato" font-weight="bolder" fill="#5ABE45">${aceptados}</text>
      <text x="47" y="120" font-size="18" font-weight="lighter" fill="#fff">Aceptados</text>
      <rect width="171" height="112.5" x="193.25" y="30.75" fill="#071A2D" rx="11.25"/>
      <rect width="171" height="112.5" x="193.25" y="30.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
      <text x="212" y="80" font-size="42" font-weight="bolder" fill="#FF575A">25</text>
      <text x="229" y="120" font-size="18" font-weight="lighter" fill="#fff">Rechazados</text>
      <rect width="171" height="112.5" x="10.75" y="154.75" fill="#071A2D" rx="11.25"/>
      <rect width="171" height="112.5" x="10.75" y="154.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
      <text x="30" y="200" font-size="42" font-weight="bolder" fill="#2ABEDF">25</text>
      <text x="47" y="244" font-size="18" font-weight="lighter" fill="#fff">Agendados</text>
      <rect width="171" height="112.5" x="193.25" y="154.75" fill="#061729" rx="11.25"/>
      <rect width="171" height="112.5" x="193.25" y="154.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
      <text x="212" y="200" font-size="42" font-weight="bolder" fill="#FFB109">25</text>
      <text x="229" y="244" font-size="18" font-weight="lighter" fill="#fff">Pendientes</text>
    </svg>
  `);
});

module.exports = router;
