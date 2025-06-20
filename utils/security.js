// utils/security.js

const escapeChars = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&#39;',
};

const escape = (str) => {
  // Nos aseguramos de que sea una cadena de texto antes de intentar reemplazar
  return String(str).replace(/[<>&"']/g, (c) => escapeChars[c]);
};

module.exports = { escape };