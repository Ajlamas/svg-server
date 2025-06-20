const express = require("express");
const router = express.Router();
const { escape } = require("../../utils/security");

// Pequeña función para validar que un string es un código de color hexadecimal de 6 dígitos
const esHexColorValido = (color) => /^[0-9a-fA-F]{6}$/.test(color);

router.get("/", (req, res) => {
  // 1. Validamos los colores y usamos un valor por defecto si no son válidos
  const colorfondo = esHexColorValido(req.query.colorfondo) ? req.query.colorfondo : "FFFFFF";
  const colorestado = esHexColorValido(req.query.colorestado) ? req.query.colorestado : "FFB109";

  // 2. Capturamos el resto de los datos
  const {
    admin = "",
    fechallamada = "",
    agente = "",
    tipollamada = "",
    estado = "Pendiente"
  } = req.query;

  // 3. Creamos las variables seguras para los datos de texto
  const safeAdmin = escape(admin);
  const safeFechaLlamada = escape(fechallamada);
  const safeAgente = escape(agente);
  const safeTipoLlamada = escape(tipollamada);
  const safeEstado = escape(estado);

  res.setHeader("Content-Type", "image/svg+xml");
  // 4. Usamos las variables seguras y validadas en el SVG
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="98" fill="fff">
      <rect width="335" height="97.18" fill="#${colorfondo}" rx="4"/>
      <rect width="56" height="19" x="269" y="64.18" fill="#${colorestado}" rx="2"/>
      <text x="10" y="25" font-size="14" font-weight="400" fill="#071A2D">${safeAdmin}</text>
      <text x="210" y="25" font-size="12" font-weight="400" fill="#7E858C">${safeFechaLlamada}</text>
      <text x="25" y="59" font-size="10" font-weight="400" fill="#7E858C">Agente</text>
      <text x="10" y="75" font-size="10" font-weight="400" fill="#071A2D">${safeAgente}</text>
      <text x="155" y="60" font-size="10" font-weight="400" fill="#7E858C">Tipo</text>
      <text x="47%" y="75" font-size="10" font-weight="400" fill="#071A2D" text-anchor="middle">${safeTipoLlamada}</text>
      <text x="282" y="57" font-size="10" font-weight="400" fill="#7E858C">Estado</text>
      <text x="88.5%" y="77.5" font-size="10" font-weight="400" fill="#071A2D" text-anchor="middle">${safeEstado}</text>
      <path fill="#BFBFBF" d="M325 38.592v-.25H10v.5h315z"/>
      <path fill="#828282" d="M14.5 56.113c2.243 0 4.108 1.589 4.5 3.684h-.849c-.378-1.64-1.869-2.865-3.651-2.865s-3.273 1.225-3.651 2.864H10c.392-2.094 2.257-3.683 4.5-3.683m0-6.138a2.864 2.864 0 1 1-2.349 4.501h-.924a.82.82 0 0 1-.815-.734l-.005-.084V52.02a.41.41 0 0 1 .82 0v1.637h.529a2.864 2.864 0 0 1 2.744-3.683m0 .819a2.046 2.046 0 0 0-1.874 2.864h1.465a.41.41 0 0 1 0 .818h-.815c.342.256.765.41 1.224.41a2.046 2.046 0 0 0 0-4.092m3.684.818a.41.41 0 0 1 .409.41v1.636a.41.41 0 0 1-.82 0V52.02a.41.41 0 0 1 .41-.41m123.611 4.992a3.187 3.187 0 0 1 3.186 3.187v.245H144v-.245a2.206 2.206 0 0 0-4.413 0v.245h-.981v-.245a3.19 3.19 0 0 1 3.188-3.187m-.001-4.903a2.206 2.206 0 1 1 .001 4.413 2.206 2.206 0 0 1-.001-4.413m0 .98a1.226 1.226 0 1 0 0 2.453 1.226 1.226 0 0 0 0-2.452m6.62-2.942c.541 0 .98.44.981.98v1.963a.98.98 0 0 1-.981.98h-1.846l-1.587.793v-3.735a.98.98 0 0 1 .981-.98zm-2.452 3.13.375-.187h2.077v-1.962h-2.452zm127.101-4.398a1.25 1.25 0 0 1 1.742-.044l1.442 1.332H279v4.212h-1.416l.173.172a1.043 1.043 0 0 1-.967 1.752 1.04 1.04 0 0 1-1.178.589 1.04 1.04 0 0 1-1.19.587 1.04 1.04 0 0 1-1.676.309L269 53.68v-3.924h2.803zm-3.229 2.12v2.743l3.498 3.452a.207.207 0 0 0 .292-.294l-.434-.433.59-.59.434.433.005.006.298.298a.21.21 0 0 0 .295 0 .21.21 0 0 0 .003-.29l-.741-.741.59-.59 1.031 1.031a.208.208 0 1 0 .294-.294l-1.03-1.031.589-.59 1.326 1.326a.208.208 0 0 0 .294-.295l-3.389-3.388-.735.736a1.25 1.25 0 0 1-1.769 0l-.297-.298a.833.833 0 0 1-.007-1.172l.018-.018zm4.405-1.553a.416.416 0 0 0-.58.016l-2.092 2.14.298.297a.416.416 0 0 0 .589 0l1.326-1.326.294.295h.001l2.676 2.677h1.417V50.59h-2.247z"/>
    </svg>
  `);
});

module.exports = router;