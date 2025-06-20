const express = require("express");
const router = express.Router();
const { escape } = require("../../utils/security");

router.get("/", (req, res) => {
  // 1. Capturamos la variable 'Header' de la URL
  const { Header = "" } = req.query;

  // 2. Creamos la versión segura de la variable
  const safeHeader = escape(Header);

  res.setHeader("Content-Type", "image/svg+xml");
  // 3. Usamos la variable segura en el SVG
  res.send(`
    <svg width="335" height="25" viewBox="0 0 335 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="1" y="20" font-size="21" font-weight="300" fill="#252525">${safeHeader}</text>
    </svg>
  `);
});

// --- ¡ESTA ES LA LÍNEA MÁS IMPORTANTE! ---
module.exports = router;