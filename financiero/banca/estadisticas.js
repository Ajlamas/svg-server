const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const aceptadosRaw = req.query.aceptados || "0";
  const aceptados = aceptadosRaw.replace(/\D/g, "") || "0";

  const rechazadosRaw = req.query.rechazados || "0";
  const rechazados = rechazadosRaw.replace(/\D/g, "") || "0";

  const agendadosRaw = req.query.agendados || "0";
  const agendados = agendadosRaw.replace(/\D/g, "") || "0";

  const pendientesRaw = req.query.pendientes || "0";
  const pendientes = pendientesRaw.replace(/\D/g, "") || "0";

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="298" fill="none">
  <path fill="#fff" d="M0 0h375v298H0z"/>
  <rect width="375" height="258" y="20" fill="#fff" rx="14"/>
  <rect width="171" height="112.5" x="10.75" y="30.75" fill="#071A2D" rx="11.25"/>
  <rect width="171" height="112.5" x="10.75" y="30.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
  <g transform="translate(00, 00)">
    <path fill="#fff" d="M26.685 121H24v-10.138h2.685zm5.796-14.868a1.843 1.843 0 0 1 1.806 2.211l-.514 2.519h3.18a3 3 0 0 1 2.912 3.716l-1.015 4.138A3 3 0 0 1 35.937 121H31.18a4 4 0 0 1-1.65-.355l-1.504-.681v-9.102h.001l2.978-3.99c.348-.466.895-.74 1.476-.74"/>
  </g>
  <text x="30" y="78" font-size="42" font="Lato" font-weight="bolder" fill="#5ABE45">${aceptados}</text>
  <text x="47" y="120" font-size="18" font-weight="lighter" fill="#fff">Aceptados</text>
  <rect width="171" height="112.5" x="193.25" y="30.75" fill="#071A2D" rx="11.25"/>
  <rect width="171" height="112.5" x="193.25" y="30.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
  <path fill="#fff" d="M219.769 106.132h2.684v10.138h-2.684zM213.972 121a1.843 1.843 0 0 1-1.806-2.211l.514-2.519h-3.179a3 3 0 0 1-2.913-3.716l1.016-4.138a3 3 0 0 1 2.913-2.284h4.757a4 4 0 0 1 1.65.355l1.503.681v9.102h-.001l-2.978 3.99a1.84 1.84 0 0 1-1.476.74"/>
  <text x="212" y="80" font-size="42" font-weight="bolder" fill="#FF575A">${rechazados}</text>
  <text x="229" y="120" font-size="18" font-weight="lighter" fill="#fff">Rechazados</text>
  <rect width="171" height="112.5" x="10.75" y="154.75" fill="#071A2D" rx="11.25"/>
  <rect width="171" height="112.5" x="10.75" y="154.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
  <path fill="#fff" d="M40 243a2 2 0 0 1-2 2H26a2 2 0 0 1-2-2v-6h16zm-12.666-2.001a.668.668 0 0 0 0 1.334h1.333a.667.667 0 0 0 0-1.334zm4 0a.668.668 0 0 0 0 1.334h1.333a.667.667 0 0 0 0-1.334zm4 0a.668.668 0 0 0 0 1.334h1.333a.667.667 0 0 0 0-1.334zm-8-2.666a.667.667 0 1 0 0 1.333h1.333a.667.667 0 1 0 0-1.333zm4 0a.667.667 0 1 0 0 1.333h1.333a.667.667 0 1 0 0-1.333zm4 0a.667.667 0 1 0 0 1.333h1.333a.667.667 0 1 0 0-1.333zm-8.667-6.666a2 2 0 0 0 4 0V231h2.667v.667a2 2 0 0 0 4 0V231H38a2 2 0 0 1 2 2v2.667H24V233a2 2 0 0 1 2-2h.667zm2-2.667c.368 0 .666.299.666.667v2a.666.666 0 1 1-1.333 0v-2c0-.368.299-.667.667-.667m6.666 0c.368 0 .667.299.667.667v2a.667.667 0 0 1-1.333 0v-2c0-.368.298-.667.666-.667"/>
  <text x="30" y="200" font-size="42" font-weight="bolder" fill="#2ABEDF">${agendados}</text>
  <text x="47" y="244" font-size="18" font-weight="lighter" fill="#fff">Agendados</text>
  <rect width="171" height="112.5" x="193.25" y="154.75" fill="#061729" rx="11.25"/>
  <rect width="171" height="112.5" x="193.25" y="154.75" stroke="#2A4056" stroke-width="1.5" rx="11.25"/>
  <path fill="#fff" d="M214.5 229c.252 0 .484.142.597.368l7.333 14.667a.667.667 0 0 1-.597.965h-14.666a.667.667 0 0 1-.597-.965l7.333-14.667a.67.67 0 0 1 .597-.368m0 11.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.667-6v4.666h1.334v-4.666z"/>
  <text x="212" y="200" font-size="42" font-weight="bolder" fill="#FFB109">${pendientes}</text>
  <text x="229" y="244" font-size="18" font-weight="lighter" fill="#fff">Pendientes</text>
</svg>
  `);
});

module.exports = router;
