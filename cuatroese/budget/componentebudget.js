const express = require("express");
const router = express.Router();
// Asumimos que la carpeta 'utils' está en la raíz del proyecto
const { escape } = require("../../utils/security");

// Función para validar que un string es un código de color hexadecimal de 6 dígitos
const esHexColorValido = (color) => /^[0-9a-fA-F]{6}$/.test(color);

router.get("/", (req, res) => {
  // 1. Validamos el color y usamos un gris por defecto si no es válido
  const colorEstado = esHexColorValido(req.query.colorEstado) ? req.query.colorEstado : "C5C5C5";

  // 2. Capturamos el resto de los datos
  const {
    cliente = "",
    estadoBudget = "",
    creadorBudget = "",
    fechaBudget = ""
  } = req.query;

  // 3. Creamos las variables seguras para los datos de texto
  const safeCliente = escape(cliente);
  const safeEstadoBudget = escape(estadoBudget);
  const safeCreadorBudget = escape(creadorBudget);
  const safeFechaBudget = escape(fechaBudget);

  res.setHeader("Content-Type", "image/svg+xml");
  // 4. Usamos las variables seguras y validadas en el SVG
  res.send(`
    <svg width="335" height="94" viewBox="0 0 335 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#000" d="M.5.5h334v93H.5z"/>
      <text x="9" y="35" font-size="16" font-weight="600" fill="#252525">${safeCliente}</text>
      <text x="168" y="35" font-size="16" font-weight="300" fill="#252525">${safeEstadoBudget}</text>
      <path fill="#${colorEstado}" d="M295 14h30v30h-30z"/>
      <path d="M313.707 28.707a1 1 0 1 0-1.414-1.414L309 30.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" fill="#fff"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M302 20a1 1 0 0 1 1-1h11a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 318 23v15a1 1 0 0 1-1-1h-14a1 1 0 0 1-1-1zm2 1v16h12V25h-2a2 2 0 0 1-2-2v-2zm10 .414L315.586 23H314z" fill="#fff"/>
      <path stroke="#C5C5C5" stroke-width=".5" d="M10 60.75h315"/>
      <text x="10.5" y="78" font-size="12" font-weight="300" fill="#868686">${safeCreadorBudget}</text>
      <text x="176" y="78" font-size="12" font-weight="300" fill="#868686">Update: <tspan font-weight="lighter">${safeFechaBudget}</tspan></text>
    </svg>
  `);
});

module.exports = router;