const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const clicsRaw = req.query.clics || "0";
  const clics = clicsRaw.replace(/\D/g, "") || "0";

  const clics_unicosRaw = req.query.clics_unicos || "0";
  const clics_unicos = clics_unicosRaw.replace(/\D/g, "") || "0";  
  
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="68" fill="none" viewBox="0 0 375 68">
  <path width="374" height="39" x=".5" y=".5" fill="#FFEEC3" rx="4.5" d="M5 0.5H370A4.5 4.5 0 0 1 374.5 5V35A4.5 4.5 0 0 1 370 39.5H5A4.5 4.5 0 0 1 0.5 35V5A4.5 4.5 0 0 1 5 0.5z"/>
  <path width="374" height="39" x=".5" y=".5" stroke="#F4C95D" rx="4.5" d="M5 0.5H370A4.5 4.5 0 0 1 374.5 5V35A4.5 4.5 0 0 1 370 39.5H5A4.5 4.5 0 0 1 0.5 35V5A4.5 4.5 0 0 1 5 0.5z" stroke-width="1"/>
  <text x="18" y="25" font-size="14" fill="#071A2D" font-weight="normal">Haz clic 
      <tspan font-weight="bold">aquí </tspan>
    <tspan>para compartir tu enlace </tspan></text>
  <path fill="#E3BF88" d="m349 25.807 -1.924 -1.302a22.5 22.5 0 0 0 -5.247 -2.624h-1.386l2.494 6.748a1.02 1.02 0 0 1 -0.586 1.306 0.997 0.997 0 0 1 -1.288 -0.594l-2.759 -7.467c-1.842 -0.103 -3.304 -1.65 -3.304 -3.545 0 -1.962 1.567 -3.552 3.5 -3.552h3.328a22.5 22.5 0 0 0 5.248 -2.625L349 10.851zm5.707 0.431 -1.414 1.435 -3 -3.044 1.414 -1.436zM347 14.595a24.5 24.5 0 0 1 -4 1.917v3.633a24.5 24.5 0 0 1 4 1.918zm-8.5 2.212c-0.828 0 -1.5 0.681 -1.5 1.522 0 0.84 0.672 1.523 1.5 1.523h2.5v-3.045zm16.5 3.045h-4v-2.03h4zm-0.293 -8.417 -3 3.044 -1.414 -1.434 3 -3.045z"/>
 <text x="69" y="65" font-size="12" font-weight="bolder" fill="#071A2D">${clics_unicos} personas 
      <tspan font-weight="lighter">han visitado </tspan>
      <tspan>${clics} veces </tspan>
      <tspan font-weight="lighter">tu enlace </tspan>
    </text>
</svg>
  `);
});

module.exports = router;
