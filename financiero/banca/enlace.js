const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="40" fill="none">
      <rect width="374" height="39" x=".5" y=".5" fill="#FFEEC3" rx="4.5"/>
      <rect width="374" height="39" x=".5" y=".5" stroke="#F4C95D" rx="4.5"/>
      <text x="68" y="25" font-size="12" fill="#252525">Haz clic 
          <tspan font-weight="bolder">aquí </tspan>
          <tspan>para compartir tu enlace </tspan>
      </text>
      <path fill="#E3BF88" d="m349 25.807-1.924-1.302a22.5 22.5 0 0 0-5.247-2.624h-1.386l2.494 6.748a1.02 1.02 0 0 1-.586 1.306.997.997 0 0 1-1.288-.594l-2.759-7.467c-1.842-.103-3.304-1.65-3.304-3.545 0-1.962 1.567-3.552 3.5-3.552h3.328a22.5 22.5 0 0 0 5.248-2.625L349 10.851zm5.707.431-1.414 1.435-3-3.044 1.414-1.436zM347 14.595a24.5 24.5 0 0 1-4 1.917v3.633a24.5 24.5 0 0 1 4 1.918zm-8.5 2.212c-.828 0-1.5.681-1.5 1.522 0 .84.672 1.523 1.5 1.523h2.5v-3.045zm16.5 3.045h-4v-2.03h4zm-.293-8.417-3 3.044-1.414-1.434 3-3.045z"/>
    </svg>
  `);
});

module.exports = router;
